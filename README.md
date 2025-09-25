# ProjetoReactTIAGO - React Native Navigation Example

Este projeto demonstra a implementação de **Drawer Navigation** e **Stack Navigation** no React Native, baseado no documento fornecido.

## 🚀 Funcionalidades

### Stack Navigation
- **Home Screen**: Tela inicial com botão para navegar para detalhes
- **Details Screen**: Tela de detalhes que recebe parâmetros (productId)
- **Profile Screen**: Tela de perfil do usuário
- Navegação em pilha com botão de voltar automático
- Passagem de parâmetros entre telas

### Drawer Navigation
- **Menu lateral deslizante** com ícones
- **Home (Drawer)**: Tela inicial do drawer
- **Perfil (Drawer)**: Tela de perfil do drawer
- **Stack Navigation**: Acesso ao Stack Navigator completo
- Navegação entre diferentes seções do app

## 📦 Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Para iOS:**
```bash
cd ios && pod install && cd ..
npm run ios
```

3. **Para Android:**
```bash
npm run android
```

4. **Para Web (Expo):**
```bash
cd NavigationWeb
npm run web
```

## 🛠 Dependências Utilizadas

- `@react-navigation/native` - Navegação base
- `@react-navigation/drawer` - Drawer Navigation
- `@react-navigation/native-stack` - Stack Navigation
- `react-native-screens` - Otimização de performance
- `react-native-safe-area-context` - Área segura
- `react-native-gesture-handler` - Gestos
- `react-native-reanimated` - Animações

## 📱 Como Usar

1. **Início**: O app abre com o Drawer Navigation
2. **Menu Lateral**: Toque no ícone de hambúrguer (☰) ou deslize da lateral
3. **Stack Navigation**: Acesse "Stack Navigation" no menu para ver o exemplo de navegação em pilha
4. **Navegação**: Use os botões para navegar entre as telas

## 🎨 Características do Design

- **Cores modernas**: Paleta de cores atrativa
- **Ícones no menu**: Emojis para melhor UX
- **Headers personalizados**: Cores e estilos consistentes
- **Botões estilizados**: Diferentes cores para diferentes ações
- **Layout responsivo**: Centralizado e bem estruturado

## 📋 Estrutura do Projeto

```
├── App.js                 # Arquivo principal com ambas as navegações
├── NavigationExample/     # Projeto React Native completo
├── NavigationWeb/         # Projeto Expo para navegador
├── package.json          # Dependências do projeto
└── README.md             # Documentação
```

## 🔄 Fluxo de Navegação

### Drawer Navigation
- **Home (Drawer)** → **Stack Navigation** → **Home (Stack)**
- **Perfil (Drawer)** → Navegação independente

### Stack Navigation
- **Home** → **Detalhes** (com parâmetro productId: 381)
- **Detalhes** → **Perfil**
- **Botão voltar** em todas as telas

## ✨ Exemplos de Uso

Este projeto implementa exatamente os exemplos do documento:

1. **Drawer Navigation**: Menu lateral como no Gmail
2. **Stack Navigation**: Navegação em pilha como no navegador
3. **Passagem de parâmetros**: productId entre telas
4. **Navegação híbrida**: Drawer contendo Stack Navigator

## 🎯 Objetivos Alcançados

- ✅ Drawer Navigation funcional
- ✅ Stack Navigation funcional  
- ✅ Passagem de parâmetros
- ✅ Navegação entre diferentes tipos
- ✅ Interface moderna e intuitiva
- ✅ Código bem documentado
- ✅ Projeto conectado ao GitHub
