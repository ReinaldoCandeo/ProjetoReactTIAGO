import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }: any) {
  const { produtoId } = route.params;

  const goToProfile = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Detalhes</Text>
      <Text style={styles.subtitle}>ID do Produto: {produtoId}</Text>
      <Text style={styles.description}>
        Esta é a tela de detalhes do produto selecionado
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Ir para Perfil</Text>
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
    color: '#007AFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#34C759',
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
