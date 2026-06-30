import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen, FiStar, FiUser, FiMail } from 'react-icons/fi';

// Dados dos livros (pode ser movido para um arquivo de configuração)
const featuredBooks = [
  {
    id: 1,
    title: 'Orando com o Corpo, a Alma e o Espírito',
    slug: 'orando',
    description: 'Desenvolva uma vida de oração mais profunda.',
    image: '/orando_com_corpo_alma_espirito_1781101893485.png',
    price: 'R$ 29,90',
  },
  {
    id: 2,
    title: 'Quando Não Há Rei',
    slug: 'quando-nao-ha-rei',
    description: 'A crise de liderança e a anarquia no coração humano.',
    image: '/quando_nao_ha_rei_1781101904540.png',
    price: 'R$ 24,90',
  },
  {
    id: 3,
    title: 'Quem Ainda Chora?',
    slug: 'quem-ainda-chora',
    description: 'O clamor profético por arrependimento.',
    image: '/quem_ainda_chora_1781101915571.png',
    price: 'R$ 27,90',
  },
  {
    id: 4,
    title: 'Somos Todos Jerusalém',
    slug: 'somos-todos-jerusalem',
    description: 'A tragédia do engano religioso.',
    image: '/somos_todos_jerusalem_1781101925943.png',
    price: 'R$ 22,90',
  },
];

const benefits = [
  { icon: FiBookOpen, text: 'Conteúdo profundo e bíblico' },
  { icon: FiStar, text: 'Linguagem clara e acessível' },
  { icon: FiUser, text: 'Para todas as idades' },
  { icon: FiMail, text: 'Acesso imediato após compra' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">OCG</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-dark-900">O Chamado da Graça</h1>
                <p className="text-sm text-gray-500">Editora Cristã Digital</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gold-600 transition-colors">Início</Link>
              <Link href="/livros" className="text-gray-700 hover:text-gold-600 transition-colors">Livros</Link>
              <Link href="/blog" className="text-gray-700 hover:text-gold-600 transition-colors">Blog</Link>
              <Link href="/autor" className="text-gray-700 hover:text-gold-600 transition-colors">Autor</Link>
              <Link href="/contato" className="text-gray-700 hover:text-gold-600 transition-colors">Contato</Link>
            </nav>
            <button className="md:hidden p-2 rounded-md bg-gold-500 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left lg:max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Livros que{' '}
              <span className="text-gold-400">Transformam sua Fé</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Conhecimento bíblico para uma vida mais próxima de Deus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#livros"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-dark-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors text-lg"
              >
                Explorar Livros
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/autor"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500 hover:text-dark-900 transition-colors text-lg"
              >
                Conheça o Autor
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Featured Books Section */}
      <section id="livros" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Nossos Livros em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Obras que vão aprofundar seu conhecimento bíblico e transformar sua vida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/${book.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {book.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gold-600 font-bold">{book.price}</span>
                      <span className="text-gold-500 text-sm hover:text-gold-600 transition-colors">
                        Ver detalhes
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Por que Ler Nossos Livros?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada obra é escrita com o propósito de levar você a uma comunhão mais profunda com Deus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gold-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {benefit.text}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Pronto para Transformar sua Vida?
            </h2>
            <p className="text-lg text-dark-800 mb-8 max-w-2xl mx-auto">
              Escolha um livro e comece sua jornada de fé hoje mesmo.
            </p>
            <Link
              href="#livros"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-900 text-white font-semibold rounded-lg hover:bg-dark-800 transition-colors text-lg"
            >
              Ver Todos os Livros
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">O Chamado da Graça</h3>
              <p className="text-gray-400 text-sm">
                Uma editora cristã dedicada a publicar obras que aproximam as pessoas de Deus.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Início</Link></li>
                <li><Link href="/livros" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Livros</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Blog</Link></li>
                <li><Link href="/autor" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Autor</Link></li>
                <li><Link href="/contato" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacidade" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Política de Privacidade</Link></li>
                <li><Link href="/termos" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Termos de Uso</Link></li>
                <li><Link href="/devolucao" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Política de Devolução</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400 text-sm mb-2">E-mail: contato@ochamadodagraca.com.br</p>
              <p className="text-gray-400 text-sm">WhatsApp: (XX) XXXXX-XXXX</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} O Chamado da Graça. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
