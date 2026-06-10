import React from 'react';
import { renderToString } from 'react-dom/server';
import { LandingPage } from './src/components/LandingPage';
import { configOrando } from './src/config/configOrando';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

try {
  const html = renderToString(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/orando']}>
        <LandingPage config={configOrando} />
      </MemoryRouter>
    </HelmetProvider>
  );
  console.log('Success! HTML Length:', html.length);
} catch (e) {
  console.error('Error rendering:', e);
}
