import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi... Saya Syakirah Qanitah</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    position: 'absolute', // Agar teks berada di tengah layar
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Mengisi lebar layar
    paddingHorizontal: 20, // Memberikan jarak horizontal
    position: 'absolute',
    bottom: 50, // Menempatkan kotak sedikit di atas bawah layar
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})