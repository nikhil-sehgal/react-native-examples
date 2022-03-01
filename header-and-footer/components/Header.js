import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#296073",
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white"
  }
});
