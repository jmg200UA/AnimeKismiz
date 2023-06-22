import React, { useState } from 'react';
import { View, Text, Button, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import MuestraRandomAnime from './components/MuestraRandomAnime';
import MuestraTopAnime from './components/MuestraTopAnime';
import Buscador from './components/Buscador';
import AnimesRecomendados from './components/AnimesRecomendados';
import BuscaAnime from './services/BuscaAnime';

const App = () => {
  
  //Botones página principal, controlan comportamiento de la vista de la app

  //Control de páginas => 0: Inicio, 1: Buscador
  const [pagina, setPagina] = useState(0);
  const handleBusqueda = () => {
    console.log('Botón Top abierto');
    setPagina(1);
    console.log("Entra en handleBusqueda y valor de la Pagina es : ", pagina);
  };

  //Buscador
  const [valorBusqueda, setValorBusqueda] = useState('');
  const handleBuscaAnime = (busqueda) => {
    setValorBusqueda(busqueda); // Actualizar el valor de la búsqueda en el estado
  };

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
        source={require("./assets/fondoNaruto.jpg")}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <Header />
        <Buscador onBusqueda={handleBusqueda} onBuscaAnime={handleBuscaAnime} />
        <ScrollView style={{ marginBottom: 150 }}>
          {/* Si pagina es = 1 se renderizan los animes buscados, sino el resto de lógica */}
          {pagina === 1 ? (
            <BuscaAnime anime={valorBusqueda}/>
          ) : (
            <View style={styles.buttonContainer}>
            {!botonPulsadoTop && (
              <MuestraRandomAnime
                onBotonCerradoRandom={handleButtonCancellRandom}
                onBotonPulsadoRandom={handleButtonPressRandom}
                style={styles.buttonRandom}
              />
            )}
            {!botonPulsadoRandom && (
              <MuestraTopAnime
                onBotonCerradoTop={handleButtonCancelTop}
                onBotonPulsadoTop={handleButtonPressTop}
                style={styles.buttonTop}
              />
            )}
          </View>
          )}
          <View style={{ flex: 1 }}>
            <AnimesRecomendados />
          </View>
        </ScrollView>

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
    width: '100%',
    height: '100%'
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