import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import mobileAds, {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';

const BANNER_ID = "ca-app-pub-9295233124796910/3736160403";
const INTERSTITIAL_ID = "ca-app-pub-9295233124796910/3049764691";

const interstitial = InterstitialAd.createForAdRequest(INTERSTITIAL_ID, {
  requestNonPersonalizedAdsOnly: true,
});

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    mobileAds().initialize();
    const unsub = interstitial.addAdEventListener(AdEventType.LOADED, () => setLoaded(true));
    interstitial.load();
    return () => unsub();
  }, []);

  const showAd = () => {
    if (loaded) {
      interstitial.show();
      setLoaded(false);
      setTimeout(() => interstitial.load(), 1000);
    } else {
      interstitial.load();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>GLWVIA</Text>
        <Text style={styles.subtitle}>Real Ads Active</Text>
        <View style={styles.btn}><Button title="Show Full Ad" onPress={showAd} /></View>
        <Text style={styles.small}>Banner dey bottom - e dey earn</Text>
      </View>
      <View style={styles.banner}>
        <BannerAd unitId={BANNER_ID} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{ requestNonPersonalizedAdsOnly: true }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold' },
  subtitle: { fontSize: 18, color: '#666', marginTop: 8 },
  btn: { marginTop: 30, width: '80%' },
  small: { marginTop: 20, fontSize: 11, color: '#999' },
  banner: { alignItems: 'center', paddingBottom: 10 },
});