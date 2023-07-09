import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const AnimesRecomendados = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/recommendations/anime')
      .then(response => response.json())
      .then(data => {
        //setRecommendations(data.data.slice(0, 15));
        const primerosResultados = [];
        var cont=0;
        var repe = false; // variable para ver si se repite algun anime
        console.log("Titulo primero: ", data.data[0].entry[0].title)
        for (let i = 0; cont < 14 && i < data.data.length; i++) {
            repe=false;
            if(i==0){
                primerosResultados.push(data.data[i].entry[0]);
                        cont++;
            }
            else{
                for(let j=0; j<primerosResultados.length;j++){
                    if (primerosResultados[j].title==data.data[i].entry[0].title){
                        repe=true;
                    }
                }
                if(!repe){
                    primerosResultados.push(data.data[i].entry[0]);
                    cont++;
                }
            }
            
        }
        setRecommendations(primerosResultados);
        console.log("recomendaciones: ", primerosResultados);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  //Redireccionar a url cuando se de click a la imagen
  const handleImagenClick = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.titleSection}>😍Animes recomendados😍</Text>
      <FlatList style={styles.FlatList}
        data={recommendations}
        keyExtractor={item => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity style={{marginBottom:0}} onPress={() => handleImagenClick(item.url)}>
            <Image source={{ uri: item.images.jpg.image_url }} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth * 0.7;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 30
  },
  itemContainer: {
    width: itemWidth,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    height:150
  },
  titleSection:{
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5
  },
  FlatList:{
    marginLeft: 10
  }
});

export default AnimesRecomendados;
