import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaOcorrencia from './ListaOcorrencia';
import NovaOcorrencia from './NovaOcorrencia';
import DetalhesOcorrencia from './DetalhesOcorrencia';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ocorrencias, setOcorrencias] = useState([]);

  const adicionarOcorrencia = (ocorrencia) => {
    setOcorrencias((prev) => [ocorrencia, ...prev]);
  };

  const atualizarStatus = (id, novoStatus) => {
    setOcorrencias((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: novoStatus } : item
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaOcorrencia">
        <Stack.Screen name="ListaOcorrencia" options={{ title: 'Lista de Ocorrências' }}>
          {props => (
            <ListaOcorrencia
              {...props}
              ocorrencias={ocorrencias}
              atualizarStatus={atualizarStatus}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="NovaOcorrencia" options={{ title: 'Nova Ocorrência' }}>
          {props => (
            <NovaOcorrencia
              {...props}
              adicionarOcorrencia={adicionarOcorrencia}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="DetalhesOcorrencia"
          options={{ title: 'Detalhes da Ocorrência' }}
        >
          {props => (
            <DetalhesOcorrencia
              {...props}
              atualizarStatus={atualizarStatus}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
