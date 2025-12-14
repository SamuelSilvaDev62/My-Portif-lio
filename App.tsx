import React, { useState } from 'react';
import { PROJECTS, SKILLS, ICONS } from './constants';
import { ProjectCategory } from './types';
import { ProjectCard } from './components/ProjectCard';
import { AIChat } from './components/AIChat';
import { Terminal, Code, Cpu, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = activeCategory === ProjectCategory.ALL
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen font-sans bg-cyber-black text-gray-200 selection:bg-cyber-cyan selection:text-black">
      
      {/* Background Grid FX */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-1 border border-cyber-cyan rounded bg-cyber-cyan/10 group-hover:bg-cyber-cyan/20 transition-colors">
                 <Terminal className="w-6 h-6 text-cyber-cyan" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">SAMUEL <span className="text-cyber-cyan">SILVA</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 font-mono text-sm">
                <a href="#home" className="hover:text-cyber-cyan transition-colors">INÍCIO</a>
                <a href="#projects" className="hover:text-cyber-cyan transition-colors">PROJETOS</a>
                <a href="#skills" className="hover:text-cyber-cyan transition-colors">HABILIDADES</a>
                <a href="#contact" className="px-4 py-2 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all rounded-sm">
                  CONTATO
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyber-cyan/20 blur-[100px] rounded-full -z-10 animate-pulse-fast" />
          
          <h2 className="text-cyber-cyan font-mono mb-4 tracking-[0.2em] text-sm uppercase">Inicializando Sistema v2.0</h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-6 glitch-text" data-text="FULLSTACK DEV">
            FULLSTACK DEV
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 font-sans font-light mb-10 leading-relaxed">
            Desenvolvendo experiências digitais de alta performance. 
            Especialista em criar interfaces imersivas, sistemas robustos e soluções modernas para a web.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#projects" className="px-8 py-4 bg-cyber-cyan text-black font-bold font-display tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-2 clip-path-polygon">
               EXPLORAR PROJETOS <Code className="w-5 h-5" />
             </a>
             <a href="#contact" className="px-8 py-4 border border-cyber-gray bg-cyber-black/50 hover:border-cyber-purple hover:text-cyber-purple transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
               INICIAR CONEXÃO
             </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyber-cyan/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-cyber-dark/30 relative z-10 border-t border-cyber-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-cyber-purple">#</span> PROJETOS
              </h2>
              <p className="text-gray-400 font-mono text-sm">Galeria de sistemas desenvolvidos.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.values(ProjectCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono border transition-all uppercase ${
                    activeCategory === cat
                      ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-[0_0_10px_rgba(0,243,255,0.5)]'
                      : 'bg-transparent text-gray-400 border-cyber-gray hover:border-cyber-cyan hover:text-cyber-cyan'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section (RPG Stats Style) */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                <span className="text-cyber-green">>></span> DADOS TÉCNICOS
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Minha stack de tecnologia é otimizada para performance e escalabilidade. 
                Utilizo as ferramentas mais modernas do mercado para garantir código limpo e interfaces responsivas.
              </p>
              
              <div className="p-6 border border-cyber-gray bg-cyber-black/50 backdrop-blur rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <Cpu className="w-24 h-24 text-cyber-cyan" />
                </div>
                <h3 className="text-cyber-cyan font-mono mb-4 text-lg">Hardware Mental</h3>
                <ul className="space-y-2 text-sm text-gray-300 font-mono">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyber-purple rounded-full"/> Resolução de Problemas Complexos</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyber-purple rounded-full"/> Arquitetura de Software Escalável</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyber-purple rounded-full"/> Metodologias Ágeis (Scrum/Kanban)</li>
                </ul>
              </div>
            </div>

            {/* Right: Skill Bars */}
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2 font-mono text-sm">
                    <span className="text-white group-hover:text-cyber-green transition-colors flex items-center gap-2">
                       {skill.name}
                    </span>
                    <span className="text-cyber-green">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-cyber-gray rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] opacity-50 z-10" />
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-green relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute right-0 top-0 h-full w-1 bg-white shadow-[0_0_10px_white]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-cyber-dark pt-20 pb-10 border-t border-cyber-gray relative overflow-hidden">
        {/* Decorative Grid Bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-[linear-gradient(to_top,#00f3ff_0%,transparent_100%)] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8">ESTABELECER CONEXÃO</h2>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-4 border border-cyber-gray rounded-full hover:border-cyber-cyan hover:bg-cyber-cyan/10 hover:text-cyber-cyan transition-all group">
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-4 border border-cyber-gray rounded-full hover:border-cyber-purple hover:bg-cyber-purple/10 hover:text-cyber-purple transition-all group">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-4 border border-cyber-gray rounded-full hover:border-cyber-green hover:bg-cyber-green/10 hover:text-cyber-green transition-all group">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="font-mono text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SAMUEL <span className="text-cyber-cyan">SILVA</span>. SYSTEMS ONLINE.</p>
            <p className="mt-2 text-xs opacity-50">POWERED BY REACT & GEMINI AI</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;