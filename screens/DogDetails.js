import React from 'react';
import { StyleSheet, View, Image, Text, useWindowDimensions} from 'react-native';
import { theme } from '../src/theme/theme'


export default function DogDetails({navigation, route}) {


  return (
    <View style={styles.container}>
      
      <View>
        <Image style={styles.img_details} aspectRatio={route.params?.infos__img_width / route.params?.infos__img_height } source={{uri: route.params?.infos__img_url}}/>
        <Text style={styles.breedname}>{route.params?.infos__breed}</Text>
      </View>

      <View style={styles.infos_box}>
        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Temperament: </Text>
          <Text style={styles.infos_description}> {route.params?.infos__temper} </Text>
        </View>

        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Life span: </Text>
          <Text style={styles.infos_description}> {route.params?.infos__life_span} </Text>
        </View>

        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Height: </Text>
          <Text style={styles.infos_description}> {route.params?.infos__height} cm</Text>
        </View>

        <View style={styles.infos_content}>
          <Text style={styles.infos_title}> Weight: </Text>
          <Text style={styles.infos_description}> {route.params?.infos__weight} kg</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme.colors.green_dark,
  },
  img_details: {
  },
  breedname: {
    fontSize:24,
    color: theme.colors.white,
    alignSelf: 'center',
    position: 'relative',
    top: -32,
    backgroundColor:theme.colors.green_dark,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    padding:5,

  },
  infos_box: {
    marginHorizontal: 10,
  },
  infos_content: {
    borderRadius: 8,
    backgroundColor: theme.colors.background,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.62,
    elevation: 4,
    justifyContent: 'center',

  },
  infos_title: {
    color: theme.colors.green,
    fontSize: 20,
    alignSelf: 'center',

  },
  infos_description: {
    fontSize: 17,
    alignSelf: 'center',
    marginBottom: 5,

  }
});