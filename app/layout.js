import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';

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
      <html lang="en" suppressHydrationWarning>
         {/* শুধুমাত্র ফন্ট ভেরিয়েবল এবং transition রাখুন */}
         <body
            className={`${inter.variable} ${roboto.variable} antialiased transition-colors duration-300`}
         >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               <header className="sticky top-0 z-50">
                  <Navbar />
               </header>
               <main>{children}</main>
               <footer>
                  <Footer />
               </footer>
            </ThemeProvider>
         </body>
      </html>
   );
}
// bg-slate-50 text-slate-900
//           dark:bg-slate-950 dark:text-slate-100
