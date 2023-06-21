import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import MuestraRandomAnime from './pages/MuestraRandomAnime';
import MuestraTopAnime from './pages/MuestraTopAnime';
import Buscador from './components/Buscador';
import AnimesRecomendados from './components/AnimesRecomendados';

const App = () => {
  
  //Botones página principal, controlan comportamiento de la vista de la app cuando un boton es pulsado
  //Sirve para mostrar u ocultar cosas

  //Animes Top
  const [botonPulsadoTop, setBotonPulsadoTop] = useState(false);
  //Mostrar
  const handleButtonPressTop = () => {
    console.log('Botón Top abierto');
    setBotonPulsadoTop(true);
  };
  //Cerrar
  const handleButtonCancelTop = () => {
    console.log('Botón Top cerrado');
    setBotonPulsadoTop(false);
  };

  //Animes random
  const [botonPulsadoRandom, setBotonPulsadoRandom] = useState(false);
  //Mostrar
  const handleButtonPressRandom = () => {
    console.log('Botón Random abierto');
    setBotonPulsadoRandom(true);
  };
  //Cerrar
  const handleButtonCancellRandom = () => {
    console.log('Botón Random cerrado');
    setBotonPulsadoRandom(false);
  };



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
        {!botonPulsadoTop && <MuestraRandomAnime onBotonCerradoRandom={handleButtonCancellRandom} onBotonPulsadoRandom={handleButtonPressRandom} style={styles.buttonRandom}/>}
        {!botonPulsadoRandom && <MuestraTopAnime onBotonCerradoTop={handleButtonCancelTop} onBotonPulsadoTop={handleButtonPressTop} style={styles.buttonTop}/>}
        </View>
        <View style={{flex: 1}}>
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