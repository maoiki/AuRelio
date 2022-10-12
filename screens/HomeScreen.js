import React from 'react';
import { StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Header } from '../src/components/Header';
import { Feed } from '../src/components/Feed';




export default function HomeScreen({navigation}) {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Header navigation={navigation}/>
      <Feed navigation={navigation}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    marginTop: Constants.statusBarHeight,
  }
});