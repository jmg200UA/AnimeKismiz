//Servicio que se encargará de hacer una petición a la api con el anime que se haya texteado
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const BuscaAnime = ({ anime }) => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`);
        setResultados(response.data.data);
        setLoading(false);
        console.log("Resultados busqueda de ", busqueda, ": ", data.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [anime]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <FlatList
        data={resultados}
        renderItem={({ item }) => <Text>{item.titles[0].title}</Text>}
        keyExtractor={item => item.mal_id.toString()}
      /> */}
      <Text>{resultados[0].titles.title}</Text>
    </View>
  );
};

export default BuscaAnime;
  