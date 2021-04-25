import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MovieItem({ cover, title, synopsis, rating }) {
    return (
        <TouchableOpacity style={styles.movieItem}>
            <Image 
                source={{ uri: cover }} 
                style={styles.movieItemImage}
            />
            <View style={styles.movieContent}>
                <Text 
                    style={styles.movieTitle}
                >
                    {title}
                </Text>
                <Text 
                    style={styles.movieSynopsis}
                    numberOfLines={2}
                >
                    {synopsis}
                </Text>
                <View style={styles.ratingContainer}>
                    <FontAwesome
                        style={{ marginRight: 6 }} 
                        name="star" 
                        size={16} 
                        color={rating >= 1 ? '#FF9F00' : '#57575B'} 
                    />
                    <FontAwesome
                        style={{ marginRight: 6 }} 
                        name="star" 
                        size={16} 
                        color={rating >= 2 ? '#FF9F00' : '#57575B'} 
                    />
                    <FontAwesome
                        style={{ marginRight: 6 }} 
                        name="star" 
                        size={16} 
                        color={rating >= 3 ? '#FF9F00' : '#57575B'} 
                    />
                    <FontAwesome
                        style={{ marginRight: 6 }} 
                        name="star" 
                        size={16} 
                        color={rating >= 4 ? '#FF9F00' : '#57575B'} 
                    />
                    <FontAwesome
                        style={{ marginRight: 6 }} 
                        name="star" 
                        size={16} 
                        color={rating >= 5 ? '#FF9F00' : '#57575B'} 
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movieItem: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    movieItemImage: {
        width: 70,
        height: 110,
        borderRadius: 5,
        marginRight: 10
    },
    movieContent: {
        flex: 1,
    },
    movieTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        height: 25,
        fontFamily: 'Poppins_500Medium'
    },
    movieSynopsis: {
        color: '#585D62',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
        marginVertical: 6,
    },
        ratingContainer: {
        flexDirection: 'row'
    }
});