import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'O Chamado da Graça | Editora Cristã Digital',
  description: 'Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus. Livros que confrontam, edificam e conduzem o coração humano à cruz.',
  keywords: ['livros cristãos', 'e-books', 'teologia', 'estudos bíblicos', 'editora cristã'],
  authors: [{ name: 'Pr. Francisco Gomes' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pv-ebooks-cristaos-id6r.vercel.app/',
    siteName: 'O Chamado da Graça',
    title: 'O Chamado da Graça | Editora Cristã Digital',
    description: 'Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/home_hero_bg.png',
        width: 1200,
        height: 630,
        alt: 'O Chamado da Graça - Editora Cristã Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Chamado da Graça | Editora Cristã Digital',
    description: 'Uma biblioteca digital cristã para quem deseja ler devagar, pensar profundamente e caminhar mais perto de Deus.',
    images: ['https://raw.githubusercontent.com/FranciscoDGA/pv-ebooks-cristaos/main/public/home_hero_bg.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
