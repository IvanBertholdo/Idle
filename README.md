# 🌾 Lucrative Farm - Idle Game

Um jogo idle de fazenda desenvolvido em React + TypeScript + Vite.

## 🎮 Sobre o Jogo

Lucrative Farm é um jogo idle onde você gerencia uma fazenda, compra animais, melhora celeiros e aumenta sua produção de moedas. Cada animal tem seu próprio celeiro especial e características únicas.

### 🎲 Sistema de Sorte no Início
- **33.3%** - Galinha (Chicken)
- **33.3%** - Porco (Pig) 
- **33.3%** - Vaca (Cow)
- **0.1%** - Dragão (Dragon) 🐉

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <seu-repositorio>
cd Idle

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis
- `npm run dev` - Roda em modo desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção

## 🌐 Deploy na Vercel

### Método 1: Deploy Automático (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente as configurações
3. Clique em "Deploy"

### Método 2: Deploy Manual
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Backend**: Express.js (para futuras funcionalidades)

## 📁 Estrutura do Projeto

```
Idle/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes UI
│   │   ├── features/       # Funcionalidades do jogo
│   │   └── main.tsx        # Entry point
│   └── index.html
├── server/                 # Backend Express
├── scripts/                # Scripts de desenvolvimento
├── vercel.json            # Configuração do Vercel
└── package.json
```

## 🎯 Funcionalidades

- ✅ Sistema de sorte no início do jogo
- ✅ 23 tipos diferentes de animais
- ✅ 23 celeiros únicos
- ✅ Sistema de upgrades de celeiros
- ✅ Renomeação de animais
- ✅ Salvamento automático (localStorage)
- ✅ Interface responsiva

## 🔮 Próximas Funcionalidades

- [ ] Sistema de conquistas
- [ ] Rankings online
- [ ] Mais tipos de animais
- [ ] Sistema de eventos sazonais
- [ ] Multiplayer básico

## 📝 Licença

MIT License 