import React from 'react';
import { Github, ExternalLink, Server, Layout } from 'lucide-react';
import ContainerLayout from '../layout/ContainerLayout';

const projects = [
   {
      title: 'Digital Wallet',
      description:
         'High-performance Full Stack digital wallet built with React/TypeScript, featuring secure operations and a sleek UI.',
      image: 'https://via.placeholder.com/400x220',
      type: 'Full Stack Project',
      tags: [
         'React.js',
         'TailwindCSS',
         'TypeScript',
         'Shadcn UI',
         'MongoDB',
         'Mongoose',
         'Express.js',
      ],
      clientLink: '#',
      serverLink: '#',
      liveLink: '#',
   },
   {
      title: 'LivingNest',
      description:
         'A room rental platform featuring user authentication and separate dashboards for users, members, and admins.',
      image: 'https://via.placeholder.com/400x220',
      type: 'Full Stack Project',
      tags: ['React.js', 'TailwindCSS', 'Firebase', 'MongoDB', 'Express.js'],
      clientLink: '#',
      serverLink: '#',
      liveLink: '#',
   },
   {
      title: 'CarePoint',
      description:
         'CarePoint is a scalable platform for volunteer management, built with React, TailwindCSS, Firebase, Express, and MongoDB!',
      image: 'https://via.placeholder.com/400x220',
      type: 'Fullstack Website',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      clientLink: '#',
      serverLink: '#',
      liveLink: '#',
   },
];

export default function Projects() {
   return (
      <ContainerLayout>
         <div className="py-10" id="projects">
            {/* Section Heading */}
            <div className="mb-16 flex flex-col items-center justify-center text-center">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  My Creative <span className="text-amber-500">Projects</span>
               </h2>
               <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
               <p className="text-slate-400 max-w-2xl text-sm md:text-base">
                  A selection of my recent works where I&apos;ve applied my MERN
                  stack skills to solve real-world problems.
               </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                  <div
                     key={index}
                     className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col hover:border-amber-500/30 transition-all group"
                  >
                     {/* Project Image */}
                     <div className="relative overflow-hidden aspect-video border-b border-slate-800">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                     </div>

                     {/* Project Content */}
                     <div className="p-5 flex flex-col grow">
                        <div className="flex justify-between items-start mb-3">
                           <h3 className="text-lg font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
                              {project.title}
                           </h3>
                           <span className="text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold border border-amber-500/20">
                              {project.type}
                           </span>
                        </div>

                        <p className="text-slate-400 text-[13px] leading-relaxed mb-5 line-clamp-3">
                           {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                           {project.tags.map((tag, i) => (
                              <span
                                 key={i}
                                 className="text-[10px] bg-[#1f2937]/50 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>

                        {/* 3 Buttons in 1 Row */}
                        <div className="mt-auto flex items-center gap-2">
                           <a
                              href={project.liveLink}
                              title="Live Demo"
                              className="flex-1 flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-lg transition-all text-[11px]"
                           >
                              <ExternalLink size={14} /> Live
                           </a>

                           <a
                              href={project.clientLink}
                              title="Client Code"
                              className="flex-1 flex items-center justify-center gap-1.5 border border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-amber-500 font-semibold py-2 rounded-lg transition-all text-[11px]"
                           >
                              <Layout size={14} /> Client
                           </a>

                           <a
                              href={project.serverLink}
                              title="Server Code"
                              className="flex-1 flex items-center justify-center gap-1.5 border border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-amber-500 font-semibold py-2 rounded-lg transition-all text-[11px]"
                           >
                              <Server size={14} /> Server
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </ContainerLayout>
   );
}
