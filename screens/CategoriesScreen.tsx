import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native';

const CategoriesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, title: 'Пицца', description: 'Вкусная пицца', price: 'от 32 руб.' },
    { id: 2, title: 'Напитки', description: 'Освежающие напитки', price: 'от 5 руб.' },
    { id: 3, title: 'Фастфуд', description: 'Быстрые и вкусные блюда', price: 'от 2 руб.' },
    { id: 4, title: 'Мороженное', description: 'Летнее освежение', price: 'от 5 руб.' },
  ]);

  const addToFavorites = (id) => {
    const product = products.find((item) => item.id === id);
    if (product && !favorites.find((item) => item.id === id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Доступные категории</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            {favorites.find((favorite) => favorite.id === item.id) ? (
              <Button title="Удалить из избранных" onPress={() => removeFromFavorites(item.id)} />
            ) : (
              <Button title="Добавить в избранные" onPress={() => addToFavorites(item.id)} />
            )}
          </View>
        )}
      />
      <Text style={styles.title}>Избранные товары</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyMessage}>Список избранных товаров пуст</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Button title="Удалить из избранных" onPress={() => removeFromFavorites(item.id)} />
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
    marginBottom: 10,
  },
  productContainer: {
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default CategoriesScreen;
