const fs = require('fs');
const path = require('path');
const dir = 'src/components';
fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.tsx') || file === 'LandingPage.tsx') return;
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/import\s+\{\s*bookConfig\s*\}\s+from\s+['"]\.\.\/config\/bookConfig['"];?[\r\n]*/g, '');
  content = content.replace(/export function ([A-Za-z]+)\(\)\s*\{/g, 'export function $1({ config }: { config: any }) {');
  content = content.replace(/const \{ ([a-zA-Z]+) \} = bookConfig;/g, 'const { $1 } = config;');
  fs.writeFileSync(p, content, 'utf8');
});
console.log("Refactored.");
