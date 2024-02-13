import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

import CategoriesScreen from './screens/CategoriesScreen'; // Подставьте правильный путь


const categories = [
  { 
    id: 1, 
    title: 'Пицца', 
    description: 'Вкусная пицца', 
    price: 'от 32 руб.',
    products: [
      { id: 11, title: 'Маргарита', description: 'С вишневыми помидорами', price: '50 руб.' },
      { id: 12, title: 'Пепперони', description: 'Острая и вкусная', price: '50 руб.' },
      { id: 13, title: 'Гавайская', description: 'С ананасами и ветчиной', price: '40 руб.' },
      { id: 14, title: 'Вегетарианская', description: 'С овощами и грибами', price: '32 руб.' },
      { id: 15, title: 'Четыре сыра', description: 'Плавленный сыр в каждом кусочке', price: '38 руб.' },
    ],
    
  },
  { 
    id: 2, 
    title: 'Напитки', 
    description: 'Освежающие напитки', 
    price: 'от 5 руб.',
    products: [
      { id: 71, title: 'Кола', description: 'Газированный напиток', price: '5 руб.' },
      { id: 72, title: 'Чай', description: 'Ароматный чай', price: '7 руб.' },
      { id: 73, title: 'Кофе', description: 'Крепкий кофе', price: '8 руб.' },
      { id: 74, title: 'Сок', description: 'Свежевыжатый сок', price: '6 руб.' },
      { id: 75, title: 'Молоко', description: 'Натуральное молоко', price: '5 руб.' },
      { id: 75, title: 'Энергетик Energy', description: 'Энергетик от Energy', price: '4 руб.' }
    ],
  },
  { 
    id: 3, 
    title: 'Фастфуд', 
    description: 'Быстрые и вкусные блюда', 
    price: 'от 2 руб.',
    products: [
      { id: 81, title: 'Хот-дог', description: 'С луком и горчицей', price: '2 руб.' },
      { id: 82, title: 'Гамбургер', description: 'С сочным мясом', price: '5 руб.' },
      { id: 83, title: 'Картошка фри', description: 'Хрустящая картошка', price: '3 руб.' },
      { id: 84, title: 'Чизбургер', description: 'С сыром и овощами', price: '4 руб.' },
      { id: 85, title: 'Куриные крылья', description: 'Острые куриные крылья', price: '3 руб.' },
    ],
  },
  { 
    id: 4, 
    title: 'Мороженное', 
    description: 'Летнее освежение', 
    price: 'от 5 руб.',
    products: [
      { id: 91, title: 'Ванильное', description: '', price: '2 руб.' },
      { id: 92, title: 'Шоколадное', description: 'Нежное шоколадное мороженное', price: '3 руб.' },
      { id: 93, title: 'Лимонное', description: 'Свежий цитрусовый вкус', price: '4 руб.' },
      { id: 94, title: 'Множество вкусов', description: 'Разнообразие вкусов', price: '5 руб.' },
      { id: 95, title: 'Фруктовое', description: 'С множеством свежих фруктов', price: '6 руб.' },
    ],
  },
];

const ProductDetailsScreen = ({ route }) => {
  const { title, description, price, products } = route.params.product;

  useEffect(() => {
    console.log('ProductDetailsScreen монтируется');
    
    return () => {
      console.log('ProductDetailsScreen размонтируется');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.sectionTitle}>Доступные продукты:</Text>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() => alert(`Выбран продукт: ${product.title}`)}
          style={styles.productContainer}
        >
          <Text style={styles.productTitle}>{product.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const WebViewScreen = () => {
  useEffect(() => {
    console.log('WebViewScreen монтируется');
    
    return () => {
      console.log('WebViewScreen размонтируется');
    };
  }, []);

  const url = 'https://eda.yandex.ru/d/pizza?lang=ru&redirectFrom=root_eda.yandex.ru';

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </View>
  );
};

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Главная</Text>
    <Text style={styles.description}>Добро пожаловать!</Text>
  </View>
);

const FavoriteScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Избранное</Text>
    <Text style={styles.description}>Ваши избранные товары здесь</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CategoriesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ title: 'Доступные категории' }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
      options={{ title: 'Подробности продукта' }}
    />
    <Stack.Screen
      name="WebView"
      component={WebViewScreen}
      options={{ title: 'Веб-просмотр' }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главная" component={HomeScreen} />
        <Tab.Screen name="Категории" component={CategoriesStack} />
        <Tab.Screen name="Избранное" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
