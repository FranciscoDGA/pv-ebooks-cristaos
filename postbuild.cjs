// Script de pós-build para otimizações adicionais
// Como o site é um SPA (Single Page Application) com React Router,
// não precisamos gerar arquivos HTML estáticos para cada rota.
// O vercel.json já cuida do roteamento com rewrite para /index.html.

console.log("Pós-build concluído. O roteamento é gerenciado pelo React Router.");
