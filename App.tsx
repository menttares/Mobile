import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

// Здесь должен быть импорт CategoriesScreen, но он был удален для краткости
import CategoriesScreen from './screens/CategoriesScreen';
import FavoriteScreen from './screens/FavoriteScreen';

const categories = [
  // Ваши категории здесь...
];

const ProductDetailsScreen = ({ route }) => {
  const { title, description, price, products } = route.params.product;
  const [favorite, setFavorite] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    console.log('ProductDetailsScreen монтируется');

    return () => {
      console.log('ProductDetailsScreen размонтируется');
    };
  }, []);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    if (favorite) {
      setFavoriteProducts(favoriteProducts.filter((product) => product.id !== route.params.product.id));
    } else {
      setFavoriteProducts([...favoriteProducts, route.params.product]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      <Button title={favorite ? 'Удалить из избранного' : 'Добавить в избранное'} onPress={toggleFavorite} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
