const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

app = app.replace("import { LandingPage } from './components/LandingPage';", "import { LandingPage } from './components/LandingPage';\\nimport { PlaceholderPage } from './pages/PlaceholderPage';\\nimport { LegalPage } from './pages/LegalPage';");

const newRoutes = `
          {/* Páginas Extras */}
          <Route path="em-breve" element={<PlaceholderPage />} />
          <Route path="contato" element={<PlaceholderPage />} />
          <Route path="privacidade" element={<LegalPage title="Política de Privacidade"><p>A Editora Coleção do Reino tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação e compra pelo site.</p><p>Os dados cadastrais dos clientes não são vendidos, trocados ou divulgados para terceiros, exceto quando essas informações são necessárias para o processo de entrega, para cobrança, ou para participação em promoções solicitadas pelos clientes.</p></LegalPage>} />
          <Route path="termos" element={<LegalPage title="Termos de Uso"><p>Ao acessar o site Coleção do Reino, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p><p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Coleção do Reino não garante que qualquer material em seu site seja preciso, completo ou atual.</p></LegalPage>} />
`;

app = app.replace("{/* Livros Landing Pages */}", newRoutes + "\\n          {/* Livros Landing Pages */}");

fs.writeFileSync('src/App.tsx', app);
