import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Text, Button} from 'react-native';
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
          <Text style={styles.infos_description}> {route.params?.infos__temper} </Text>
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
    backgroundColor:theme.colors.background,
  },
  breedname: {
    fontSize:24,
    color: theme.colors.orange,
    alignSelf: 'center',
    position: 'relative',
    top: -28,
    backgroundColor:theme.colors.background,
marginHorizontal:10,
  },
  detailsImg: {
  },
  infos_box: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  infos_content: {
    borderColor: theme.colors.orange,
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
  },
  infos_title: {
    color: theme.colors.green,
    fontSize: 20,
  },
  infos_description: {
    fontSize: 16,
  }
});