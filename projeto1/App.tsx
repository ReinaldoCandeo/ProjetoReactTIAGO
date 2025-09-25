import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            drawerLabel: 'Início',
            title: 'Tela Home'
          }}
        />
        <Drawer.Screen 
          name="Perfil" 
          component={ProfileScreen}
          options={{
            drawerLabel: 'Perfil',
            title: 'Tela Perfil'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
