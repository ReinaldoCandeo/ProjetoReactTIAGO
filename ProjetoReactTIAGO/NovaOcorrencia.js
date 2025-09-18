import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

export default function NovaOcorrencia({ navigation, adicionarOcorrencia }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [location, setLocation] = useState(null);
  const [showTags, setShowTags] = useState(false);
  const [tags, setTags] = useState({
    Iluminação: false,
    Buraco: false,
    Lixo: false,
    Vandalismo: false,
  });

  useEffect(() => {
    (async () => {
      const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (mediaStatus !== 'granted') {
        Alert.alert('Permissão negada', 'Precisamos de acesso às fotos.');
      }

      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
      } else {
        Alert.alert('Permissão negada', 'Precisamos da localização.');
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const toggleTag = (tag) =>
    setTags((prev) => ({ ...prev, [tag]: !prev[tag] }));

  const handlePost = () => {
    const selectedTags = Object.keys(tags).filter((t) => tags[t]);

    if (!title || !description) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    const novaOcorrencia = {
      id: Date.now(),
      titulo: title,
      descricao: description,
      status: 'Aberto',
      imageUri,
      tags: selectedTags,
      location,
    };

    adicionarOcorrencia(novaOcorrencia); // salva no estado global

    // Resetar campos
    setTitle('');
    setDescription('');
    setImageUri(null);
    setTags({
      Iluminação: false,
      Buraco: false,
      Lixo: false,
      Vandalismo: false,
    });
    setShowTags(false);

    // Voltar para a tela principal (lista)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Novo reporte</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Campo de Título */}
        <View style={styles.inputRow}>
          <FontAwesome5 name="exclamation" size={23} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="Título do reporte"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Campo de Descrição */}
        <View style={styles.inputRow}>
          <FontAwesome5 name="align-left" size={18} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="O que aconteceu?"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerItem} onPress={pickImage}>
            <Ionicons name="image" size={16} color="#fff" />
            <Text style={styles.footerText}> Adicionar Foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerItem} onPress={() => setShowTags(!showTags)}>
            <MaterialIcons name="label" size={16} color="#fff" />
            <Text style={styles.footerText}>
              {showTags ? ' Ocultar Tags' : ' Exibir Tags'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>Postar</Text>
          </TouchableOpacity>
        </View>

        {showTags && (
          <View style={styles.tagsContainer}>
            {Object.keys(tags).map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[styles.tag, tags[tag] && styles.tagSelected]}
                onPress={() => toggleTag(tag)}
              >
                <Text style={[styles.tagText, tags[tag] && styles.tagTextSelected]}>
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {location && (
          <Text style={styles.locationText}>
            {`Latitude: ${location.coords.latitude.toFixed(6)}, Longitude: ${location.coords.longitude.toFixed(6)}`}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="home" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    width: '100%',
    backgroundColor: '#2c423f',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  icon: {
    marginTop: 6,
    marginRight: 8,
  },
  input: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    minHeight: 40,
    textAlignVertical: 'top',
    borderBottomWidth: 1,
    borderColor: '#444',
    marginBottom: 12,
  },
  preview: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 6,
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
  postButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginLeft: 'auto',
    marginTop: 6,
  },
  postButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  tagSelected: {
    backgroundColor: '#6c8b87',
    borderColor: '#6c8b87',
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  tagTextSelected: {
    fontWeight: 'bold',
  },
  locationText: {
    marginTop: 8,
    color: '#aaa',
    fontSize: 12,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2c423f',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
