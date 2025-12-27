import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const allSkills = [
   {
      name: 'HTML5',
      desc: 'The backbone of any website, used for structuring web content with modern semantic elements...',
      icon: 'https://i.ibb.co.com/3m8HYVhz/html-5.png',
   },
   {
      name: 'CSS3',
      desc: 'Advanced styling techniques including Flexbox, Grid, and animations to create beautiful layouts...',
      icon: 'https://i.ibb.co.com/PZXj68h5/css-3.png',
   },
   {
      name: 'JavaScript',
      desc: 'Deep understanding of ES6+, DOM manipulation, and asynchronous programming for dynamic apps...',
      icon: 'https://i.ibb.co.com/Xx2Hgv4Z/js.png',
   },
   {
      name: 'React',
      desc: 'React lets you build user interfaces out of individual pieces called components...',
      icon: 'https://i.ibb.co.com/b5J9BdF8/react-JS.png',
   },
   {
      name: 'NextJS',
      desc: "Next.js is a popular React framework that extends React's capabilities with SSR and Static generation...",
      icon: 'https://i.ibb.co.com/vx4g4nPC/icons8-nextjs-100.png',
   },
   {
      name: 'Node',
      desc: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment for backend development...',
      icon: 'https://i.ibb.co.com/qYPZYsLJ/node-js.png',
   },
   {
      name: 'ExpressJS',
      desc: 'A minimal and flexible Node.js web application framework that provides robust features for APIs...',
      icon: 'https://i.ibb.co.com/bRQ08t6M/icons8-express-js-100.png',
   },
   {
      name: 'MongoDB',
      desc: 'A NoSQL database designed for ease of development and scaling, supporting flexible JSON-like documents...',
      icon: 'https://i.ibb.co.com/wF0qmfR5/icons8-mongodb-96.png',
   },
   {
      name: 'Firebase',
      desc: 'Build & run modern, AI-powered experiences users love with Firebase, a Google-backed platform...',
      icon: 'https://i.ibb.co.com/yFmpBymN/icons8-firebase-144.png',
   },
   {
      name: 'Version Control(Git)',
      desc: 'Efficiently tracking changes in source code during software development using Git and GitHub...',
      icon: 'https://i.ibb.co.com/Vc2tMrx3/icons8-git-144.png',
   },
];

export default function Skills() {
   return (
      <section className="bg-slate-950 py-24 px-6">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  My Technical <span className="text-amber-500">Skills</span>
               </h2>
               <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                  I specialize in the MERN stack and modern frontend
                  technologies.
               </p>
            </div>

            {/* Skills Container using Flexbox for centering last row items */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
               {allSkills.map((skill, index) => (
                  <Card
                     key={index}
                     // এখানে w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] ব্যবহার করা হয়েছে
                     // যাতে বড় স্ক্রিনে ৪টি কার্ড থাকে কিন্তু শেষ লাইনে ২/৩টি থাকলে সেগুলো মাঝখানে থাকে।
                     className="relative bg-slate-900/40 border-slate-800 pt-14 pb-8 px-5 group hover:bg-slate-900 transition-all duration-300 border-b-4 hover:border-b-amber-500 shadow-xl w-87.5 sm:w-[45%] lg:w-[23%]"
                  >
                     {/* Floating Icon Holder */}
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full p-3 shadow-2xl z-10 border-4 border-slate-950 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <div className="relative w-full h-full">
                           <Image
                              src={skill.icon}
                              alt={skill.name}
                              fill
                              className="object-contain"
                           />
                        </div>
                     </div>

                     <CardContent className="text-center">
                        <h3 className="text-xl font-bold text-amber-500 mb-3  tracking-wide">
                           {skill.name}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                           {skill.desc}
                        </p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
}
