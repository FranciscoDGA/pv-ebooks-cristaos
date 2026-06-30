'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiUser, FiMail, FiGlobe } from 'react-icons/fi';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AuthorPage() {
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
            Conheça o Autor
          </motion.h1>
        </div>
      </div>

      {/* Author Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          {/* Author Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
              <img
                src="/author_pastoral.png"
                alt="Pr. Francisco Gomes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-dark-900 mb-2">Pr. Francisco Gomes</h2>
              <p className="text-lg text-gold-600 font-medium mb-4">Autor e Teólogo</p>
              <p className="text-gray-600">
                Escritor dedicado a produzir conteúdo bíblico que aproxima as pessoas de Deus.
                Com mais de 20 anos de experiência no ministério, suas obras já transformaram
                a vida de milhares de leitores.
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Minha História</h3>
            <p className="text-gray-600 mb-4">
              Desde jovem, senti o chamado de Deus para servir através da palavra escrita.
              Meus livros são o resultado de anos de estudo, oração e experiência pastoral,
              com o objetivo de ajudar os leitores a compreenderem as Escrituras de forma
              profunda e prática.
            </p>
            <p className="text-gray-600">
              Acredito que a leitura devocional, quando feita com intenção e reflexão,
              pode ser uma poderosa ferramenta de transformação espiritual. Cada obra que
              escrevo é um convite para que você se aproxime mais de Deus e aplique Seus
              ensinamentos em sua vida diária.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gold-600 mb-1">7+</div>
              <div className="text-sm text-gray-600">Livros Publicados</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gold-600 mb-1">20+</div>
              <div className="text-sm text-gray-600">Anos de Ministério</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gold-600 mb-1">10k+</div>
              <div className="text-sm text-gray-600">Leitores</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gold-600 mb-1">5</div>
              <div className="text-sm text-gray-600">Estrelas no Google</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-dark-900 mb-4">Entre em Contato</h3>
            <p className="text-gray-600 mb-4">
              Ficou com dúvidas ou quer saber mais sobre meus livros? Estou à disposição!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contato@ochamadodagraca.com.br"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gold-500 text-dark-900 rounded-lg hover:bg-gold-400 transition-colors font-medium"
              >
                <FiMail />
                Enviar E-mail
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-gold-500 text-gold-500 rounded-lg hover:bg-gold-500 hover:text-dark-900 transition-colors font-medium"
              >
                <FiUser />
                Formulário de Contato
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
