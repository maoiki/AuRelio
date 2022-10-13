import React from 'react';
import { View,StyleSheet, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { theme } from '../theme/theme';

export function Header ({navigation}){
    return(
  <View style={styles.header}>
        <Text style={styles.text}> AuRelius </Text>
      <FontAwesome style={styles.icon} filled name="heart" size={26} color={theme.colors.orange}  />
  </View>
    )};
    
    const styles = StyleSheet.create({
        header: {
            flexDirection:'row',
            padding:10,
            height:50,
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            justifyContent:'space-between',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 0.62,
            elevation: 4,
        
        },
        text: {
          fontSize:28,
          color: theme.colors.green,
        },
        icon: {
          marginRight: 10
        },
    });
