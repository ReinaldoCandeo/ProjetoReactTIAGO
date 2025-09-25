import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookListScreen from './src/screens/BookListScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaDeLivros">
        <Stack.Screen 
          name="ListaDeLivros" 
          component={BookListScreen}
          options={{
            title: 'Lista de Livros',
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="DetalhesDoLivro" 
          component={BookDetailsScreen}
          options={{
            title: 'Detalhes do Livro',
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
