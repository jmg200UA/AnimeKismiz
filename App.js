import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomAnime from './services/RandomAnime';

const App = () => {
  
  //Botones página principal

  //Botón anime random
  const [reloadComponent, setReloadComponent] = useState(false);
  const [reloadInicio, setReloadInicio] = useState(false);
  //Press para mostrar Random Anime
  const handleButtonPress = () => {
    console.log('Botón Press pulsado');
    if(reloadInicio==false) setReloadInicio(true);
    setReloadComponent(!reloadComponent );
  };
  //Press para cerrar Random Anime
  const handleButtonCancel = () => {
    console.log('Botón Cancel pulsado');
    if(reloadInicio==true) setReloadInicio(false);
    setReloadComponent(!reloadComponent);
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/fondoNaruto.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <Header />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {reloadComponent && <RandomAnime />}
          {!reloadComponent && reloadInicio && <RandomAnime/>}
          <View>
          <Button title="Random Anime" onPress={handleButtonPress}/>
          {reloadInicio && (
            <Button title="Cerrar Random Anime" onPress={handleButtonCancel}/>
          )}
          </View>
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
});

export default App;