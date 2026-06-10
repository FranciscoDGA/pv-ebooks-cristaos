import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';

import { LandingPage } from './components/LandingPage';
import { configOrando } from './config/configOrando';
import { configRei } from './config/configRei';
import { configChora } from './config/configChora';
import { configJerusalem } from './config/configJerusalem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/orando" element={<LandingPage config={configOrando} />} />
        <Route path="/quando-nao-ha-rei" element={<LandingPage config={configRei} />} />
        <Route path="/quem-ainda-chora" element={<LandingPage config={configChora} />} />
        <Route path="/somos-todos-jerusalem" element={<LandingPage config={configJerusalem} />} />
        {/* Default route redirects to one of the books */}
        <Route path="*" element={<Navigate to="/orando" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
