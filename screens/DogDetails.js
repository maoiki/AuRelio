import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { Header } from '../src/components/Header';
import { theme } from '../src/theme/theme'



export default function DogDetails({navigation, route}) {



  return (
    <View style={styles.container}>
      
      <View>
        <Image style={styles.detailsImg} aspectRatio={route.params?.infos__img_width / route.params?.infos__img_height } source={{uri: route.params?.infos__img_url}}/>
        <Text style={styles.breedname}>{route.params?.infos__breed}</Text>
      </View>

      <View style={styles.infos_box}>
        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Temperamento: </Text>
          <Text> {route.params?.infos__temper} </Text>
        </View>

        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Expectativa de vida: </Text>
          <Text> {route.params?.infos__life_span} </Text>
        </View>

        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Altura: </Text>
          <Text> {route.params?.infos__height} cm</Text>
        </View>

        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Peso: </Text>
          <Text> {route.params?.infos__weight} kg</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f',
    marginTop: Constants.statusBarHeight,
  },
  breedname: {
    fontSize:24,
    color: theme.colors.text_primary,
    alignSelf: 'center',

  },
  detailsImg: {
    borderRadius: 50,
  },
  infos_box: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  infos_content: {
    borderRadius: 8,
    backgroundColor: theme.colors.background,
    marginVertical: 10,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.62,
    elevation: 4,
  }
});