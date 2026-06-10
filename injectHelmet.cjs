const fs = require('fs');

// Add Helmet to HomePage
let home = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
if (!home.includes('import { Helmet }')) {
  home = home.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\\nimport { Helmet } from 'react-helmet-async';");
  home = home.replace('return (\\n    <div>', 'return (\\n    <div>\\n      <Helmet>\\n        <title>O Chamado da Graça | Editora Cristã Digital</title>\\n        <meta name="description" content="Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus." />\\n      </Helmet>');
  fs.writeFileSync('src/pages/HomePage.tsx', home);
}

// Add Helmet to LandingPage
let landing = fs.readFileSync('src/components/LandingPage.tsx', 'utf8');
if (!landing.includes('import { Helmet }')) {
  landing = landing.replace("import React from 'react';", "import React from 'react';\\nimport { Helmet } from 'react-helmet-async';");
  landing = landing.replace('return (\\n    <div className="font-sans">', 'return (\\n    <div className="font-sans">\\n      <Helmet>\\n        <title>{config.title} | O Chamado da Graça</title>\\n        <meta name="description" content={config.subtitle} />\\n      </Helmet>');
  fs.writeFileSync('src/components/LandingPage.tsx', landing);
}

// Add Helmet to ArticlePage
let article = fs.readFileSync('src/pages/ArticlePage.tsx', 'utf8');
if (!article.includes('import { Helmet }')) {
  article = article.replace("import { useParams, Link, Navigate } from 'react-router-dom';", "import { useParams, Link, Navigate } from 'react-router-dom';\\nimport { Helmet } from 'react-helmet-async';");
  article = article.replace('return (\\n    <div className="section-padding"', 'return (\\n    <div className="section-padding" style={{ backgroundColor: \\'#fff\\' }}>\\n      <Helmet>\\n        <title>{article.title} | Blog O Chamado da Graça</title>\\n        <meta name="description" content={article.excerpt} />\\n      </Helmet>');
  // Cleanup duplicate style if it happens
  article = article.replace('style={{ backgroundColor: \\'#fff\\' }} style={{ backgroundColor: \\'#fff\\' }}>', 'style={{ backgroundColor: \\'#fff\\' }}>');
  fs.writeFileSync('src/pages/ArticlePage.tsx', article);
}
