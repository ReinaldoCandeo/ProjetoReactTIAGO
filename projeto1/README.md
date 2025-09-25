# Projeto 1 - Drawer Navigation

Este projeto implementa navegação por menu lateral (Drawer Navigation) usando React Navigation.

## Funcionalidades

✅ **Drawer Navigation**: Menu lateral deslizante
✅ **Duas telas**: Home e Perfil
✅ **Navegação lateral**: Acesso através do menu hambúrguer
✅ **Estilização moderna**: Interface limpa e responsiva

## Estrutura do Projeto

- **App.tsx**: Componente principal com Drawer Navigator
- **src/screens/**: Telas da aplicação
  - **HomeScreen.tsx**: Tela inicial
  - **ProfileScreen.tsx**: Tela de perfil

## Pacotes Utilizados

- `@react-navigation/native`: Base do React Navigation
- `@react-navigation/drawer`: Navegação por menu lateral
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

## Características do Drawer Navigation

- **Menu lateral**: Desliza da lateral da tela
- **Acesso por gesto**: Arrastar da borda ou tocar no ícone hambúrguer
- **Ideal para**: Apps com muitas seções que não precisam estar sempre visíveis
- **Exemplo real**: Gmail (Caixa de entrada, Rascunhos, Enviados, etc.)
