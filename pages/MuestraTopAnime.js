//Página que mostrará un anime aleatorio tras realizar una petición a la api
//Los resultados ya los renderizamos directamente en el service, aquí le añadimos los botones para buscar y las condiciones
import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import TopAnime from '../services/TopAnime';

const MuestraTopAnime = () => {
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
      <View style={styles.buttonTop}>
        {reloadComponent && <TopAnime />}
        {!reloadComponent && reloadInicio && <TopAnime />}
        <View>
          <Button title="Top Anime" onPress={handleButtonPress} />
          {reloadInicio && (
            <Button title="Cerrar Top Anime" onPress={handleButtonCancel} />
          )}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    buttonTop:{
      margin: 10
    },
  });

export default MuestraTopAnime;