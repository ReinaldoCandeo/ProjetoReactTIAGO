import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Tela Home'
          }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetailsScreen}
          options={{
            title: 'Tela Detalhes'
          }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen}
          options={{
            title: 'Tela Perfil'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
