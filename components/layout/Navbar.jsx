'use client';
import { Menu, Moon, Sun } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
   const pathname = usePathname();
   console.log(pathname);
   return (
      <nav className="bg-slate-950 border-b border-slate-800  w-full z-50">
         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}

            <Link href="#home" className="text-xl font-semibold text-white">
               Port<span className="text-amber-500">folio.</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6 text-slate-300">
               <Link href="#home" className="hover:text-white">
                  Home
               </Link>
               <Link href="#about" className="hover:text-white">
                  About
               </Link>
               <Link href="#skills" className="hover:text-white">
                  Skills
               </Link>
               <Link href="#projects" className="hover:text-white">
                  Projects
               </Link>
               <Link href="#contact" className="hover:text-white">
                  Contact
               </Link>
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
                        <Link href="#home">Home</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="#about">About</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="#skills">Skills</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="#projects">Projects</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="#contact">Contact</Link>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>
      </nav>
   );
}
