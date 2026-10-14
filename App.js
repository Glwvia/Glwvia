import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [screen, setScreen] = useState('discover');
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.logo}>Glwvia ✨</Text>
        <Text style={styles.slogan}>Where Connections Shine</Text>
      </View>
      {screen==='discover' && (
        <ScrollView style={styles.content}>
          <Text style={styles.h1}>🔥 Discover Abuja</Text>
          <View style={styles.card}><Text style={styles.cardTitle}>Sarah, 24 — 0.5km away</Text><Text style={styles.cardSub}>Active now • Loves travel</Text></View>
          <View style={styles.card}><Text style={styles.cardTitle}>David, 27 — 1.2km away</Text><Text style={styles.cardSub}>Verified • Entrepreneur</Text></View>
          <View style={styles.cardLock}><Text style={styles.cardTitle}>Premium 🔒</Text><Text style={styles.cardSub}>Pay ₦3,000/mo to see who liked you & earn referrals</Text></View>
          <TouchableOpacity style={styles.payBtn}><Text style={styles.payText}>Unlock Premium — Start Earning</Text></TouchableOpacity>
        </ScrollView>
      )}
      {screen==='chat' && (<View style={styles.content}><Text style={styles.h1}>💬 Chats</Text><Text style={styles.cardSub}>Matches will appear here.</Text></View>)}
      {screen==='profile' && (<View style={styles.content}><Text style={styles.h1}>👤 Wallet</Text><Text style={styles.bigMoney}>₦0.00</Text><Text style={styles.cardSub}>Share link and earn 40% per sub.</Text></View>)}
      <View style={styles.nav}>
        <TouchableOpacity onPress={()=>setScreen('discover')}><Text style={[styles.navItem, screen==='discover'&&styles.active]}>🔥 Discover</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setScreen('chat')}><Text style={[styles.navItem, screen==='chat'&&styles.active]}>💬 Chat</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setScreen('profile')}><Text style={[styles.navItem, screen==='profile'&&styles.active]}>👤 Wallet</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:'#0f0f12',paddingTop:50},
  header:{alignItems:'center',padding:16,borderBottomWidth:1,borderColor:'#222'},
  logo:{color:'#fff',fontSize:28,fontWeight:'bold'},
  slogan:{color:'#f9a8d4',marginTop:4},
  content:{flex:1,padding:20},
  h1:{color:'#fff',fontSize:22,fontWeight:'bold',marginBottom:16},
  card:{backgroundColor:'#1a1a1f',padding:16,borderRadius:16,marginBottom:12,borderWidth:1,borderColor:'#2a2a30'},
  cardLock:{backgroundColor:'#2a1a2a',padding:16,borderRadius:16,marginBottom:12,borderWidth:1,borderColor:'#ff2d6b'},
  cardTitle:{color:'#fff',fontWeight:'bold',fontSize:16,marginBottom:4},
  cardSub:{color:'#aaa'},
  payBtn:{backgroundColor:'#ff2d6b',padding:18,borderRadius:100,alignItems:'center',marginTop:20},
  payText:{color:'#fff',fontWeight:'bold'},
  nav:{flexDirection:'row',justifyContent:'space-around',padding:16,backgroundColor:'#1a1a1f',borderTopWidth:1,borderColor:'#222'},
  navItem:{color:'#888'},
  active:{color:'#ff2d6b',fontWeight:'bold'},
  bigMoney:{color:'#fff',fontSize:36,fontWeight:'bold',marginVertical:12}
});
