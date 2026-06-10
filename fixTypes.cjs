const fs=require('fs');
fs.readdirSync('src/components').forEach(f=>{
  if(!f.endsWith('.tsx')) return;
  const p='src/components/'+f;
  let c=fs.readFileSync(p,'utf8');
  c=c.replace(/\((item|feature|mod|test|bonus),\s*idx\)/g, '($1: any, idx: number)');
  fs.writeFileSync(p,c,'utf8');
});
console.log("Types fixed.");
