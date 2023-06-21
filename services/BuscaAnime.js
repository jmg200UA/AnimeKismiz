//Servicio que se encargará de hacer una petición a la api con el anime que se haya texteado
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';



const BuscaAnime = (anime) => {
  console.log("Anime buscado: ", anime)
//   fetch(`https://api.example.com/search?query=${anime}`)
//   .then(response => response.json())
//   .then(data => {
//     setResultados(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
  
//     return (
//       <View>
//         {anime && (
//           <View style={styles.centrado}>
//             <View>
//             <Image source={{ uri: anime.images.jpg.image_url }} style={{ width: 200, height: 300 }} />
//             </View>
//             <Text><Text style={styles.bold}>Título:</Text> {anime.title}📚</Text>
//             <Text><Text style={styles.bold}>Tipo:</Text> {anime.type}📍</Text>
//             <Text><Text style={styles.bold}>Episodios:</Text> {anime.episodes}💿</Text>
//             <Text><Text style={styles.bold}>Ranking:</Text> {anime.rank}⭐</Text>
//           </View>
//         )}
//       </View>
//     );
   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     text: {
//       fontSize: 16,
//       textAlign: 'center',
//     },
//     bold: {
//       fontWeight: 'bold',
//     },
//     centrado:{
//       flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     }
//   });
  
  export default BuscaAnime;
  