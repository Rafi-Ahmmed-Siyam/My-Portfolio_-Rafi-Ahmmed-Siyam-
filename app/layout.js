import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
});

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400', '500', '700'],
   variable: '--font-roboto',
   display: 'swap',
});

export const metadata = {
   title: 'Rafi | Web Developer',
   description: 'MERN Stack Developer Portfolio',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${inter.variable} ${roboto.variable} antialiased bg-slate-50 text-slate-900
          dark:bg-slate-950 dark:text-slate-100`}
         >
            <header className="sticky top-0 z-50">
               <Navbar />
            </header>
            <main>{children}</main>
            <footer>
               <Footer />
            </footer>
         </body>
      </html>
   );
}
