# 🎮 Low Stamina Studio - Landing Page

Landing page moderna para apresentar os projetos de jogos do Low Stamina Studio.

## 🎨 Design

- **Cores**: Verde (#4CAF50), Branco (#fff) e Preto (#000/#0a0a0a)
- **Layout**: Seções alternadas com imagens/texto
- **Animações**: Scroll suave, float na logo, bounce no indicador

## 📁 Estrutura

- `pages/index.js` - Página principal da landing page
- `pages/_app.js` - Configuração global do Next.js
- `styles/globals.css` - Estilos globais e animações
- `public/assets/` - Imagens, GIFs e logo

## ✏️ Personalização

### 1. Adicionar suas imagens
Coloque na pasta `public/assets/`:
- `lowstamina-logo.png` - Sua logo
- `project1.gif`, `project2.gif`, `project3.gif` - GIFs dos seus jogos

### 2. Editar informações dos projetos
Em `pages/index.js`, localize o array `projects` e edite:

```javascript
const projects = [
  {
    id: 1,
    title: "Nome do Seu Jogo",
    description: "Descrição do seu jogo...",
    image: "/assets/seu-gif.gif",
    itchLink: "https://seuperfil.itch.io/seu-jogo"
  },
  // ... adicione mais projetos
];
```

### 3. Atualizar links sociais
No footer, edite os links das redes sociais:

```javascript
<a href="https://twitter.com/seuperfil" style={styles.socialLink}>Twitter</a>
```

### 4. Adicionar/Remover projetos
Simplesmente adicione ou remova objetos do array `projects`. A alternância de layout acontece automaticamente!

## 🚀 Executar o projeto

```bash
npm run dev
```

Acesse: http://localhost:3000

## 📦 Build para produção

```bash
npm run build
npm start
```

## 🎯 Features

- ✅ Hero section com logo animada
- ✅ Seções de projetos com layout alternado
- ✅ Botões de download para itch.io
- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Scroll suave entre seções
- ✅ Footer com links sociais

## 🔄 Próximas melhorias sugeridas

- [ ] Adicionar lightbox para visualizar imagens maiores
- [ ] Seção "Sobre o Studio"
- [ ] Newsletter signup
- [ ] Integração com API do itch.io
- [ ] Dark/Light mode toggle
- [ ] Galeria de screenshots
- [ ] Seção de blog/devlog

---

**Low Stamina Studio** - Desenvolvendo jogos com paixão! 🎮
