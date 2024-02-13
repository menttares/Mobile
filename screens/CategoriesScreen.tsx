import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


а м
const CategoriesScreen = ({ navigation }) => {
  const handlePress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Доступные категории</Text>
      <TouchableOpacity
        onPress={() => handlePress({ id: 1, title: 'Пицца', description: 'Вкусная пицца', price: 'от 32 руб.', products: [] })}
        style={styles.categoryContainer}
      >
        <Text style={styles.categoryTitle}>Пицца</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress({ id: 2, title: 'Напитки', description: 'Освежающие напитки', price: 'от 5 руб.', products: [] })}
        style={styles.categoryContainer}
      >
        <Text style={styles.categoryTitle}>Напитки</Text>
      </TouchableOpacity>
      {/* Добавьте другие категории здесь */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  categoryContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CategoriesScreen;
