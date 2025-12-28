import React from 'react';
import { BookOpen, Code, Heart, Laptop } from 'lucide-react';
import ContainerLayout from '../layout/ContainerLayout';

export default function About() {
   return (
      <ContainerLayout>
         <div id='about'>
            {/* Section Header */}
            <div className="mb-12 text-center md:text-left">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">
                  About <span className="text-amber-500">Me</span>
               </h2>
               <div className="h-1 w-20 bg-amber-500 rounded-full mb-8 md:mx-0 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Side: Text Content */}
               <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-100">
                     I am a{' '}
                     <span className="text-amber-500">
                        MERN Stack Developer
                     </span>{' '}
                     dedicated to crafting modern web applications.
                  </h3>

                  <p className="text-slate-400 text-lg leading-relaxed">
                     For me, web development is more than just writing code;
                     it's a true **passion**. I approach every project with
                     enthusiasm because I genuinely love building things from
                     scratch and solving complex problems that make a
                     difference.
                  </p>

                  <p className="text-slate-400 text-lg leading-relaxed">
                     Currently, I am expanding my technical foundation by
                     pursuing a **Diploma in Computer Science and Technology**.
                     This academic journey combined with my hands-on experience
                     allows me to bridge the gap between theoretical concepts
                     and real-world execution.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                     {/* Education Info */}
                     <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-colors group">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                           <BookOpen size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Education</h4>
                           <p className="text-slate-500 text-sm">
                              Diploma in Computer Science & Technology
                           </p>
                        </div>
                     </div>

                     {/* Passion Info */}
                     <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-colors group">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                           <Heart size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Passion</h4>
                           <p className="text-slate-500 text-sm">
                              Building Interactive & User-Centric Apps
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side: Visual Display */}
               <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full"></div>
                  <div className="relative grid grid-cols-2 gap-4">
                     <div className="bg-[#111827] border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-amber-500/50 transition-all">
                        <Code className="text-amber-500 mb-2" size={32} />
                        <span className="text-3xl font-bold text-white">
                           MERN
                        </span>
                        <span className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                           Specialist
                        </span>
                     </div>
                     <div className="bg-[#111827] border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 translate-y-8 hover:border-amber-500/50 transition-all">
                        <Laptop className="text-amber-500 mb-2" size={32} />
                        <span className="text-3xl font-bold text-white">
                           Modern
                        </span>
                        <span className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                           Solutions
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ContainerLayout>
   );
}
