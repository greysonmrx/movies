import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  FlatList,
  SafeAreaView,
} from "react-native";

import MovieItem from "../components/MovieItem";

import movies from "../assets/movies";

const WIDTH = Dimensions.get("window").width;

export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  function goToMovieDetailsPage(movie) {
    navigation.navigate("MovieDetails", { movie });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar</Text>
        <Text style={styles.results}>{filteredMovies.length} Resultados</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color="#989CA1" />
        <TextInput
          placeholder="Buscar filmes"
          style={styles.input}
          placeholderTextColor="#4A5055"
          onChangeText={setSearchText}
        />
      </View>
      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          contentContainerStyle={styles.moviesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieItem
              cover={item.cover}
              rating={item.rating}
              synopsis={item.synopsis}
              title={item.title}
              onPress={() => goToMovieDetailsPage(item)}
            />
          )}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            Nenhum resultado encontrado para "{searchText}" :(
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111820",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Poppins_600SemiBold",
  },
  results: {
    color: "#585D62",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  inputContainer: {
    height: 44,
    width: WIDTH - 50,
    backgroundColor: "#1D242B",
    marginHorizontal: 25,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  input: {
    marginLeft: 10,
    fontFamily: "Poppins_400Regular",
    flex: 1,
    color: "#FFFFFF",
  },
  moviesList: {
    padding: 25,
    paddingTop: 0,
  },
  noResultsContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  noResultsText: {
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    textAlign: "center",
  },
});
