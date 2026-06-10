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
import { ContactPage } from './pages/ContactPage';
import { AuthorPage } from './pages/AuthorPage';
import { ScrollToTop } from './components/ScrollToTop';

import { configOrando } from './config/configOrando';
import { configRei } from './config/configRei';
import { configChora } from './config/configChora';
import { configJerusalem } from './config/configJerusalem';
import { configColecao } from './config/configColecao';
import { configDormir } from './config/configDormir';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<ArticlePage />} />
          
          {/* Páginas Extras */}
          <Route path="em-breve" element={<PlaceholderPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="autor" element={<AuthorPage />} />
          <Route path="privacidade" element={<LegalPage title="Política de Privacidade"><p>A Editora O Chamado da Graça tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação e compra pelo site.</p>
<p>Os dados cadastrais dos clientes não são vendidos, trocados ou divulgados para terceiros, exceto quando essas informações são necessárias para o processo de entrega, para cobrança, ou para participação em promoções solicitadas pelos clientes.</p>
<h3>1. Coleta de Informações</h3>
<p>Coletamos informações pessoais fornecidas voluntariamente por você durante o processo de compra, cadastro em nossa newsletter ou preenchimento de formulários de contato. Isso inclui nome, endereço de e-mail e dados de cobrança.</p>
<h3>2. Uso das Informações</h3>
<p>As informações coletadas são utilizadas exclusivamente para viabilizar as transações comerciais, fornecer suporte ao cliente, e enviar comunicações relevantes sobre nossos lançamentos, desde que autorizado previamente. Não realizamos spam sob nenhuma circunstância.</p>
<h3>3. Segurança dos Dados</h3>
<p>Implementamos rigorosas medidas de segurança em nível tecnológico e organizacional para proteger seus dados pessoais contra acessos não autorizados, perdas ou alterações.</p>
<h3>4. Seus Direitos</h3>
<p>Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de solicitar a exclusão, correção ou atualização de seus dados a qualquer momento, enviando um e-mail para nossa equipe de suporte.</p></LegalPage>} />
          <Route path="termos" element={<LegalPage title="Termos de Uso"><p>Ao acessar o site O Chamado da Graça, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
<h3>1. Licença de Uso</h3>
<p>Os e-books e materiais adquiridos nesta plataforma são exclusivamente para uso pessoal e intransferível. É terminantemente proibida a revenda, distribuição, cópia ou reprodução pública de qualquer obra sem a autorização prévia por escrito do autor.</p>
<h3>2. Isenção de Responsabilidade</h3>
<p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Editora O Chamado da Graça não garante que qualquer material em seu site seja preciso, completo ou atual, embora nos esforcemos para manter o mais alto padrão de qualidade editorial.</p>
<h3>3. Modificações</h3>
<p>A Editora pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
<h3>4. Política de Reembolso</h3>
<p>Garantimos a devolução integral do valor pago dentro do prazo de 7 dias úteis após a compra, caso o cliente sinta-se insatisfeito com o conteúdo digital, conforme estabelecido pelo Código de Defesa do Consumidor.</p></LegalPage>} />

          {/* Livros Landing Pages */}
          <Route path="orando" element={<LandingPage config={configOrando} />} />
          <Route path="quando-nao-ha-rei" element={<LandingPage config={configRei} />} />
          <Route path="quem-ainda-chora" element={<LandingPage config={configChora} />} />
          <Route path="somos-todos-jerusalem" element={<LandingPage config={configJerusalem} />} />
          <Route path="colecao" element={<LandingPage config={configColecao} />} />
          <Route path="historias-para-dormir" element={<LandingPage config={configDormir} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
