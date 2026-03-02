/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  Smartphone, 
  Code2, 
  Database, 
  Cloud, 
  Palette, 
  Cpu,
  ChevronRight,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Layers,
  Bell,
  CreditCard,
  HardDrive,
  Zap,
  Puzzle,
  Bug,
  Users,
  Lightbulb,
  Globe,
  Layout
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  link: string;
  type: 'live' | 'prototype';
  tags: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institute: string;
  result: string;
  year: string;
  board: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Colizen App",
    description: "A comprehensive mobile solution for community engagement and management.",
    link: "https://play.google.com/store/apps/details?id=com.colizen.josi",
    type: 'live',
    tags: ['Flutter', 'Dart', 'Firebase']
  },
  {
    title: "SandLink Marketplace",
    description: "A robust marketplace application connecting buyers and sellers in the construction industry.",
    link: "https://play.google.com/store/apps/details?id=com.sandlinkmarketplace.sandlink",
    type: 'live',
    tags: ['Flutter', 'REST API', 'GetX']
  },
  {
    title: "Riyaada",
    description: "Innovative platform designed for business growth and networking.",
    link: "https://play.google.com/store/apps/details?id=com.riyaada.app",
    type: 'live',
    tags: ['Flutter', 'Provider', 'Clean Architecture']
  },
  {
    title: "AMC Connect",
    description: "Internal communication and management tool for organizational efficiency.",
    link: "https://play.google.com/store/apps/details?id=com.amc.connect",
    type: 'live',
    tags: ['Flutter', 'BLoC', 'Push Notifications']
  },
  {
    title: "Prototype Collection",
    description: "A collection of innovative app prototypes demonstrating advanced Flutter features.",
    link: "https://drive.google.com/drive/folders/1tZzv3GWeL6j5YUPt2SV8ciL0ZTQ7q_uH?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    type: 'prototype',
    tags: ['Flutter', 'UI/UX', 'Experimental']
  }
];

const EXPERIENCES: Experience[] = [
  {
    company: "SM TECHNOLOGY",
    role: "Flutter Developer",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Developed multiple high-performance mobile applications using Flutter.",
      "Successfully published and maintained apps on Google Play Store and Apple App Store.",
      "Integrated complex REST APIs and Firebase services for real-time functionality.",
      "Collaborated directly with clients to translate business requirements into production-ready apps.",
      "Optimized app performance and UI/UX based on user feedback and store analytics.",
      "Implemented scalable architecture and clean code practices to ensure maintainability.",
      "Designed responsive and adaptive UI for both Android and iOS platforms.",
      "Integrated push notifications, payment gateways, and authentication systems.",
      "Worked with state management solutions such as Provider and GetX for efficient app performance.",
      "Debugged and resolved production issues to improve app stability and user experience.",
      "Participated in app testing, deployment, and post-release maintenance cycles.",
      "Used Git and GitHub for version control and team collaboration.",
      "Coordinated with backend developers and designers to deliver seamless user experiences.",
      "Continuously improved application performance through code optimization and refactoring."
    ]
  },
  {
    company: "Radisson Digital Technologies Ltd",
    role: "Flutter Developer Intern",
    period: "6 Months",
    responsibilities: [
      "Successfully completed 3 mobile application projects using Flutter from scratch.",
      "Gained deep understanding of state management and API integration patterns.",
      "Participated in code reviews and agile development workflows."
    ]
  }
];

const EDUCATION: Education[] = [
  {
    degree: "B.Sc in CSE",
    institute: "Sonargaon University (SU)",
    result: "3.13",
    year: "2023",
    board: "Dhaka"
  },
  {
    degree: "HSC in Science",
    institute: "Dighapatia M.K Honours Collage, Natore",
    result: "3.50",
    year: "2018",
    board: "Rajshahi"
  }
];

const SKILLS = [
  { name: "Flutter & Dart", icon: <Smartphone className="w-6 h-6" />, category: "Core" },
  { name: "REST API Integration", icon: <Layers className="w-6 h-6" />, category: "Backend" },
  { name: "Firebase (FCM, Auth, DB)", icon: <Cloud className="w-6 h-6" />, category: "Backend" },
  { name: "State Management (BLoC, GetX, Provider)", icon: <Cpu className="w-6 h-6" />, category: "Architecture" },
  { name: "UI/UX Design & Responsive Layouts", icon: <Palette className="w-6 h-6" />, category: "Design" },
  { name: "App Publishing (Play Store & App Store)", icon: <ExternalLink className="w-6 h-6" />, category: "DevOps" },
  { name: "Java, C#, C++", icon: <Code2 className="w-6 h-6" />, category: "Languages" },
  { name: "Git & Version Control (GitHub, GitLab)", icon: <Github className="w-6 h-6" />, category: "Tools" },
  { name: "JSON & API Data Handling", icon: <Database className="w-6 h-6" />, category: "Backend" },
  { name: "MVC / Clean Architecture", icon: <Layout className="w-6 h-6" />, category: "Architecture" },
  { name: "Push Notification Integration", icon: <Bell className="w-6 h-6" />, category: "Features" },
  { name: "Payment Gateway Integration", icon: <CreditCard className="w-6 h-6" />, category: "Features" },
  { name: "Local Database (SQLite, Hive)", icon: <HardDrive className="w-6 h-6" />, category: "Storage" },
  { name: "Debugging & Performance", icon: <Zap className="w-6 h-6" />, category: "Performance" },
  { name: "Third-party SDK Integration", icon: <Puzzle className="w-6 h-6" />, category: "Integration" },
  { name: "App Testing & Bug Fixing", icon: <Bug className="w-6 h-6" />, category: "Quality" },
  { name: "Agile Development Workflow", icon: <Users className="w-6 h-6" />, category: "Process" },
  { name: "Problem Solving & Analytical", icon: <Lightbulb className="w-6 h-6" />, category: "Soft Skills" },
  { name: "Cross-platform Development", icon: <Globe className="w-6 h-6" />, category: "Core" },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          SHAKIB<span className="text-emerald-500">.</span>HOSSAIN
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id ? 'text-emerald-400' : 'text-zinc-400 hover:text-emerald-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-full text-sm transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.id ? 'text-emerald-400' : 'text-zinc-400'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Seamless <br />
            <span className="text-gradient">Mobile Experiences</span>
          </h1>
          
          <p className="text-lg text-zinc-400 mb-8 max-w-lg">
            Hi, I'm Shakib Hossain. A passionate Flutter Developer dedicated to crafting high-performance, 
            scalable, and user-centric mobile applications for Android and iOS.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl transition-all flex items-center gap-2"
            >
              View My Work <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex items-center space-x-4 ml-2">
              <a href="https://github.com/shakibhossain72" target="_blank" className="p-3 glass rounded-xl hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shakib-hossain-39a672230/" target="_blank" className="p-3 glass rounded-xl hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-3xl rotate-6 opacity-20 blur-xl animate-pulse" />
            <div className="absolute inset-0 bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden">
              <img 
                src="https://drive.google.com/uc?export=view&id=1h758CyHvTmRFNXj0XTVlA1qb-TTmNEGb" 
                alt="Shakib Hossain" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-2xl"
            >
              <Smartphone className="w-8 h-8 text-emerald-400" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-2xl"
            >
              <Code2 className="w-8 h-8 text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl text-zinc-300 leading-relaxed">
              I am a Flutter Developer with a strong track record of developing and publishing mobile applications 
              on the Google Play Store and Apple App Store. My expertise lies in Flutter, Dart, REST API integration, 
              and modern state management techniques.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Focused on building scalable, user-friendly apps with clean UI/UX, I am passionate about delivering 
              high-quality mobile solutions that solve real-world problems. With a background in Computer Science 
              and Engineering, I bring a solid foundation in software development principles to every project.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-emerald-400 font-bold mb-1">Location</h4>
                <p className="text-zinc-300">Mohakhali, Dhaka-1212</p>
              </div>
              <div>
                <h4 className="text-emerald-400 font-bold mb-1">Education</h4>
                <p className="text-zinc-300">B.Sc in CSE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit built for modern mobile development, from core architecture to polished UI.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:border-emerald-500/50 transition-all group"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-8 h-8 text-emerald-500" />
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-emerald-500/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              <div className="glass p-8 rounded-3xl">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400">{exp.role}</h3>
                    <p className="text-lg text-zinc-300 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-400">A selection of live applications and prototypes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden flex flex-col group"
            >
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/40 backdrop-blur-sm">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="p-4 bg-emerald-500 text-zinc-950 rounded-full hover:scale-110 transition-transform"
                  >
                    {project.type === 'live' ? <ExternalLink /> : <Download />}
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.type === 'live' ? 'bg-emerald-500 text-zinc-950' : 'bg-blue-500 text-white'}`}>
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-2 py-1 rounded bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className="section-padding bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-8 h-8 text-emerald-500" />
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-emerald-400">{edu.degree}</h3>
                <span className="text-zinc-500 font-mono">{edu.year}</span>
              </div>
              <p className="text-lg text-zinc-200 mb-2">{edu.institute}</p>
              <div className="flex gap-4 text-sm text-zinc-400">
                <span>Result: <span className="text-emerald-400 font-bold">{edu.result}</span></span>
                <span>Board: {edu.board}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-zinc-400 mb-12 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 glass rounded-2xl text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Email Me</h4>
                  <p className="text-zinc-400">shahriarshakibsk@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 glass rounded-2xl text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Call Me</h4>
                  <p className="text-zinc-400">01781559169</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 glass rounded-2xl text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-300">Location</h4>
                  <p className="text-zinc-400">Mohakhali, Dhaka-1212</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Subject</label>
                <input type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">
          SHAKIB<span className="text-emerald-500">.</span>HOSSAIN
        </div>
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Shakib Hossain. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/shakibhossain72" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/shakib-hossain-39a672230/" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:shahriarshakibsk@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
