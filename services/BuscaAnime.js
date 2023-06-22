//Servicio que se encargará de hacer una petición a la api con el anime que se haya texteado
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-web';

const BuscaAnime = ({ anime}) => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`);
        setResultados(response.data.data);
        setLoading(false);
        console.log("Resultados busqueda de ", anime, ": ", response.data.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [anime]);

  //Redireccionar a url cuando se de click a la imagen
  const handleImagenClick = (url) => {
    console.log(url)
    // const url = resultados.url;
    // console.log("Url imagen: ", url);
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Volver Inicio" onPress={handlePressInicio} /> */}
      <FlatList
        data={resultados}
        renderItem={({ item }) =>
        <View style={styles.centrado}>
        <View>
        <TouchableOpacity onPress={() => handleImagenClick(item.url)}>
        <Image source={{ uri: item.images.jpg.image_url }} style={{ width: 200, height: 300 }} />
        </TouchableOpacity>
        </View>
        <Text><Text style={styles.bold}>Título:</Text> {item.title}📚</Text>
        <Text><Text style={styles.bold}>Tipo:</Text> {item.type}📍</Text>
        <Text><Text style={styles.bold}>Episodios:</Text> {item.episodes}💿</Text>
        <Text><Text style={styles.bold}>Ranking:</Text> {item.rank}⭐</Text>
      </View>
        }
        keyExtractor={item => item.mal_id.toString()}
      />
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
    marginTop: 20
  }
});

export default BuscaAnime;
  