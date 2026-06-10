const fs = require('fs');
const path = require('path');
const dir = 'src/config';

const newFields = `
  previewPages: ["/sample_page_1.png", "/sample_page_2.png", "/sample_page_3.png", "/sample_page_4.png", "/sample_page_5.png"],
  isForYou: [
    "Deseja crescer espiritualmente.",
    "Busca uma leitura profunda e acessível.",
    "Gosta de estudos bíblicos.",
    "Quer aplicar a Palavra no dia a dia.",
    "Procura um material para leitura devocional."
  ],
  amazonStyle: {
    title: "Uma leitura para ser feita devagar.",
    description: "Escrito em linguagem simples, este livro foi pensado para crianças compreenderem e adultos sentirem. Cada capítulo foi desenvolvido para conduzir o leitor da reflexão à prática, da culpa à graça e da informação à transformação.",
    image: "/open_book_mockup.png"
  },
  collection: {
    title: "COLEÇÃO A CRUZ E O CORAÇÃO HUMANO",
    books: [
      { title: "Quem Ainda Chora?", path: "/quem-ainda-chora" },
      { title: "Orando com o Corpo, a Alma e o Espírito", path: "/orando" },
      { title: "Quando Não Há Rei", path: "/quando-nao-ha-rei" },
      { title: "Somos Todos Jerusalém", path: "/somos-todos-jerusalem" }
    ]
  },
`;

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  
  // Replace author photo
  content = content.replace(/photo:\s*["'][^"']+["']/g, 'photo: "/author_pastoral.png"');
  
  // Insert new fields before the last closing brace
  if (!content.includes('previewPages:')) {
    content = content.replace(/};\s*$/g, newFields + '\n};');
    fs.writeFileSync(p, content, 'utf8');
  }
});
console.log("Configs updated.");
