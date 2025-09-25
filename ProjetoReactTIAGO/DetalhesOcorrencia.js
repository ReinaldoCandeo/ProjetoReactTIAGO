import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function DetalhesOcorrencia({ route, navigation, atualizarStatus }) {
  const { chamado } = route.params;

  const handleFechar = () => {
    atualizarStatus(chamado.id, 'Concluído');
    navigation.goBack();
  };

  const statusColors = {
    Aberto: { backgroundColor: '#facc15', borderColor: '#2563eb', textColor: '#000' },
    Concluído: { backgroundColor: '#4ade80', borderColor: '#16a34a', textColor: '#000' },
  };

  const statusStyle = statusColors[chamado.status] || statusColors['Aberto'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.statusBadge, { backgroundColor: statusStyle.backgroundColor, borderColor: statusStyle.borderColor }]}>
        <Text style={[styles.statusText, { color: statusStyle.textColor }]}>{chamado.status}</Text>
      </View>

      <Text style={styles.title}>{chamado.titulo}</Text>

      <Text style={styles.description}>{chamado.descricao}</Text>

      {chamado.imageUri && <Image source={{ uri: chamado.imageUri }} style={styles.image} />}

      {chamado.location && (
        <Text style={styles.location}>
          {`Latitude: ${chamado.location.coords.latitude.toFixed(6)}, Longitude: ${chamado.location.coords.longitude.toFixed(6)}`}
        </Text>
      )}

      {chamado.status === 'Aberto' && (
        <TouchableOpacity style={styles.button} onPress={handleFechar}>
          <Text style={styles.buttonText}>Fechar Ocorrência</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 2,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  location: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
