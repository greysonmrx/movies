import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import MovieItem from './src/components/MovieItem';

import profileImg from './src/assets/profile.jpg';

import featuredMovies from './src/assets/featuredMovies';
import movies from './src/assets/movies';

const WIDTH = Dimensions.get('window').width;

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
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={{ paddingTop: 20 }}
    >
      <StatusBar style="light"/>
      <View style={styles.header}>
        <View>
          <Text style={styles.message}>Olá,</Text>
          <Text style={styles.name}>Greyson Santos</Text>
        </View>
        <Image source={profileImg} style={styles.image}/>
      </View>
      <FlatList
        data={featuredMovies}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        pagingEnabled={true}
        snapToInterval={WIDTH - 20}
        ItemSeparatorComponent={() => <View style={{ width: 20 }}/>}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.bannerButton}>
            <Image source={{ uri: item.banner }} style={styles.bannerImage}/>
          </TouchableOpacity>
        )}
      />
      <View style={styles.moviesList}>
          <Text style={styles.moviesListTitle}>Lançamentos</Text>
          {
            movies.map((item) => (
              <MovieItem 
                key={item.id.toString()}
                cover={item.cover}
                title={item.title}
                synopsis={item.synopsis}
                rating={item.rating}
              />
            ))
          }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111820'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 35,
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
  },
  bannerButton:{
    width: WIDTH - 40,
    aspectRatio: 1.78
  },
  bannerImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  moviesList: {
    padding: 20
  },
  moviesListTitle: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    marginBottom: 15
  },
});
