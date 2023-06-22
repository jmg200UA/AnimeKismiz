//Componente con el buscador
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import BuscaAnime from '../services/BuscaAnime'


const Buscador= ({onBusqueda, onBuscaAnime, onReset}) => {

  //Para actualizar la busqueda y mandar el parametro a BuscarAnime para hacer la peti
    const [busqueda, setBusqueda] = useState("");
    const [reset, setReset] = useState(false);
    const handleBusqueda = () => {
      if (busqueda.trim() !== "") {
        onBuscaAnime(busqueda);
        onBusqueda();
        setReset(true);
      }
    };

    //Para boton de reset para mandar a la pagina de inicio
    const handleReset = () => {
      onReset();
      setReset(false);
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
        {reset && (
        <Button title='🔁' onPress={handleReset} style={{width: 5}}/>
      )}
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