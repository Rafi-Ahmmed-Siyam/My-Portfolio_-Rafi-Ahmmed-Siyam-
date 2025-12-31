import Image from 'next/image';
import myImg from '@/public/rBlaxk.jpg';
import { Button } from '../ui/button';
import AnimatedIntro from '../common/AnimatedIntro';
import SocialLinks from '../common/SocialLinks';
import { Download, FolderKanban } from 'lucide-react';
import ContainerLayout from '../layout/ContainerLayout';

export default function Home() {
   return (
      <ContainerLayout id={'home'}>
         <section className=" flex items-center overflow-hidden py-0 md:py-10 lg:py-15">
            <div className="w-300 mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-5 ">
               <div className="max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mx-auto">
                  <div className="relative flex justify-center items-center">
                     <div className="relative group w-full">
                        {/* মেইন সার্কেল কন্টেইনার */}
                        <div className="relative z-10 p-1 bg-gradient-to-b from-slate-800 to-transparent rounded-full">
                           <div className="bg-black rounded-full p-2 md:p-3 shadow-2xl overflow-hidden">
                              {/* আপনার ইমেজ */}
                              <div className="relative rounded-full overflow-hidden border-[8px] md:border-[12px] border-slate-900 shadow-inner">
                                 <Image
                                    src={myImg}
                                    alt="Portfolio"
                                    className="w-full h-auto object-cover"
                                    placeholder="blur"
                                    priority
                                 />
                              </div>
                           </div>
                        </div>

                        {/* নিচের রিফ্লেকশন শ্যাডো */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-amber-500/20 blur-xl rounded-full"></div>
                     </div>
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
                     **Next.js** and **Tailwind CSS**. I focus on creating
                     clean, user-friendly designs that solve real-world
                     problems.
                  </p>

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
                     <a href="#projects">
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
                  {/* Social links */}
                  <SocialLinks py="py-15" />
               </div>
            </div>
         </section>
      </ContainerLayout>
   );
}
