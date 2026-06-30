'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiSearch } from 'react-icons/fi';

// Dados dos livros
const allBooks = [
  {
    id: 1,
    title: 'Orando com o Corpo, a Alma e o Espírito',
    slug: 'orando',
    description: 'Desenvolva uma vida de oração mais profunda.',
    image: '/orando_com_corpo_alma_espirito_1781101893485.png',
    price: 'R$ 29,90',
    category: 'Oração',
  },
  {
    id: 2,
    title: 'Quando Não Há Rei',
    slug: 'quando-nao-ha-rei',
    description: 'A crise de liderança e a anarquia no coração humano.',
    image: '/quando_nao_ha_rei_1781101904540.png',
    price: 'R$ 24,90',
    category: 'Liderança',
  },
  {
    id: 3,
    title: 'Quem Ainda Chora?',
    slug: 'quem-ainda-chora',
    description: 'O clamor profético por arrependimento.',
    image: '/quem_ainda_chora_1781101915571.png',
    price: 'R$ 27,90',
    category: 'Arrependimento',
  },
  {
    id: 4,
    title: 'Somos Todos Jerusalém',
    slug: 'somos-todos-jerusalem',
    description: 'A tragédia do engano religioso.',
    image: '/somos_todos_jerusalem_1781101925943.png',
    price: 'R$ 22,90',
    category: 'Teologia',
  },
  {
    id: 5,
    title: 'Cercados, mas Não Sozinhos',
    slug: 'cercados-mas-nao-sozinhos',
    description: 'A presença de Deus no meio da angústia.',
    image: '/cercados.png',
    price: 'R$ 25,90',
    category: 'Consolo',
  },
  {
    id: 6,
    title: 'Histórias da Bíblia Para Dormir',
    slug: 'historias-para-dormir',
    description: 'Histórias bíblicas adaptadas para a hora de dormir.',
    image: '/historia_biblia_dormir.png',
    price: 'R$ 19,90',
    category: 'Infantil',
  },
  {
    id: 7,
    title: 'A Cruz e o Coração Humano',
    slug: 'colecao',
    description: 'A coleção completa para transformar sua fé.',
    image: '/christian_book_cover.png',
    price: 'R$ 49,90',
    category: 'Coleção',
  },
];

const categories = ['Todos', 'Oração', 'Liderança', 'Arrependimento', 'Teologia', 'Consolo', 'Infantil', 'Coleção'];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BooksPage() {
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
            Nossos Livros
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-xl text-gray-300"
          >
            Escolha uma obra que vai transformar sua vida espiritual.
          </motion.p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white text-dark-900 rounded-full shadow-sm hover:bg-gold-500 hover:text-white transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allBooks.map((book, index) => (
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
                    <span className="text-gold-500 text-sm hover:text-gold-600 transition-colors flex items-center">
                      Ver detalhes <FiArrowRight className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
