import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mobileAds, { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const AD_UNIT = __DEV__? TestIds.INTERSTITIAL : 'ca-app-pub-9295233124769910/3849764691';
const interstitial = InterstitialAd.createForAdRequest(AD_UNIT, {
  requestNonPersonalizedAdsOnly: true,
});

export default function App() {
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    mobileAds().initialize().then(() => {
      // load after 4 seconds
      setTimeout(() => interstitial.load(), 4000);
    });

    const onLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      if (!hasShown) {
        interstitial.show();
        setHasShown(true);
      }
    });

    return () => onLoaded();
  }, [hasShown]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Glwvia</Text>
      <Text style={styles.sub}>Where connections shines</Text>
      <Text style={styles.note}>Ad shows once per hour only</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold' },
  sub: { fontSize: 16, marginTop: 8, color: '#555' },
  note: { fontSize: 12, marginTop: 20, color: '#999' }
});
