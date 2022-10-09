import React from 'react';
import { View,StyleSheet, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function Header ({navigation}){
    return(
  <View style={styles.header}>
      <View style={styles.titulo}>
        <Text style={styles.text}> AuRelio </Text>
        <FontAwesome5 name="dog" size={24} color="black" />
      </View>
      <FontAwesome5 style={styles.icon}  name="bars" size={26} color="black"  />
  </View>
    )};
    
    const styles = StyleSheet.create({
        header: {
            flexDirection:'row',
            padding:10,
            height:50,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent:'space-between',
        },
        text: {
          fontSize:26,
        },
        icon: {
          marginRight: 10
        },
        titulo: {
          alignItems: 'center',
          flexDirection: 'row',
        }
    });
