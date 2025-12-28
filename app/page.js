import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function HomePage() {
   return (
      <div>
         <Home />
         <About />
         <Skills />
         <Projects />
         <Contact />
      </div>
   );
}
