# Projeto 3 - Listagem de Livros com Detalhes

Este projeto implementa uma aplicação de listagem de livros com tela de detalhes usando Stack Navigation e FlatList.

## Funcionalidades

✅ **Lista de Livros**: FlatList com dados estáticos de livros
✅ **Tela de Detalhes**: Visualização completa do livro selecionado
✅ **Stack Navigation**: Navegação entre lista e detalhes
✅ **Passagem de Parâmetros**: Envio de dados do livro entre telas
✅ **Imagens Fictícias**: Placeholder images para cada livro
✅ **Design Moderno**: Cards com sombras e botões estilizados

## Estrutura do Projeto

- **App.tsx**: Componente principal com Stack Navigator
- **src/screens/**: Telas da aplicação
  - **BookListScreen.tsx**: Lista de livros com FlatList
  - **BookDetailsScreen.tsx**: Detalhes do livro selecionado

## Dados dos Livros

O projeto inclui uma lista estática com 6 livros clássicos:

1. **O Senhor dos Anéis** - J.R.R. Tolkien
2. **1984** - George Orwell
3. **O Pequeno Príncipe** - Antoine de Saint-Exupéry
4. **Dom Quixote** - Miguel de Cervantes
5. **Cem Anos de Solidão** - Gabriel García Márquez
6. **O Grande Gatsby** - F. Scott Fitzgerald

## Características Técnicas

### **Lista de Livros (BookListScreen)**
- ✅ **FlatList**: Lista otimizada para performance
- ✅ **Cards**: Design em cartões com sombras
- ✅ **Imagens**: Placeholder images coloridas
- ✅ **Botão "Ver Detalhes"**: Navegação para tela de detalhes
- ✅ **Scroll**: Lista scrollável verticalmente

### **Detalhes do Livro (BookDetailsScreen)**
- ✅ **Recebimento de Parâmetros**: `route.params.livro`
- ✅ **Imagem Grande**: Visualização ampliada da capa
- ✅ **Informações Completas**: Título, autor e descrição
- ✅ **Botão "Voltar"**: Retorno para a lista
- ✅ **ScrollView**: Conteúdo scrollável

### **Navegação**
- ✅ **Stack Navigation**: `@react-navigation/native-stack`
- ✅ **Passagem de Dados**: `navigation.navigate('DetalhesDoLivro', { livro })`
- ✅ **Recebimento de Dados**: `route.params.livro`
- ✅ **Header Personalizado**: Cores e estilos customizados

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

## Fluxo da Aplicação

1. **Tela Inicial**: Lista de livros com FlatList
2. **Seleção**: Toque em "Ver Detalhes" de qualquer livro
3. **Navegação**: Stack Navigation leva para tela de detalhes
4. **Detalhes**: Visualização completa do livro selecionado
5. **Retorno**: Botão "Voltar" retorna para a lista

## Design e UX

- **Cards Modernos**: Design em cartões com sombras
- **Cores Consistentes**: Paleta de cores harmoniosa
- **Tipografia**: Hierarquia clara de textos
- **Interações**: Botões com feedback visual
- **Responsivo**: Adaptável a diferentes tamanhos de tela
