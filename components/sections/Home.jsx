import Image from 'next/image';
import myImg from '@/public/myImg.jpg';
import { Button } from '../ui/button';
import AnimatedIntro from '../common/AnimatedIntro';
import SocialLinks from '../common/SocialLinks';
import { Download, FolderKanban } from 'lucide-react';

export default function Home() {
   return (
      <section
         id="home"
         className="bg-slate-950 py-20 px-6 min-h-[80vh] flex items-center overflow-hidden "
      >
         <div className="w-300 mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-5 ">
            {/* Image Section with Large Circular Background */}
            <div className="relative flex-1 flex justify-center items-center ">
               {/* Large Circle - Second Image Style */}
               <div className="absolute w-70 h-70 md:w-110 md:h-110 bg-slate-900 rounded-full translate-x-10 opacity-50 block md:hidden lg:block"></div>

               {/* Image Container */}
               <div className="relative z-10 w-70 h-70 md:w-105 md:h-105 rounded-full overflow-hidden border-10 md:border-15 border-slate-800 shadow-2xl">
                  <Image
                     src={myImg}
                     alt="Profile Picture"
                     fill
                     className="object-cover object-top"
                     priority
                  />
               </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left ">
               <span className="text-amber-500 font-semibold tracking-widest uppercase text-sm">
                  Hello, Welcome
               </span>
               <AnimatedIntro />
               <p className="text-slate-400 text-lg md:text-lg leading-relaxed mb-7 max-w-xl">
                  I am a passionate **Full-stack Developer** (Beginner)
                  specialized in building modern web applications using
                  **Next.js** and **Tailwind CSS**. I focus on creating clean,
                  user-friendly designs that solve real-world problems.
               </p>

               {/* Social links */}
               <SocialLinks />
               {/* Action Buttons */}
               <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                  {/* Contact Us - Primary Style
                  <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-6 rounded-xl font-bold text-lg shadow-lg shadow-amber-500/10 transition-all active:scale-95 gap-2">
                     <Mail className="w-5 h-5" />
                     Contact us
                  </Button> */}

                  {/* Download CV - Outline Style */}
                  <Button
                     variant="outline"
                     className="border-2 border-slate-700 text-slate-200 bg-slate-800 hover:bg-slate-700 px-6 py-6 rounded-xl font-bold text-lg transition-all active:scale-95 gap-2"
                  >
                     <Download className="w-5 h-5" />
                     Download CV
                  </Button>

                  {/* View Projects - Ghost Style with Animation */}
                  <a href='#projects'>
                     <Button
                        variant="ghost"
                        className="text-amber-500 hover:text-amber-400 hover:bg-transparent px-6 py-6 rounded-xl font-bold text-lg group gap-2"
                     >
                        <FolderKanban className="w-5 h-5" />
                        <span>View Projects</span>
                        <span className="transition-transform group-hover:translate-x-1">
                           →
                        </span>
                     </Button>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
