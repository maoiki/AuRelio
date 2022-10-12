import React from 'react';
import { View,StyleSheet, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { theme } from '../theme/theme';

export function Header ({navigation}){
    return(
  <View style={styles.header}>
      <View style={styles.title}>
        <FontAwesome5 name="dog" size={28} color={theme.colors.green} />
        <Text style={styles.text}> AuRelio </Text>
      </View>
      <FontAwesome5 style={styles.icon}  name="bars" size={26} color={theme.colors.green}  />
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
          fontSize:28,
          color: theme.colors.green,
        },
        icon: {
          marginRight: 10
        },
        title: {
          alignItems: 'center',
          flexDirection: 'row',
        }
    });
