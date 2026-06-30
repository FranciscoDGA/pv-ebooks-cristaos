'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            Política de Privacidade
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="prose max-w-none prose-lg prose-gray">
            <p className="text-gray-600 mb-6">
              A Editora O Chamado da Graça tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação e compra pelo site.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Coleta de Informações</h2>
            <p className="text-gray-600 mb-4">
              Coletamos informações pessoais fornecidas voluntariamente por você durante o processo de compra, cadastro em nossa newsletter ou preenchimento de formulários de contato. Isso inclui nome, endereço de e-mail e dados de cobrança.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Uso das Informações</h2>
            <p className="text-gray-600 mb-4">
              As informações coletadas são utilizadas exclusivamente para viabilizar as transações comerciais, fornecer suporte ao cliente, e enviar comunicações relevantes sobre nossos lançamentos, desde que autorizado previamente. Não realizamos spam sob nenhuma circunstância.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Segurança dos Dados</h2>
            <p className="text-gray-600 mb-4">
              Implementamos rigorosas medidas de segurança em nível tecnológico e organizacional para proteger seus dados pessoais contra acessos não autorizados, perdas ou alterações.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Seus Direitos</h2>
            <p className="text-gray-600 mb-4">
              Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de solicitar a exclusão, correção ou atualização de seus dados a qualquer momento, enviando um e-mail para nossa equipe de suporte.
            </p>

            <p className="text-gray-600 mt-6">
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco através do e-mail: <a href="mailto:contato@ochamadodagraca.com.br" className="text-gold-600 hover:underline">contato@ochamadodagraca.com.br</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
