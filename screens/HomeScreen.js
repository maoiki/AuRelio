import React from 'react';
import { StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { Header, Feed } from '../src/components/' 


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Header navigation={navigation}/>
      <Feed/>
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