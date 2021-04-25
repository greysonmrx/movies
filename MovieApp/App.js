import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import Constants from 'expo-constants';

import profileImg from './src/assets/profile.jpg';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.message}>Olá,</Text>
          <Text style={styles.name}>Greyson Santos</Text>
        </View>
        <Image source={profileImg} style={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111820',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: Constants.statusBarHeight
  },
  message: {
    color: '#64696E',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular'
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
