import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import axios from 'axios';



const TopAnime = () => {
  console.log("Entra en random anime");
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTopAnime = async () => {
        try {
          const response = await axios.get('https://api.jikan.moe/v4/top/anime');
          console.log(response);
          console.log(response.data);
          const numeroRandom = Math.floor(Math.random() * 25); // Generamos un número aleatorio del 0 al 24
          setAnime(response.data.data[numeroRandom]);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchTopAnime();
    }, []);
  
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }

    //Redireccionar a url cuando se de click a la imagen
    // const handleImagenClick = (url) => {
    //   Linking.openURL(url);
    // };
  
    return (
      <View>
        {anime && (
          <View style={styles.centrado}>
            <View>
            {/* <TouchableOpacity onPress={() => handleImagenClick(anime.url)}> */}
            <Image source={{ uri: anime.images.jpg.image_url }} style={{ width: 200, height: 300 }} />
            {/* </TouchableOpacity> */}
            </View>
            <Text><Text style={styles.bold}>Título:</Text> {anime.title}📚</Text>
            <Text><Text style={styles.bold}>Tipo:</Text> {anime.type}📍</Text>
            <Text><Text style={styles.bold}>Episodios:</Text> {anime.episodes}💿</Text>
            <Text><Text style={styles.bold}>Ranking:</Text> {anime.rank}⭐</Text>
          </View>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
    },
    bold: {
      fontWeight: 'bold',
    },
    centrado:{
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }
  });
  
  export default TopAnime;
  