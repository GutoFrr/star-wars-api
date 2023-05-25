import { ReactNode } from 'react';
import '../styles/globals.css';
import { Fira_Code } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { SearchProvider } from '@/context/SearchContext';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata = {
  title: 'Star Wars Universe',
  description: 'Site de avaliações dos filmes da saga Star Wars.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <SearchProvider>
        <body className={firaCode.className}>
          <nav className="bg-black">
            <Navbar />
          </nav>
          <main className="container mx-auto py-8 px-4 md:px-0">{children}</main>
        </body>
      </SearchProvider>
    </html>
  );
}
