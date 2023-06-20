import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomAnime from './services/RandomAnime';

const App = () => {
  
  //Botones página principal

  //Botón anime random
  const [reloadComponent, setReloadComponent] = useState(false);
  const handleButtonPress = () => {
    console.log('Botón pulsado');
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
          <Button title="Random Anime" onPress={handleButtonPress} />
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