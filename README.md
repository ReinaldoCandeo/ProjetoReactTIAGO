# ProjetoReactTIAGO - React Native Navigation Examples

Este repositório contém **quatro projetos** demonstrando diferentes tipos de navegação com React Navigation.

## 📁 Estrutura do Repositório

### **Projeto Principal** (Navegação Híbrida)
- **Drawer + Stack Navigation**: Navegação híbrida combinada
- **Telas**: Home, Details, Profile (Drawer) + Stack Navigator
- **Localização**: Raiz do projeto

### **Projeto 1** (Drawer Navigation)
- **Navegação lateral**: Menu deslizante lateral
- **Telas**: Home e Perfil
- **Localização**: `/projeto1/`
- **Características**: Menu hambúrguer, navegação lateral

### **Projeto 2** (Stack Navigation)
- **Navegação em pilha**: Telas empilhadas com botão voltar
- **Telas**: Home, Detalhes e Perfil
- **Localização**: `/projeto2/`
- **Características**: Passagem de parâmetros, navegação programática

### **Projeto 3** (Listagem de Livros)
- **Lista com FlatList**: Listagem de livros com scroll
- **Telas**: Lista de Livros e Detalhes do Livro
- **Localização**: `/projeto3/`
- **Características**: FlatList, imagens, passagem de dados

## 🚀 Como Executar

### Projeto Principal (Navegação Híbrida)
```bash
npm install
npm run android  # ou npm run ios
```

### Projeto 1 (Drawer Navigation)
```bash
cd projeto1
npm install
npm run android  # ou npm run ios
```

### Projeto 2 (Stack Navigation)
```bash
cd projeto2
npm install
npm run android  # ou npm run ios
```

### Projeto 3 (Listagem de Livros)
```bash
cd projeto3
npm install
npm run android  # ou npm run ios
```

## 📱 Tipos de Navegação Implementados

### 1. **Drawer Navigation**
- ✅ Menu lateral deslizante
- ✅ Acesso por gesto ou ícone hambúrguer
- ✅ Ideal para apps com muitas seções
- ✅ Exemplo: Gmail (Caixa de entrada, Rascunhos, Enviados, etc.)

### 2. **Stack Navigation**
- ✅ Navegação em pilha com botão voltar
- ✅ Passagem de parâmetros entre telas
- ✅ Ideal para fluxos de detalhes
- ✅ Exemplo: Navegador web (avançar/voltar)

### 3. **Navegação Híbrida**
- ✅ Drawer contendo Stack Navigator
- ✅ Combinação de diferentes tipos
- ✅ Navegação complexa e flexível
- ✅ Exemplo: Apps com múltiplas seções

### 4. **Listagem com FlatList**
- ✅ Lista otimizada para performance
- ✅ Scroll vertical com FlatList
- ✅ Cards com design moderno
- ✅ Navegação para detalhes
- ✅ Exemplo: Lista de produtos, livros, etc.

## 📦 Pacotes Utilizados

- `@react-navigation/native`: Base do React Navigation
- `@react-navigation/drawer`: Navegação lateral
- `@react-navigation/native-stack`: Navegação em pilha
- `react-native-screens`: Performance de navegação
- `react-native-safe-area-context`: Área segura
- `react-native-gesture-handler`: Gestos
- `react-native-reanimated`: Animações

## 🎯 Objetivos Alcançados

✅ **Quatro tipos de navegação** implementados
✅ **Projetos separados** para cada tipo
✅ **Documentação completa** para cada projeto
✅ **Exemplos funcionais** com telas reais
✅ **Estrutura organizada** e escalável
✅ **FlatList com dados reais** (6 livros clássicos)
✅ **Passagem de parâmetros** entre telas
✅ **Design moderno** com cards e sombras

## 📋 Estrutura Final do Projeto

```
ProjetoReactTIAGO/
├── App.js                    # Projeto principal (Navegação Híbrida)
├── NavigationExample/        # Projeto React Native original
├── NavigationWeb/           # Projeto Expo para navegador
├── projeto1/                 # Drawer Navigation
├── projeto2/                 # Stack Navigation
├── projeto3/                 # Listagem de Livros
├── package.json             # Dependências do projeto
└── README.md               # Documentação
```

## 🔄 Fluxo de Navegação

### Projeto Principal (Híbrido)
- **Drawer** → **Stack Navigation** → **Home (Stack)**
- **Perfil (Drawer)** → Navegação independente

### Projeto 1 (Drawer)
- **Home** ↔ **Perfil** (via menu lateral)

### Projeto 2 (Stack)
- **Home** → **Detalhes** → **Perfil** (com parâmetros)

### Projeto 3 (Listagem)
- **Lista de Livros** → **Detalhes do Livro** (com dados do livro)

## ✨ Características dos Projetos

- **Design Moderno**: Cards com sombras e cores consistentes
- **Navegação Intuitiva**: Botões e gestos naturais
- **Performance**: Otimização com react-native-screens
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Documentação**: README completo para cada projeto