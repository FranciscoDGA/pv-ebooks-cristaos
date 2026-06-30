'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg transition-colors
    ${icon ? 'gap-2' : ''}
  `;

  const variants = {
    primary: 'bg-gold-500 text-dark-900 hover:bg-gold-400',
    secondary: 'bg-dark-900 text-white hover:bg-dark-800',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <FiArrowRight />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <FiArrowRight />}
    </button>
  );
}
