import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="border-t border-slate-900 pt-16 pb-8 px-6">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
               {/* Brand/About Section */}
               <div className="flex flex-col gap-4 ">
                  <h2 className="text-2xl font-bold text-white text-center md:text-start lg:text-start">
                     Port<span className="text-amber-500">folio.</span>
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 lg:mx-0 text-center md:text-start lg:text-start">
                     A passionate MERN Stack Developer building modern web
                     applications with a focus on user experience and clean
                     code.
                  </p>
               </div>

               {/* Quick Links */}
               <div className="flex flex-col gap-4">
                  <h3 className="text-white font-semibold uppercase tracking-wider text-sm text-center md:text-start lg:text-start">
                     Quick Links
                  </h3>
                  <ul className="flex flex-col gap-2 text-slate-400 text-sm text-center md:text-start lg:text-start">
                     <li>
                        <a
                           href="#about"
                           className="hover:text-amber-500 transition-colors"
                        >
                           About Me
                        </a>
                     </li>
                     <li>
                        <a
                           href="#skills"
                           className="hover:text-amber-500 transition-colors"
                        >
                           Skills
                        </a>
                     </li>
                     <li>
                        <a
                           href="#projects"
                           className="hover:text-amber-500 transition-colors"
                        >
                           Projects
                        </a>
                     </li>
                     <li>
                        <a
                           href="#contact"
                           className="hover:text-amber-500 transition-colors"
                        >
                           Contact
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Social Media */}
               <div className="flex flex-col gap-4">
                  <h3 className="text-white font-semibold uppercase tracking-wider text-sm text-center md:text-start lg:text-start">
                     Connect with me
                  </h3>
                  {/* <div className="flex gap-4">
                     <a
                        href="#"
                        className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
                     >
                        <Github size={20} />
                     </a>
                     <a
                        href="#"
                        className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
                     >
                        <Linkedin size={20} />
                     </a>
                     <a
                        href="#"
                        className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
                     >
                        <Twitter size={20} />
                     </a>
                     <a
                        href="#"
                        className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
                     >
                        <Mail size={20} />
                     </a>
                  </div> */}
                  <SocialLinks />
                  <p className="text-slate-500 text-xs mt-2 italic text-center md:text-start lg:text-start">
                     Available for new opportunities.
                  </p>
               </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-900 mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-slate-500 text-xs md:text-sm ">
               <p className="text-center">
                  © {currentYear} Rafi Ahmmed.All Rights Reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
