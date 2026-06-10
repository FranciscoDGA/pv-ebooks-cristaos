const fs = require('fs');

const replaceInFile = (file, replacements) => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([from, to]) => {
    content = content.split(from).join(to);
  });
  fs.writeFileSync(file, content, 'utf8');
};

replaceInFile('src/components/FeaturesSection.tsx', [
  ['O que voc\ufffd encontrar\ufffd', 'O que você encontrará'],
  ['<span className="feature-icon">\ufffd</span>', '<span className="feature-icon">{feature.icon}</span>']
]);

replaceInFile('src/components/SummarySection.tsx', [
  ['Sum\ufffdrio da Obra', 'Sumário da Obra'],
  ['p\ufffdginas', 'páginas'],
  ['N\ufffdvel', 'Nível']
]);

replaceInFile('src/components/TargetAudienceSection.tsx', [
  ['Para quem este livro \ufffd?', 'Para quem este livro é?']
]);

replaceInFile('src/components/TestimonialsSection.tsx', [
  ['<span>\ufffd</span>', '<span>⭐</span>']
]);

console.log("Fixed!");
