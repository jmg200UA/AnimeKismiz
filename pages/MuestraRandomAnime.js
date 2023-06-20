//Página que mostrará un anime aleatorio tras realizar una petición a la api
//Los resultados ya los renderizamos directamente en el service, aquí le añadimos los botones para buscar y las condiciones
import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import RandomAnime from '../services/RandomAnime';

const MuestraRandomAnime = () => {
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
      <View style={styles.buttonRandom}>
        {reloadComponent && <RandomAnime />}
        {!reloadComponent && reloadInicio && <RandomAnime />}
        <View>
          <Button title="Random Anime" onPress={handleButtonPress} />
          {reloadInicio && (
            <Button title="Cerrar Random Anime" onPress={handleButtonCancel} />
          )}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    buttonRandom:{
      margin: 10
    },
  });

export default MuestraRandomAnime;