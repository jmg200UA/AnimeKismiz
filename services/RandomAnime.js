import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';



const RandomAnime = () => {
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchRandomAnime = async () => {
        try {
          const response = await axios.get('https://api.jikan.moe/v4/random/anime');
          console.log(response);
          console.log(response.data);
          setAnime(response.data.data);
          setLoading(false);
          console.log("Anime title: ", response.data.data.title);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchRandomAnime();
    }, []);
  
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
  
    return (
      <View>
        {anime && (
          <View>
            <View>
            <Image source={{ uri: anime.images.jpg.image_url }} style={{ width: 200, height: 300 }} />
            </View>
            <Text>Título: {anime.title}📚</Text>
            <Text>Tipo: {anime.type}📍</Text>
            <Text>Episodios: {anime.episodes}💿</Text>
            <Text>Ranking: {anime.rank}⭐</Text>
          </View>
        )}
      </View>
    );
  };
  
  export default RandomAnime;
  