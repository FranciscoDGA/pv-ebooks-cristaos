'use client';

import Link from 'next/link';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold-100 flex items-center justify-center">
          <FiAlertCircle className="w-10 h-10 text-gold-600" />
        </div>
        <h1 className="text-4xl font-bold text-dark-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-dark-800 mb-2">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-dark-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
        >
          <FiHome className="mr-2" />
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
