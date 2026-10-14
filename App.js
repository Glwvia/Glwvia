import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import mobileAds, { BannerAd, BannerAdSize, InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const BANNER_ID = TestIds.BANNER;
const INTERSTITIAL_ID = TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(INTERSTITIAL_ID);

export default function App() {
  const [screen, setScreen] = useState('discover');

  useEffect(() => {
    mobileAds().initialize();
    interstitial.load();
  }, []);

  const showAdThenGo = (nextScreen) => {
    interstitial.show();
    const unsub = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      unsub();
      setScreen(nextScreen);
      interstitial.load();
    });
  };

  const handleAction = (action) => {
    // Show ad before any free action
    interstitial.show();
    const unsub = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      unsub();
      alert(action + ' — SUCCESS! (Ad watched = you make money)');
      interstitial.load();
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.logo}>Glwvia</Text>
        <Text style={styles.slogan}>Where Connections Live</Text>
      </View>

      {screen==='discover' && (
        <ScrollView style={styles.content}>
          <Text style={styles.h1}>🔥 Discover</Text>
          <View style={styles.card}><Text>Post • FREE but watch ad</Text>
            <TouchableOpacity style={styles.payBtn} onPress={()=>handleAction('Post')}>
              <Text style={styles.payText}>Make Post (Free - Watch Ad)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}><Text>Go Live • FREE but watch ad</Text>
            <TouchableOpacity style={styles.payBtn} onPress={()=>handleAction('Go Live')}>
              <Text style={styles.payText}>Go Live (Free - Watch Ad)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}><Text>Chat/Text • FREE but watch ad</Text>
            <TouchableOpacity style={styles.payBtn} onPress={()=>showAdThenGo('chat')}>
              <Text style={styles.payText}>Open Chat (Free)</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {screen==='chat' && (
        <View style={styles.content}>
          <Text style={styles.h1}>Chats — All Free</Text>
          <Text>Texting is free, banner ad below = you make money</Text>
          <TouchableOpacity onPress={()=>setScreen('discover')}><Text>Back</Text></TouchableOpacity>
        </View>
      )}

      {/* THIS BANNER = MONEY NON-STOP FOR TEXT */}
      <BannerAd unitId={BANNER_ID} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </View>
  );
}

const styles = {
  container: { flex: 1, backgroundColor: '#0f0f12', paddingTop: 50 },
  header: { padding: 20, alignItems: 'center' },
  logo: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  slogan: { color: 'gray' },
  content: { flex: 1, padding: 15 },
  h1: { color: 'white', fontSize: 22, marginBottom: 15 },
  card: { backgroundColor: '#1f1f23', padding: 15, borderRadius: 12, marginBottom: 12 },
  payBtn: { backgroundColor: '#6d28d9', padding: 12, borderRadius: 8, marginTop: 10 },
  payText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
};