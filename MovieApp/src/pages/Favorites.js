import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import MovieItem from "../components/MovieItem";

import { useFavorites } from "../hooks/useFavorites";

export default function Favorites({ navigation }) {
  const { favorites, isLoading, fetchFavorites } = useFavorites();

  useEffect(fetchFavorites, []);

  useEffect(() => {
    console.log("fetchFavorites:changed");
  }, [fetchFavorites]);

  function goToMovieDetailsPage(movie) {
    navigation.navigate("MovieDetails", { movie });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.results}>{favorites.length} Resultados</Text>
      </View>
      <FlatList
        refreshing={isLoading}
        onRefresh={fetchFavorites}
        data={favorites}
        contentContainerStyle={styles.moviesList}
        ListEmptyComponent={
          !isLoading && (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                Você ainda não tem nenhum filme favorito :(
              </Text>
            </View>
          )
        }
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
  moviesList: {
    padding: 25,
    paddingTop: 0,
  },
  noResultsContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  noResultsText: {
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    textAlign: "center",
  },
});
