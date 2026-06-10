const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// If build hasn't run, exit safely
if (!fs.existsSync(distDir)) {
  console.log("Pasta dist não encontrada, pulando postbuild.");
  process.exit(0);
}

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// The routes we want to physically prerender for SEO
const routes = [
  {
    path: '/orando',
    title: 'Orando com o Corpo, a Alma e o Espírito | Pr. Francisco Gomes',
    description: 'Descubra como envolver todo o seu ser na adoração a Deus e transformar sua vida de oração.',
    image: 'https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/orando_com_corpo_alma_espirito_1781101893485.png'
  },
  {
    path: '/quando-nao-ha-rei',
    title: 'Quando Não Há Rei | Pr. Francisco Gomes',
    description: 'O colapso de um povo sem liderança espiritual. Uma análise profunda sobre Juízes.',
    image: 'https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/quando_nao_ha_rei_1781101904540.png'
  },
  {
    path: '/quem-ainda-chora',
    title: 'Quem Ainda Chora? | Pr. Francisco Gomes',
    description: 'Deus ouviu o choro de Raquel e ainda ouve o seu. Uma mensagem de consolo e restauração.',
    image: 'https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/quem_ainda_chora_1781101915571.png'
  },
  {
    path: '/somos-todos-jerusalem',
    title: 'Somos Todos Jerusalém | Pr. Francisco Gomes',
    description: 'O perdão que transforma quem um dia negou a Cristo. Entenda a graça escandalosa de Deus.',
    image: 'https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/somos_todos_jerusalem_1781101925943.png'
  },
  {
    path: '/blog',
    title: 'Blog | O Chamado da Graça',
    description: 'Leia artigos, devocionais e reflexões bíblicas profundas.',
    image: 'https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/home_hero_bg.png'
  }
];

routes.forEach(route => {
  let html = baseHtml;
  
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/g, \`<title>\${route.title}</title>\`);
  html = html.replace(/<meta name="title" content=".*?"/g, \`<meta name="title" content="\${route.title}"\`);
  html = html.replace(/<meta property="og:title" content=".*?"/g, \`<meta property="og:title" content="\${route.title}"\`);
  html = html.replace(/<meta property="twitter:title" content=".*?"/g, \`<meta property="twitter:title" content="\${route.title}"\`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?"/g, \`<meta name="description" content="\${route.description}"\`);
  html = html.replace(/<meta property="og:description" content=".*?"/g, \`<meta property="og:description" content="\${route.description}"\`);
  html = html.replace(/<meta property="twitter:description" content=".*?"/g, \`<meta property="twitter:description" content="\${route.description}"\`);

  // Replace Image
  html = html.replace(/<meta property="og:image" content=".*?"/g, \`<meta property="og:image" content="\${route.image}"\`);
  html = html.replace(/<meta property="twitter:image" content=".*?"/g, \`<meta property="twitter:image" content="\${route.image}"\`);
  
  // Create Directory and File
  const routeDir = path.join(distDir, route.path.substring(1)); // strip leading slash
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  console.log(\`Gerado HTML estático para \${route.path}\`);
});
