import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  const goToDetails = () => {
    navigation.navigate('Detalhes', { produtoId: 381 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <Text style={styles.subtitle}>Bem-vindo ao Stack Navigation!</Text>
      <Text style={styles.description}>
        Navegue entre as telas usando os botões abaixo
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={goToDetails}>
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
