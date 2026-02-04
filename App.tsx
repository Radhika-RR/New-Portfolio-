
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from './constants';
import { SectionHeading } from './components/SectionHeading';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-slate-800/50 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black text-white tracking-tighter group cursor-default">
            RADHIKA<span className="text-indigo-500 group-hover:animate-pulse">.</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-400">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hidden sm:block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-64 pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Open for AI/ML Internships
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                Crafting <span className="text-indigo-500">Intelligence</span> Through Code.
              </h1>
              <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-2xl leading-relaxed">
                Hi, I'm <span className="text-white">Radhika Rajagoli</span>. A Computer Science student dedicated to building scalable AI solutions and full-stack applications.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4">
                <a href="#projects" className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-indigo-50 hover:shadow-2xl hover:shadow-white/10 active:scale-95">
                  View Projects
                </a>
                <div className="flex items-center gap-4 px-2">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <div className="relative aspect-square group">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-[4rem] rotate-6 scale-95 group-hover:rotate-12 group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-[4rem] overflow-hidden flex items-center justify-center p-12 transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="grid grid-cols-5 gap-3 opacity-20 group-hover:opacity-40 transition-opacity">
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      ))}
                   </div>
                   <div className="absolute text-7xl font-mono text-indigo-500 font-black tracking-tighter select-none">
                     &lt;AI&gt;
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-slate-900/30 border-y border-slate-900">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Background" />
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-2xl text-slate-300 leading-relaxed font-light">
                  {PERSONAL_INFO.about}
                </p>
                <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-slate-800/50">
                  <div className="space-y-2">
                    <h4 className="text-indigo-500 font-mono text-xs uppercase tracking-[0.2em]">Contact</h4>
                    <p className="text-white text-lg font-medium">{PERSONAL_INFO.email}</p>
                    <p className="text-slate-400 text-sm">{PERSONAL_INFO.location}, India</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-indigo-500 font-mono text-xs uppercase tracking-[0.2em]">Academics</h4>
                    <p className="text-white text-lg font-medium">{EDUCATION.degree}</p>
                    <p className="text-slate-400 text-sm">{EDUCATION.institution} • {EDUCATION.gpa}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                 <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                       <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                       Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Kannada", "English", "Hindi", "Marathi"].map(lang => (
                        <span key={lang} className="bg-slate-800/50 text-slate-300 px-4 py-2 rounded-xl text-sm border border-slate-700/50">
                          {lang}
                        </span>
                      ))}
                    </div>
                 </div>
                 <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                       <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                       Interests
                    </h3>
                    <p className="text-slate-400 leading-relaxed italic">
                      Outside of coding, I'm passionate about Rangoli art, exploring culinary arts, and traditional Mehendi designs.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Work History" />
            <div className="space-y-12">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/50 p-10 rounded-[2.5rem] hover:border-indigo-500/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                      <p className="text-xl text-indigo-500 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-slate-800 text-slate-400 px-6 py-2 rounded-full font-mono text-sm self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 flex gap-4 leading-relaxed">
                        <span className="text-indigo-500 font-bold">0{i+1}—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-8">
               <div className="p-10 bg-slate-900/20 border border-slate-800 rounded-[2.5rem]">
                  <h3 className="text-2xl font-bold text-white mb-8">Notable Achievements</h3>
                  <div className="space-y-4">
                    {ACHIEVEMENTS.map((ach, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-slate-950/50 border border-slate-800 rounded-2xl">
                         <div className="w-8 h-8 shrink-0 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                         <p className="text-slate-300 text-sm font-medium">{ach}</p>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="p-10 bg-slate-900/20 border border-slate-800 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-600/5 blur-[80px] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {CERTIFICATIONS.slice(0, 4).map((cert, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800 rounded-2xl group hover:border-slate-700 transition-colors">
                        <div className="flex flex-col">
                          <span className="text-white font-bold text-sm">{cert.name}</span>
                          <span className="text-slate-500 text-xs">{cert.issuer}</span>
                        </div>
                        <svg className="w-5 h-5 text-slate-700 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Technical Core" subtitle="The technologies I use to turn ideas into reality." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="bg-slate-900/30 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-900/50 transition-all hover:border-slate-700 group">
                  <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-6 block pb-4 border-b border-slate-800">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="bg-slate-900/80 text-slate-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-800 group-hover:text-slate-200 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Case Studies" subtitle="A deep dive into some of my recent technical projects." />
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group flex flex-col bg-slate-950 border border-slate-800 rounded-[3rem] overflow-hidden transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/5">
                  <div className="p-12 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-black text-white leading-none tracking-tighter group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-900">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          #{tag.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-12 py-6 bg-slate-900/50 flex justify-between items-center">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-white font-bold flex items-center gap-3 text-sm group-hover:gap-5 transition-all">
                      View Documentation
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto bg-indigo-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden group shadow-2xl shadow-indigo-600/20">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
             <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Ready to start the next project?</h2>
             <p className="text-indigo-100 text-xl mb-12 max-w-xl mx-auto font-medium">
               I'm currently seeking internship opportunities for 2025. Let's connect and discuss how I can contribute to your team.
             </p>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-lg transition-all hover:px-16 active:scale-95 shadow-xl">
               Send a Message
             </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-slate-900 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="text-3xl font-black text-white">RADHIKA<span className="text-indigo-500">.</span></div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Empowering businesses with modern AI solutions and high-performance web experiences.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-slate-400">
              <a href={PERSONAL_INFO.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
              <a href={PERSONAL_INFO.github} className="hover:text-white transition-colors">GitHub</a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">Email</a>
              <a href="#" className="hover:text-white transition-colors">Resume</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-medium uppercase tracking-widest">
            <div>© {new Date().getFullYear()} Radhika Rajagoli</div>
            <div>Built for High Performance</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
