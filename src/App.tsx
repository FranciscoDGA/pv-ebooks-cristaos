
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';

import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { BlogIndex } from './pages/BlogIndex';
import { ArticlePage } from './pages/ArticlePage';
import { LandingPage } from './components/LandingPage';

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
