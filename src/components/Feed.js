import React, { useEffect, useState } from 'react';
import { View,StyleSheet, Image, FlatList } from 'react-native';

export function Feed ({navigation}){

  const [posts, setPosts] = useState([]);

  useEffect(function(){
      async function getData() {
          const response = await fetch('https://api.thedogapi.com/v1/images/search?size=large&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15', {headers: { 
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
      <View style={styles.post}>
              <Image style={styles.image} source={{uri: item.url}} aspectRatio={item.width/item.height} />
      </View>
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
        padding: 10,
        borderRadius: 50,
      },
      image: {
        borderRadius: 50,
        paddingBottom: 10,
      },
    });
