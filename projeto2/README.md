# Projeto 2 - Stack Navigation

Este projeto implementa navegação em pilha (Stack Navigation) usando React Navigation.

## Funcionalidades

✅ **Stack Navigation**: Navegação em pilha com botão voltar automático
✅ **Três telas**: Home, Detalhes e Perfil
✅ **Passagem de parâmetros**: Envio de dados entre telas
✅ **Navegação programática**: Botões para navegar entre telas
✅ **Header automático**: Botão voltar nativo

## Estrutura do Projeto

- **App.tsx**: Componente principal com Stack Navigator
- **src/screens/**: Telas da aplicação
  - **HomeScreen.tsx**: Tela inicial com botão para detalhes
  - **DetailsScreen.tsx**: Tela de detalhes com parâmetros
  - **ProfileScreen.tsx**: Tela de perfil

## Fluxo de Navegação

1. **Home** → **Detalhes** (com parâmetro `produtoId: 381`)
2. **Detalhes** → **Perfil**
3. **Botão voltar** automático em todas as telas

## Pacotes Utilizados

- `@react-navigation/native`: Base do React Navigation
- `@react-navigation/native-stack`: Navegação em pilha
- `react-native-screens`: Performance de navegação
- `react-native-safe-area-context`: Área segura
- `react-native-gesture-handler`: Gestos
- `react-native-reanimated`: Animações

## Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Para Android:
```bash
npm run android
```

3. Para iOS:
```bash
npm run ios
```

## Características do Stack Navigation

- **Navegação em pilha**: Cada tela fica "em cima" da anterior
- **Botão voltar automático**: Header nativo com botão voltar
- **Passagem de parâmetros**: Envio de dados entre telas
- **Ideal para**: Fluxos de detalhes (lista → detalhes → perfil)
- **Exemplo real**: Navegador web (avançar/voltar)
