//Componente con el buscador
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import BuscaAnime from '../services/BuscaAnime'


const Buscador= ({onBusqueda, onBuscaAnime}) => {

    const [busqueda, setBusqueda] = useState("");
    var contbusqueda= "";

    const handleBusqueda = () => {
      if (busqueda.trim() !== "") {
        onBuscaAnime(busqueda);
        onBusqueda();
      }
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Busca tu anime fav"
          value={busqueda}
          onChangeText={(text) => setBusqueda(text)}
          onSubmitEditing={handleBusqueda}
        />
        <Button style={styles.button} title="Buscar" onPress={handleBusqueda} />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      top: 10,
      marginLeft: 5,
      marginRight: 5
    },
    input: {
      backgroundColor: 'white',
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginRight: 5,
      paddingHorizontal: 10,
      textAlign: 'center'
    },
    button: {
      marginLeft: 0,
    },
  });

export default Buscador;