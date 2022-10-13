import React, { useEffect, useState } from 'react';
import { View,StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';


export function Feed ({navigation}){

  const [posts, setPosts] = useState([]);

  useEffect(function(){
      async function getData() {
          const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15', {headers: { 
            'content-Type': 'application/json',
            'x-api-key': 'live_jmRAbXnL9YkAF3X2g4o1D3OMFtv7OyGhnDJmakd00BOkT0Hvy68JK76oO3Ba1xZZ',
          }});
          const postsAPI = await response.json();
          setPosts(postsAPI)
        }
        getData();
  }, [])
  

function renderItem({ item }){
  return(
      <TouchableOpacity style={styles.post} 
                        onPress={() => navigation.navigate('DogDetails', 
                                        {
                                        infos__img_url: item.url,
                                        infos__img_height: item.height,
                                        infos__img_width: item.width, 
                                        infos__breed: item.breeds[0].name,
                                        infos__temper: item.breeds[0].temperament,
                                        infos__weight: item.breeds[0].weight.metric,
                                        infos__height: item.breeds[0].height.metric,
                                        infos__life_span: item.breeds[0].life_span,
                                        })}>
              <Image 
                style={styles.image} 
                source={{uri: item.url}} 
                aspectRatio={item.width/item.height} 
                
                />
      </TouchableOpacity>
  );
}

    return(
      <View style={styles.post}>
        <FlatList
        data={posts} 
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false} 
        />
      </View>    
    )};
    
    const styles = StyleSheet.create({
      post: {
        paddingHorizontal: 10,
        borderRadius: 50,
        marginBottom: 20,
        
      },
      image: {
        paddingTop: 10,
        borderRadius: 50,
      },
    });
