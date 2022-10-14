import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { theme } from '../theme/theme';

export function Header ({navigation}){


    return(
        <View style={styles.header}>
          <Text style={styles.text}> AuRelius </Text>
          <FontAwesome5 style={styles.icon} filled name="dog" size={26} color={theme.colors.green}   />

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
        modal: {
          fontSize:20,
          backgroundColor: theme.colors.green,
          color: theme.colors.white,
          width: 300,
          height: 200,
          padding: 10,
          alignSelf: 'center',
          justifySelf: 'center',
        },
        modal_box: {
          alignItems: "center",
          justifyContent: "center",
        } 
    });
