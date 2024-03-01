import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const FavoriteScreen = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Избранные товары</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyMessage}>Список избранных товаров пуст</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoriteScreen;
