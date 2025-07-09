import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Footer = () => (
  <Text style={styles.footer}>By kems Resources</Text>
);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#666666',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
});

export default Footer;