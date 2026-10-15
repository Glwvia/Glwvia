import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import mobileAds, {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';

// ===== YOUR REAL MONEY IDS =====
const BANNER_ID = "ca-app-pub-9295233124796910/3736160403";
const INTERSTITIAL_ID = "ca-app-pub-9295233124796910/3049764691";
// App ID: ca-app-pub-9295233124796910~4978668895 (already in app.json)

const interstitial = InterstitialAd.createForAdRequest(INTERSTITIAL_ID, {
  requestNonPersonalizedAdsOnly: true,
});

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialize AdMob
    mobileAds().initialize();

    // Interstitial listener
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    interstitial.load();

    return () => {
      unsubscribe();
    };
  }, []);

  const showInterstitial = () => {
    if (loaded) {
      interstitial.show();
      setLoaded(false);
      // Preload next one
      setTimeout(() => interstitial.load(), 1000);
    } else {
      console.log("Ad not loaded yet");
      interstitial.load();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>GLWVIA</Text>
        <Text style={styles.subtitle}>Real Ads - Real Money</Text>
        
        <View style={styles.button}>
          <Button title="Show Full-Screen Ad" onPress={showInterstitial} color="#1E88E5" />
        </View>

        <Text style={styles.note}>Banner ad dey bottom - e go earn you money 24/7</Text>
      </View>

      {/* REAL BANNER AD - ALWAYS VISIBLE */}
      <View style={styles.banner}>
        <BannerAd
          unitId={BANNER_ID}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 40,
  },
  button: {
    marginVertical: 20,
    width: '80%',
  },
  note: {
    marginTop: 20,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
});