import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';

import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { BlogIndex } from './pages/BlogIndex';
import { ArticlePage } from './pages/ArticlePage';
import { LandingPage } from './components/LandingPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { LegalPage } from './pages/LegalPage';

import { configOrando } from './config/configOrando';
import { configRei } from './config/configRei';
import { configChora } from './config/configChora';
import { configJerusalem } from './config/configJerusalem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<ArticlePage />} />
          
          {/* Páginas Extras */}
          <Route path="em-breve" element={<PlaceholderPage />} />
          <Route path="contato" element={<PlaceholderPage />} />
          <Route path="privacidade" element={<LegalPage title="Política de Privacidade"><p>A Editora Coleção do Reino tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação e compra pelo site.</p><p>Os dados cadastrais dos clientes não são vendidos, trocados ou divulgados para terceiros, exceto quando essas informações são necessárias para o processo de entrega, para cobrança, ou para participação em promoções solicitadas pelos clientes.</p></LegalPage>} />
          <Route path="termos" element={<LegalPage title="Termos de Uso"><p>Ao acessar o site Coleção do Reino, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p><p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Coleção do Reino não garante que qualquer material em seu site seja preciso, completo ou atual.</p></LegalPage>} />

          {/* Livros Landing Pages */}
          <Route path="orando" element={<LandingPage config={configOrando} />} />
          <Route path="quando-nao-ha-rei" element={<LandingPage config={configRei} />} />
          <Route path="quem-ainda-chora" element={<LandingPage config={configChora} />} />
          <Route path="somos-todos-jerusalem" element={<LandingPage config={configJerusalem} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
