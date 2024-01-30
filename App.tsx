import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const categories = [
  { id: 1, title: 'Пицца', description: 'Вкусная пицца', price: 'от 300 руб.' },
  { id: 2, title: 'Суши', description: 'Свежие суши', price: 'от 400 руб.' },
  { id: 3, title: 'Бургеры', description: 'Сочные бургеры', price: 'от 250 руб.' },
  { id: 4, title: 'Паста', description: 'Итальянская паста', price: 'от 200 руб.' },
  { id: 5, title: 'Салаты', description: 'Свежие салаты', price: 'от 150 руб.' },
  { id: 6, title: 'Десерты', description: 'Нежные десерты', price: 'от 100 руб.' },
];

const App = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const handlePress = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Доступные категории</Text>
        </View>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <TouchableOpacity onPress={() => handlePress(category.id)}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
            {expandedCategories.includes(category.id) && (
              <View>
                <Text style={styles.categoryDescription}>{category.description}</Text>
                <Text style={styles.categoryPrice}>{category.price}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
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
  categoryDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  categoryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green',
  },
});

export default App;
