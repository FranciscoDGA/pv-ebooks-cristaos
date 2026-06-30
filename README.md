# O Chamado da Graça - Editora Cristã Digital

Um site moderno e minimalista para uma livraria cristã, construído com **Next.js 14**, **Tailwind CSS** e **TypeScript**.

## 🚀 Começando

### Pré-requisitos
- Node.js 18.17 ou superior
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/FranciscoDGA/pv-ebooks-cristaos.git
   cd pv-ebooks-cristaos
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
pv-ebooks-cristaos/
├── src/
│   ├── app/
│   │   ├── globals.css       # Estilos globais
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Página inicial
│   │   ├── livros/
│   │   │   └── page.tsx      # Página de livros
│   │   ├── autor/
│   │   │   └── page.tsx      # Página do autor
│   │   ├── contato/
│   │   │   └── page.tsx      # Página de contato
│   │   ├── privacidade/
│   │   │   └── page.tsx      # Política de privacidade
│   │   ├── termos/
│   │   │   └── page.tsx      # Termos de uso
│   │   └── not-found.tsx     # Página 404
│   ├── components/
│   │   ├── Button.tsx        # Componente de botão
│   │   └── BookCard.tsx      # Cartão de livro
│   └── public/
│       └── images/           # Imagens do site
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design

### Paleta de Cores
| Cor | Uso | Código |
|-----|-----|--------|
| Branco | Fundo | `#FFFFFF` |
| Preto | Textos | `#1A1A1A` |
| Azul Escuro | Títulos/Destaques | `#2C3E50` |
| Dourado | Acentos (botões, links) | `#D4AF37` |
| Cinza Claro | Fundos de seções | `#F8F9FA` |

### Fontes
- **Títulos**: Playfair Display
- **Textos**: Inter

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto para configurações sensíveis:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Tailwind CSS
O projeto usa Tailwind CSS para estilização. Para personalizar as cores e fontes, edite o arquivo `tailwind.config.ts`.

## 📦 Dependências

- **Next.js**: Framework React para produção
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animações suaves
- **React Icons**: Ícones para React
- **React Markdown**: Renderização de Markdown

## 🛠 Scripts Disponíveis

| Script | Descrição |
|--------|-------------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o linter |

## 📄 Licença

Este projeto é privado e pertence à Editora O Chamado da Graça.

## 📬 Contato

Para mais informações, entre em contato:
- E-mail: contato@ochamadodagraca.com.br
- Site: [https://pv-ebooks-cristaos-id6r.vercel.app/](https://pv-ebooks-cristaos-id6r.vercel.app/)
