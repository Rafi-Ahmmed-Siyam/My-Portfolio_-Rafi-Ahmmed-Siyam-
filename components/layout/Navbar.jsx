'use client';
import { Menu, Moon, Sun } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';


export default function Navbar() {
   return (
      <nav className="bg-slate-950 border-b border-slate-800  w-full z-50">
         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-lg font-semibold text-slate-200">
               <span className='text-amber-500'>Rafi</span>.dev
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6 text-slate-300">
               <a href="#about" className="hover:text-white">
                  About
               </a>
               <a href="#skills" className="hover:text-white">
                  Skills
               </a>
               <a href="#projects" className="hover:text-white">
                  Projects
               </a>
               <a href="#contact" className="hover:text-white">
                  Contact
               </a>
               {/* <Button variant="ghost" size="icon" className="text-slate-200">
                  <Sun className="size-5" />
               </Button> */}
               {/* <ThemeButton /> */}
            </div>

            {/* Mobile dropdown */}
            <div className="flex items-center gap-2 md:hidden">
               {/* Theme button */}
               <Button variant="ghost" size="icon" className="text-slate-200">
                  <Sun className="size-5" />
               </Button>

               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-200 "
                     >
                        <Menu className="size-5" />
                     </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                     align="end"
                     className="bg-slate-900 text-white border-slate-800"
                  >
                     <DropdownMenuItem asChild>
                        <a href="#about">About</a>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <a href="#skills">Skills</a>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <a href="#projects">Projects</a>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <a href="#contact">Contact</a>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>
      </nav>
   );
}
