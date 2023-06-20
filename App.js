import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import MuestraRandomAnime from './pages/MuestraRandomAnime';
import MuestraTopAnime from './pages/MuestraTopAnime';
import Buscador from './components/Buscador';
import AnimesRecomendados from './components/AnimesRecomendados';

const App = () => {
  
  //Botones página principal



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/fondoNaruto.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <Header />
        <Buscador />
        <View style={styles.buttonContainer}>
        <MuestraRandomAnime style={styles.buttonRandom}/>
        <MuestraTopAnime style={styles.buttonTop}/>
        </View>
        <View>
        <AnimesRecomendados/>
          
        </View>
        <Footer />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonRandom:{
    marginRight: 10
  },
  buttonTop:{
    marginRight: 10
  }
});

export default App;