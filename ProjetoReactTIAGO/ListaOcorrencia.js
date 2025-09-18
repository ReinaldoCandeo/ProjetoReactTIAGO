import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function ListaOcorrencia({ ocorrencias, navigation }) {

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={ocorrencias}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetalhesOcorrencia', { chamado: item })}
            style={styles.itemContainer}
          >
            <View style={[styles.statusBadge, item.status === 'Aberto' ? styles.statusAberto : styles.statusConcluido]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Text style={styles.itemTitle}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('NovaOcorrencia')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4b5563',
    marginVertical: 20,
  },
  itemContainer: {
    backgroundColor: '#6b8e6b',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 12,
    borderWidth: 2,
  },
  statusAberto: {
    backgroundColor: '#facc15',
    borderColor: '#2563eb',
  },
  statusConcluido: {
    backgroundColor: '#4ade80',
    borderColor: '#16a34a',
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
  itemTitle: {
    fontSize: 16,
    color: '#1f2937',
    flexShrink: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#2563eb',
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});
