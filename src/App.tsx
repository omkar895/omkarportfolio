/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  DraftingCompass, 
  Mail, 
  Download, 
  ArrowRight, 
  Settings, 
  Code, 
  Terminal, 
  Shapes, 
  Cpu, 
  BarChart3, 
  ExternalLink, 
  AtSign, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Menu, 
  X,
  Check,
  Loader2
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image: string;
  link?: string;
}

interface Skill {
  category: string;
  icon: any;
  items: string[];
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Learnova(An AI Chatbot)",
    description: "An AI Chatbot which is built throgh vibecoding tool(Lovable).",
    category: "Software",
    tools: ["Lovable", "Antigravity"],
    image: "https://married-salmon-wnok1wgq2c.edgeone.app/Screenshot%20from%202026-02-21%2017-57-38.png",
    link: "https://learnova-idt-3.lovable.app/"
  },
  {
    id: 2,
    title: "TACTO",
    description: "A Tic Tac Toe Game Built Through VibeCoding.",
    category: "Software",
    tools: ["Antigrvity", "Versel", "Python"],
    image: "https://genetic-red-kgy5kmemel.edgeone.app/Screenshot%20from%202026-02-21%2018-01-23.png",
    link: "https://tactoo.netlify.app/"
  },
  {
    id: 3,
    title: "Dr.Content",
    description: "Strategy provider for Influencer as per there topic and Platform.",
    category: "Robotics",
    tools: ["Antigravity","Gemini API","Versel"],
    image: "https://historic-tomato-9pjzzc52rd.edgeone.app/Screenshot%20from%202026-02-21%2018-44-11.png",
    link: "https://drcontent.vercel.app/"
  }
];

const SKILLS: Skill[] = [
  {
    category: "Coding",
    icon: Terminal,
    items: ["Python (NumPy)", "C++ & C" , , "HTML and CSS"]
  },
  {
    category: "Known Languages",
    icon: Shapes,
    items: ["English", "Kannada", "Hindi", "Konkani"]
  },
  {
    category: "Vibe Coding Tools ",
    icon: Cpu,
    items: ["Antigravity", "Cursor", "Replt", "Vesel"]
  },
  {
    category: "Hobbies",
    icon: BarChart3,
    items: ["Playinng Cricket", "Solving in Leetcode", "Cloning websites", "Watching Movie/Anime"]
  }
];

const PARTNERS = [
  "ALVA'S INSTITUTE OF ENGINEERING AND TECHNOLOGY,MANGLORE (AIML)"
];

// --- Components ---

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
          <span key={i} className="mx-12 text-4xl font-display font-bold text-white/20 hover:text-primary transition-colors cursor-default uppercase tracking-widest">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill, index: number, key?: any }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/50 transition-all group"
    >
      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="font-display font-bold text-xl mb-6 text-white">{skill.category}</h3>
      <ul className="space-y-4">
        {skill.items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
            <div className="size-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: Project, index: number, key?: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.05,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      className="group relative"
    >
      <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 border border-white/5 mb-8 relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/20 backdrop-blur-sm">
          <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-bg-dark px-8 py-3 rounded-full font-bold shadow-2xl"
          >
            View Project
          </motion.a>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
          {project.category}
        </span>
        {project.tools.slice(0, 2).map(tool => (
          <span key={tool} className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-white/10">
            {tool}
          </span>
        ))}
      </div>
      
      <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm line-clamp-2">
        {project.description}
      </p>
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappMessage = `*New Portfolio Message*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Subject:* ${formState.subject}%0A%0A*Message:* ${formState.message}`;
    const whatsappUrl = `https://wa.me/919380271907?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'py-4 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="size-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20 bg-primary/10 p-0.5">
              <div className="w-full h-full rounded-[14px] overflow-hidden">
                <img 
                  src="https://damp-tomato-t29wpfuqyy.edgeone.app/omkarsnaik.jpeg" 
                  alt="Omkar Naik App Logo" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight text-white leading-none">
                OMKAR<span className="text-primary">NAIK</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Portfolio </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {['About', 'Skills', 'Projects', 'Experience'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Mail size={16} />
              Contact Me
            </motion.a>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-display font-bold text-white"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="technical-grid">
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Currently a Student
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white">
                Hi, I'm Omkar, an <span className="text-primary">AI & ML Student</span> & Problem Solver.
              </h1>
              
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
                First-year Artificial Intelligence & Machine Learning student at Mangalore.<br />
                Passionate about exploring data, algorithms, and intelligent systems.<br />
                Curious learner focused on building strong foundations in AI and problem-solving.<br />
                Driven to grow my skills and contribute to innovative tech solutions.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-2xl shadow-primary/30"
                >
                  View My Projects
                  <ArrowRight size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-card-dark border border-white/10 shadow-2xl relative group">
                <img 
                  src="https://damp-tomato-t29wpfuqyy.edgeone.app/omkarsnaik.jpeg" 
                  alt="Omkar Naik Portrait"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 size-40 bg-primary/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 size-40 bg-primary/10 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Rollable Marquee Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] text-center">Studying in</p>
          </div>
          <Marquee />
        </section>

        {/* About Section */}
        <section className="py-32 px-6" id="about">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-8"
              >
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
                  About My <span className="text-primary">Discipline</span>
                </h2>
                <div className="grid gap-6">
                  <div className="p-6 rounded-2xl bg-card-dark border border-white/5 flex items-start gap-6 group hover:border-primary/30 transition-all">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white mb-2">Machine Learning</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">field of AI that enables systems to learn from data and improve their performance without being explicitly programmed.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-card-dark border border-white/5 flex items-start gap-6 group hover:border-primary/30 transition-all">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Code size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white mb-2">Artificial Intelligence</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">focused on building systems that can think, learn, and make decisions like humans.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-lg text-slate-400 space-y-8 leading-relaxed font-light"
              >
                <p>
                  I am a first-year student at the <strong className="text-white font-medium">Alva's Institute of Engineering and Technology</strong>, where I balance rigorous theoretical studies with practical AI implementation. My approach to technology is rooted in the belief that the most elegant solutions are born from data-driven insights.
                </p>
                <p>
                   My technical interests lie in generative models, specifically looking at how transformers can optimize resource allocation in distributed computing environments.
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
                  <div>
                    <h5 className="text-primary font-bold uppercase text-xs mb-3 tracking-widest">Education</h5>
                    <p className="text-white font-display font-bold">B.Tech Artificial Intelligence</p>
                    <p className="text-sm text-slate-500">Minor in Mathematics</p>
                  </div>
                  <div>
                    <h5 className="text-primary font-bold uppercase text-xs mb-3 tracking-widest">Research</h5>
                    <p className="text-white font-display font-bold">Computer Vision</p>
                    <p className="text-sm text-slate-500">Transformer Architectures</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5" id="skills">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">Technical Proficiency and Hobbies</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Validated through academic coursework, research publications, and real-world industrial projects.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.map((skill, i) => (
                <SkillCard key={skill.category} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-6" id="projects">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">My Projects</h2>
                <p className="text-slate-500">Workinng to be more precise in projects.</p>
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-primary font-bold hover:text-primary/80 flex items-center gap-2 transition-all group"
              >
                View All Archives 
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5" id="experience">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-20 text-center text-white">Experience & Education</h2>
            <div className="space-y-16 relative before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10 pl-10">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[45px] top-1 size-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
                <div className="mb-2 text-primary text-xs font-bold uppercase tracking-[0.2em]">2025-2029 (Precent)</div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">B.E in Artificial Intelligence and Machine Learning</h3>
                <div className="text-slate-400 font-medium mb-6">A.I.E.T,Manglore</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Currently pursuing a B.E. in Artificial Intelligence & Machine Learning (First Year), building a strong foundation in intelligent systems and emerging technologies.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[45px] top-1 size-2.5 rounded-full bg-white/20" />
                <div className="mb-2 text-primary text-xs font-bold uppercase tracking-[0.2em]">2024</div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">Pre University</h3>
                <div className="text-slate-400 font-medium mb-6">Himalaya P.U College,Ankola</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Secured 90% in PCMB during Pre-University, reflecting a strong foundation in Physics, Chemistry, Mathematics, and Biology.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[45px] top-1 size-2.5 rounded-full bg-white/20" />
                <div className="mb-2 text-primary text-xs font-bold uppercase tracking-[0.2em]">2022</div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">Matriculation</h3>
                <div className="text-slate-400 font-medium mb-6">P.M.E.H.S, Ankola</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Achieved an outstanding 97.76% in matriculation, demonstrating strong academic excellence and consistent dedication.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6" id="contact">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-6xl mx-auto bg-card-dark rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden flex flex-col lg:flex-row"
          >
            <div className="lg:w-2/5 bg-primary p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Let's Connect</h2>
                <p className="text-white/70 text-lg mb-12 font-light">I'm currently seeking internship opportunities for the Summer 2024 season. Let's build something extraordinary.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <AtSign size={20} />
                    </div>
                    <span className="text-lg font-medium">omkarsnaik999@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <span className="text-lg font-medium">Manglore, Karnataka</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mt-16 relative z-10">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/omkar-naik-31651735b/" },
                  { Icon: Github, href: "https://github.com/omkar895" },
                  { Icon: Instagram, href: "https://www.instagram.com/0mkar.exe_/" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="size-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-20 -right-20 size-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="lg:w-3/5 p-16">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Full Name</label>
                        <input 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-white placeholder:text-slate-600 outline-none" 
                          placeholder="John Doe" 
                          type="text" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Email Address</label>
                        <input 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-white placeholder:text-slate-600 outline-none" 
                          placeholder="john@company.com" 
                          type="email" 
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Subject</label>
                      <input 
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-white placeholder:text-slate-600 outline-none" 
                        placeholder="Inquiry about Internship" 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Message</label>
                      <textarea 
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-white placeholder:text-slate-600 outline-none resize-none" 
                        placeholder="How can I help you?" 
                        rows={5}
                      />
                    </div>
                    <motion.button 
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-bold text-white">Message Sent!</h3>
                      <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="https://damp-tomato-t29wpfuqyy.edgeone.app/omkarsnaik.jpeg" 
                alt="Omkar Naik Logo" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          <div className="flex flex-col items-start">
            <span className="text-lg font-display font-bold tracking-tight text-white leading-none">
              OMKAR<span className="text-primary">NAIK</span>
            </span>
            <span className="text-[8px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-1">© 2026</span>
          </div>
          </div>
          
          <p className="text-sm text-slate-500 font-light">© 2026 MY  Portfolio. Crafted with precision.</p>
          
          <div className="flex gap-10 text-sm font-medium text-slate-400">
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/omkar-naik-31651735b/' },
              { name: 'GitHub', href: 'https://github.com/omkar895' },
              { name: 'Instagram', href: 'https://www.instagram.com/0mkar.exe_/' }
            ].map(social => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
