import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

// Dados fictícios dos livros
const books = [
  {
    id: 1,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    image: 'https://via.placeholder.com/150x200/4A90E2/FFFFFF?text=O+Senhor+dos+Anéis',
    description: 'Uma épica aventura na Terra Média'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    image: 'https://via.placeholder.com/150x200/E74C3C/FFFFFF?text=1984',
    description: 'Uma distopia sobre controle totalitário'
  },
  {
    id: 3,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    image: 'https://via.placeholder.com/150x200/F39C12/FFFFFF?text=O+Pequeno+Príncipe',
    description: 'Uma fábula sobre amizade e humanidade'
  },
  {
    id: 4,
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    image: 'https://via.placeholder.com/150x200/9B59B6/FFFFFF?text=Dom+Quixote',
    description: 'As aventuras do cavaleiro da triste figura'
  },
  {
    id: 5,
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    image: 'https://via.placeholder.com/150x200/1ABC9C/FFFFFF?text=Cem+Anos+de+Solidão',
    description: 'Realismo mágico latino-americano'
  },
  {
    id: 6,
    title: 'O Grande Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://via.placeholder.com/150x200/34495E/FFFFFF?text=O+Grande+Gatsby',
    description: 'O sonho americano dos anos 20'
  }
];

export default function BookListScreen({ navigation }: any) {
  const renderBookItem = ({ item }: any) => (
    <View style={styles.bookCard}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <TouchableOpacity 
          style={styles.detailsButton}
          onPress={() => navigation.navigate('DetalhesDoLivro', { livro: item })}
        >
          <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  bookCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  detailsButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
