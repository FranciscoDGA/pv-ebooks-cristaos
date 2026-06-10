const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const imgStyles = `
.prose img {
  width: 100%;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
`;

if (!css.includes('.prose img')) {
  fs.appendFileSync('src/index.css', '\\n' + imgStyles);
}
