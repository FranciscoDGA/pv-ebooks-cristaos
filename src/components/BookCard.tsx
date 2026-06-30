'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface BookCardProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  price: string;
  className?: string;
}

export function BookCard({ title, slug, description, image, price, className = '' }: BookCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <Link href={`/${slug}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-dark-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gold-600 font-bold">{price}</span>
            <span className="text-gold-500 text-sm hover:text-gold-600 transition-colors flex items-center">
              Ver detalhes <FiArrowRight className="ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
