import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 - Todos los derechos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    color: '#888',
  },
});

export default Footer;