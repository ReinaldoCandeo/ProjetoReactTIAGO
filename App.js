import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, StyleSheet } from 'react-native';

// ===== STACK NAVIGATION SCREENS =====

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes', { productId: 381 })}
      />
      <Button
        title="Abrir Drawer Menu"
        onPress={() => navigation.navigate('DrawerMenu')}
        color="#6c5ce7"
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { productId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Detalhes</Text>
      <Text style={styles.subtitle}>ID do Produto: {productId}</Text>
      <Button 
        title="Ir para Perfil" 
        onPress={() => navigation.navigate('Perfil')} 
      />
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.goBack()} 
        color="#636e72"
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Perfil</Text>
      <Button 
        title="Voltar" 
        onPress={() => navigation.goBack()} 
        color="#636e72"
      />
    </View>
  );
}

// ===== DRAWER NAVIGATION SCREENS =====

function DrawerHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home (Drawer)</Text>
      <Text style={styles.subtitle}>Esta é a tela Home do Drawer Menu</Text>
      <Button
        title="Ir para Stack Navigation"
        onPress={() => navigation.navigate('StackNavigation')}
        color="#00b894"
      />
    </View>
  );
}

function DrawerProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil (Drawer)</Text>
      <Text style={styles.subtitle}>Esta é a tela de Perfil do Drawer Menu</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('DrawerHome')}
        color="#636e72"
      />
    </View>
  );
}

// ===== NAVIGATORS =====

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator
function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2d3436',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="Detalhes" 
        component={DetailsScreen}
        options={{ title: 'Detalhes do Produto' }}
      />
      <Stack.Screen 
        name="Perfil" 
        component={ProfileScreen}
        options={{ title: 'Perfil do Usuário' }}
      />
    </Stack.Navigator>
  );
}

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6c5ce7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#f8f9fa',
        },
        drawerActiveTintColor: '#6c5ce7',
        drawerInactiveTintColor: '#636e72',
      }}
    >
      <Drawer.Screen 
        name="DrawerHome" 
        component={DrawerHomeScreen}
        options={{ 
          title: 'Home',
          drawerLabel: '🏠 Home'
        }}
      />
      <Drawer.Screen 
        name="DrawerProfile" 
        component={DrawerProfileScreen}
        options={{ 
          title: 'Perfil',
          drawerLabel: '👤 Perfil'
        }}
      />
      <Drawer.Screen 
        name="StackNavigation" 
        component={StackNavigator}
        options={{ 
          title: 'Stack Navigation',
          drawerLabel: '📱 Stack Navigation',
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}

// ===== MAIN APP =====

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

// ===== STYLES =====

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#636e72',
    marginBottom: 30,
    textAlign: 'center',
  },
});
