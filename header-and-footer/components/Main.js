import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>This is the application main area.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  mainText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
