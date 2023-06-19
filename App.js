import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomAnime from './services/RandomAnime';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/fondoNaruto.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <Header />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <RandomAnime>Aqui van las cosicas</RandomAnime>
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
    opacity: 0.7,
  },
});

export default App;