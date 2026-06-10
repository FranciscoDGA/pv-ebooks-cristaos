const fs = require('fs');

const appCssPath = 'src/App.css';
let css = fs.readFileSync(appCssPath, 'utf8');
css += `
/* Novas seções Premium */

/* Hero 50/50 */
.hero-content { flex: 1; }
.hero-image-container { flex: 1; display: flex; justify-content: center; }
.hero-image { max-width: 100%; width: 450px; }
.hero-guarantees { list-style: none; padding: 0; margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; }
.hero-guarantees li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #4B5563; }
.check-icon { color: #16A34A; }

/* Quote Section */
.quote-section { background-color: #0F172A; padding: 6rem 1rem; text-align: center; }
.quote-text { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; color: #F8FAFC; max-width: 800px; margin: 0 auto; line-height: 1.4; font-style: italic; }

/* Author Section */
.author-section { background-color: #111827; color: #F8FAFC; padding: 5rem 1rem; }
.author-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; max-width: 1000px; margin: 0 auto; align-items: center; }
.author-photo { border-radius: 8px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); width: 100%; max-width: 300px; }
.author-name { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; margin-bottom: 0.5rem; color: #B08D57; text-transform: uppercase; letter-spacing: 2px; }
.author-title { font-family: 'Inter', sans-serif; font-size: 1rem; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2rem; }
.author-bio { font-size: 1.1rem; line-height: 1.8; color: #D1D5DB; }

/* Bonus Cards */
.bonus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
.bonus-card { background: #fff; padding: 2.5rem; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); border-top: 4px solid #B08D57; text-align: center; transition: transform 0.3s ease; }
.bonus-card:hover { transform: translateY(-5px); }
.bonus-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.bonus-title { font-family: 'Lora', serif; font-size: 1.3rem; margin-bottom: 0.5rem; }

/* Offer Amazon Style */
.offer-section { background-color: #FAFAF8; padding: 6rem 1rem; text-align: center; }
.offer-box { background: #fff; border: 1px solid #E5E7EB; border-radius: 8px; padding: 3rem; max-width: 500px; margin: 0 auto; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
.offer-title { font-family: 'Inter', sans-serif; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px; color: #4B5563; margin-bottom: 1.5rem; }
.price-container { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; margin-bottom: 2rem; }
.old-price { text-decoration: line-through; color: #9CA3AF; font-size: 1.2rem; }
.new-price { font-size: 3.5rem; font-weight: 700; color: #111827; line-height: 1; }
.installments { color: #4B5563; font-size: 1.1rem; }
.offer-guarantees { list-style: none; padding: 0; margin-bottom: 2rem; text-align: left; }
.offer-guarantees li { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: #4B5563; font-size: 0.95rem; }
.buy-button-large { display: block; width: 100%; background: #1D4ED8; color: #fff; padding: 1.2rem; border-radius: 8px; font-weight: bold; font-size: 1.1rem; text-transform: uppercase; text-decoration: none; transition: background 0.3s; }
.buy-button-large:hover { background: #1E40AF; }

/* Preview Pages */
.preview-section { background-color: #fff; padding: 5rem 1rem; text-align: center; }
.preview-grid { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 3rem; }
.preview-page { width: 180px; border-radius: 4px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: transform 0.3s ease, z-index 0.3s ease; cursor: pointer; border: 1px solid #E5E7EB; }
.preview-page:hover { transform: scale(1.5); z-index: 10; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); }

/* Is For You */
.is-for-you-section { background-color: #FAFAF8; padding: 5rem 1rem; }
.checklist { max-width: 600px; margin: 0 auto; list-style: none; padding: 0; }
.checklist li { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; font-size: 1.1rem; color: #111827; }
.checklist-icon { flex-shrink: 0; color: #1D4ED8; font-size: 1.2rem; margin-top: 0.2rem; }

/* Amazon Section */
.amazon-section { background-color: #fff; padding: 6rem 1rem; }
.amazon-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; max-width: 1000px; margin: 0 auto; align-items: center; }
.amazon-title { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; color: #111827; margin-bottom: 1.5rem; }
.amazon-text { font-family: 'Inter', sans-serif; font-size: 1.2rem; line-height: 1.8; color: #4B5563; }
.amazon-image { width: 100%; border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }

/* Collection */
.collection-section { background-color: #0F172A; color: #fff; padding: 4rem 1rem; text-align: center; border-bottom: 1px solid #1E293B; }
.collection-banner { font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; color: #B08D57; margin-bottom: 1rem; display: block; font-weight: bold; }
.collection-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 2rem; }
.collection-link { padding: 0.8rem 1.5rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: #D1D5DB; text-decoration: none; transition: all 0.3s; font-family: 'Inter', sans-serif; }
.collection-link:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: #B08D57; }

@media (max-width: 768px) {
  .hero-grid, .author-grid, .amazon-grid { grid-template-columns: 1fr; text-align: center; }
  .quote-text { font-size: 1.8rem; }
  .author-photo { margin: 0 auto; }
}
`;
fs.writeFileSync(appCssPath, css);
console.log("CSS updated.");
