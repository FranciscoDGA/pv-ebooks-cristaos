'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TermsPage() {
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
            Termos de Uso
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
              Ao acessar o site O Chamado da Graça, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Licença de Uso</h2>
            <p className="text-gray-600 mb-4">
              Os e-books e materiais adquiridos nesta plataforma são exclusivamente para uso pessoal e intransferível. É terminantemente proibida a revenda, distribuição, cópia ou reprodução pública de qualquer obra sem a autorização prévia por escrito do autor.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Isenção de Responsabilidade</h2>
            <p className="text-gray-600 mb-4">
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Editora O Chamado da Graça não garante que qualquer material em seu site seja preciso, completo ou atual, embora nos esforcemos para manter o mais alto padrão de qualidade editorial.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Modificações</h2>
            <p className="text-gray-600 mb-4">
              A Editora pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Política de Reembolso</h2>
            <p className="text-gray-600 mb-4">
              Garantimos a devolução integral do valor pago dentro do prazo de 7 dias úteis após a compra, caso o cliente sinta-se insatisfeito com o conteúdo digital, conforme estabelecido pelo Código de Defesa do Consumidor.
            </p>

            <p className="text-gray-600 mt-6">
              Se você tiver dúvidas sobre estes termos de uso, entre em contato conosco através do e-mail: <a href="mailto:contato@ochamadodagraca.com.br" className="text-gold-600 hover:underline">contato@ochamadodagraca.com.br</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
