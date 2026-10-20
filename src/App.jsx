import { useState } from 'react';
import {
  BrainCircuit,
  Database,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  CodeXml as Github,
  ContactRound as Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Server,
  Copy,
  Check,
  Send,
  Eye,
  X,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copyToast, setCopyToast] = useState(false);
  const [contactForm, setContactForm] = useState({ 
    name: '', 
    email: '', 
    company: '',
    roleType: 'Technical Lead (GenAI / Fullstack)',
    message: '' 
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Resume Profile Data
  const profile = {
    name: "KVS K VIVEK",
    role: "Technical Lead | GenAI & Agentic AI Engineer",
    subHeadline: "Python • FastAPI • LangGraph • Hybrid RAG • Multi-Agent Systems • React / TypeScript",
    location: "Bengaluru, India",
    email: "kasturi.vivek994@gmail.com",
    phone: "+91 8971067879",
    github: "https://github.com/vivekkasturi",
    linkedin: "https://linkedin.com/in/kasturi-venkata-siva-krishna-vivek",
    experienceYears: "10+",
    status: "Actively Exploring GenAI / Staff / Tech Lead Opportunities",
    summary: `Technical Lead with 10+ years of software engineering experience across enterprise applications, high-performance React/TypeScript systems, and engineering leadership, backed by hands-on production experience building GenAI and Agentic AI workflows. Developed enterprise AI workflows using LangGraph, tool calling, supervisor-based orchestration, and human-in-the-loop patterns, while building a production-oriented Enterprise Knowledge Assistant using Python, FastAPI, hybrid RAG, pgvector, reranking, and evaluation.`
  };

  // Technical Competency Matrix
  const skillCategories = [
    {
      title: "GenAI & Agentic AI",
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/30 bg-cyan-950/20",
      skills: [
        "LangGraph", "LangChain", "Agentic Workflows", "Supervisor-Agent Pattern",
        "Tool/Function Calling", "Human-in-the-Loop (HITL)", "Prompt Engineering",
        "Multi-Agent Orchestration", "Circuit-Breaker Patterns"
      ]
    },
    {
      title: "RAG & Retrieval Architecture",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-500/30 bg-indigo-950/20",
      skills: [
        "Hybrid Retrieval", "pgvector", "PostgreSQL Full-Text Search",
        "Reciprocal Rank Fusion (RRF)", "CrossEncoder Reranking",
        "Semantic Vector Search", "Metadata Filtering", "Context/Token Management", "RAG Evaluation (Precision@K, Recall@K)"
      ]
    },
    {
      title: "AI Backend & Data Systems",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/30 bg-emerald-950/20",
      skills: [
        "Python", "FastAPI", "Groq", "Supabase",
        "PostgreSQL", "REST APIs", "LLM Streaming", "Caching & Rate Limiting"
      ]
    },
    {
      title: "Frontend & Streaming UI",
      icon: <Layers className="w-5 h-5 text-violet-400" />,
      color: "border-violet-500/30 bg-violet-950/20",
      skills: [
        "React", "TypeScript", "Next.js", "Redux Toolkit", "Streaming UI",
        "Progressive State Handling", "Design Systems"
      ]
    },
    {
      title: "Infra & Cloud Engineering",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/30 bg-amber-950/20",
      skills: [
        "AWS (EC2, S3, IAM, CloudWatch)", "CI/CD", "Git/GitHub",
        "Reliability Engineering", "LLM-as-Judge Benchmarking"
      ]
    }
  ];

  // Specific 3 Core Projects (GenAI Project, EKA Project, Autonomous Multi-Agent Engine)
  const projects = [
    {
      id: "ems-assistant",
      category: "genai",
      categoryLabel: "GenAI Project",
      title: "Agentic AI Assistant chatbot",
      subtitle: "Enterprise Agentic Orchestration & Tool Calling Platform",
      client: "Capgemini / Sony Enterprise Integration",
      tagline: "Supervisor-agent enterprise workflow routing complex requests to domain tools with Human-in-the-Loop checkpoints.",
      tags: ["LangGraph", "LangChain", "LLM APIs", "Tool Calling", "React", "TypeScript", "HITL", "Enterprise APIs"],
      stats: [
        { label: "Orchestration", val: "LangGraph Supervisor" },
        { label: "Reliability", val: "Circuit Breakers & Retries" },
        { label: "Safety", val: "Human-In-The-Loop Checkpoints" },
      ],
      description: "Designed an enterprise agentic workflow across authentication, data validation, supervisor/planner orchestration, and domain-specific agents for routing user requests to appropriate applications and tools. Translated non-deterministic workflows into progressive, predictable React/TypeScript user experiences.",
      architectureHighlights: [
        "Agentic Orchestration: Designed enterprise workflow across auth, data validation, and supervisor/planner orchestration.",
        "Tool & API Integration: Integrated domain agents with enterprise APIs supporting multi-step execution with controlled failure recovery.",
        "Safety & Human-in-the-Loop: Applied validation checkpoints, HITL verification, circuit-breakers, and controlled escalation for sensitive actions.",
        "Production AI Delivery: Built progressive React/TypeScript streaming interfaces with error boundaries and incremental response states."
      ],
      techStack: ["LangGraph", "LangChain", "LLM APIs", "Tool Calling", "React", "TypeScript", "Enterprise APIs", "Python"]
    },
    {
      id: "eka-rag",
      category: "eka",
      categoryLabel: "EKA Project",
      title: "Enterprise Knowledge Assistant (EKA)",
      subtitle: "Production Hybrid RAG with RRF & CrossEncoder Reranking",
      client: "Production-Oriented Knowledge Assistant",
      tagline: "End-to-end Hybrid RAG combining dense semantic vector search with BM25 full-text retrieval, RRF, and CrossEncoder reranking.",
      tags: ["Python", "FastAPI", "Hybrid RAG", "Groq", "Supabase", "pgvector", "PostgreSQL FTS", "CrossEncoder"],
      stats: [
        { label: "Pipeline", val: "Hybrid (pgvector + FTS)" },
        { label: "Reranker", val: "CrossEncoder + RRF" },
        { label: "Evaluation", val: "Precision@K & LLM Judge" },
      ],
      description: "Engineered an end-to-end RAG pipeline merging semantic vector search and PostgreSQL full-text retrieval using Reciprocal Rank Fusion (RRF) and CrossEncoder reranking. Enforces metadata-aware retrieval, strict token budgeting, and zero-hallucination fallback logic.",
      architectureHighlights: [
        "Hybrid RAG & Reranking: Combined semantic vector search and PostgreSQL FTS using RRF and CrossEncoder for high-precision context.",
        "Grounding & Context Engineering: Metadata filtering, token-budgeted context windows, and fallback responses to prevent unsupported answers.",
        "RAG Evaluation: Benchmarked with Precision@K, Recall@K, Hit Rate, and LLM-as-Judge evaluation for faithfulness and relevancy.",
        "Production Reliability & Streaming: Embedding caching, timeouts, circuit breakers, and end-to-end Groq async streaming via FastAPI."
      ],
      techStack: ["Python", "FastAPI", "LangChain", "Groq", "Supabase", "pgvector", "PostgreSQL FTS", "CrossEncoder", "React"]
    },
    {
      id: "autonomous-multiagent",
      category: "multiagent",
      categoryLabel: "Autonomous Multi Agent Workflow Engine",
      title: "Autonomous Multi-Agent Workflow Engine",
      subtitle: "Multi-Node LangGraph DAG & Dynamic Tool Execution",
      client: "AI Chat App / Agentic AI Engineering",
      tagline: "Autonomous multi-step LLM → Tool → LLM flow with Router, Planner, Research, and Writer agent nodes.",
      tags: ["LangGraph", "LangChain", "TypeScript", "Groq", "Supabase", "Tool Calling", "Multi-Agent Workflows"],
      stats: [
        { label: "Graph Nodes", val: "Router → Planner → Research → Writer" },
        { label: "Execution", val: "Autonomous Function Calling" },
        { label: "Memory", val: "Context Window Trimming" }
      ],
      description: "Implemented multi-node workflows with structured state management and conditional routing. Features progressive agent evolution from direct function calling to autonomous multi-step execution with separate planner, research, and writer responsibilities.",
      architectureHighlights: [
        "Agent Evolution: Progressed from basic tool invocation to autonomous multi-step LLM → Tool → LLM → Final Answer execution.",
        "LangGraph Orchestration: Multi-node workflow (Router → Planner → Research → Writer → Final) with conditional routing.",
        "Separation of Concerns: Distinct planner, researcher, and writer agent roles for complex query resolution.",
        "Conversational Memory: Session-based conversational memory with smart message trimming for long-context stability."
      ],
      techStack: ["LangGraph", "LangChain", "TypeScript", "Groq", "Supabase", "Tool Calling", "Multi-Agent"]
    }
  ];

  // Professional Experience (Cleaned of specific client references for TCS & Mindtree)
  const experiences = [
    {
      period: "09/2023 - Present",
      role: "Technical Lead / Frontend Engineering Lead",
      company: "Capgemini (Client: Sony)",
      location: "Bengaluru, India",
      summary: "Led enterprise product engineering and internal GenAI initiatives, taking AI-assisted solutions from POC through internal production integration.",
      achievements: [
        "Contributed to the Agentic AI Assistant chatbot, integrating AI orchestration with enterprise applications/APIs, validation workflows, failure handling, and React-based user experiences.",
        "Designed and delivered scalable React/TypeScript applications with reusable architecture, robust state management, and production-quality practices.",
        "Led a team of ~10 engineers through technical design, code reviews, task planning, mentoring, and delivery.",
        "Established engineering standards and reusable implementation patterns balancing feature velocity, performance, and production reliability."
      ]
    },
    {
      period: "06/2021 - 09/2023",
      role: "ReactJS Developer / Frontend Developer",
      company: "TCS",
      location: "Bengaluru, India",
      summary: "Built scalable responsive dashboards and complex application views using React.js, TypeScript, and Redux by applying reliability-first, security-conscious engineering discipline.",
      achievements: [
        "Engineered reusable TypeScript component libraries for secure internal transactions.",
        "Managed end-to-end application lifecycles and release coordination across QA, DevOps, and cross-functional stakeholders."
      ]
    },
    {
      period: "01/2019 - 03/2021",
      role: "ReactJS Developer / Frontend Developer",
      company: "Mindtree",
      location: "Bengaluru, India",
      summary: "Developed feature-rich dynamic React interfaces with client-side performance optimization, end-to-end feature delivery, and technical documentation.",
      achievements: [
        "Delivered performant and modular user interfaces with measurable improvements in initial load times.",
        "Partnered with product teams to design reusable frontend workflows and maintainable architectural patterns."
      ]
    },
    {
      period: "09/2015 - 11/2018",
      role: "Systems Engineer",
      company: "Mindtree",
      location: "Bengaluru, India",
      summary: "Handled enterprise network security and identity access management (IAM) within high-compliance global corporate environments.",
      achievements: [
        "Maintained identity controls, role-based security policies, and enterprise network integrity.",
        "Established deep discipline around production security and reliable access governance."
      ]
    }
  ];

  // Filtering for projects
  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  // Real Email Copy Handler
  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setCopyToast(true);
      setTimeout(() => setCopiedEmail(false), 2200);
      setTimeout(() => setCopyToast(false), 3000);
    }
  };

  // Real Working Inquiry Form Action
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Discussion Inquiry: ${contactForm.roleType} - ${contactForm.name}`);
    const body = encodeURIComponent(
      `Hi Vivek,\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nCompany / Organization: ${contactForm.company || 'Not Specified'}\nRole / Topic: ${contactForm.roleType}\n\nMessage:\n${contactForm.message}\n\nBest regards,\n${contactForm.name}`
    );
    
    // Direct trigger to user's real email client
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    
    setFormSubmitted(true);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-emerald-950 border border-emerald-500 text-emerald-200 px-4 py-2.5 rounded-xl shadow-2xl animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono">Email copied to clipboard ({profile.email})</span>
        </div>
      )}

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header Navigation (No Agentic Flow link) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#070B14]/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              KV
            </div>
            <div>
              <span className="font-bold text-base tracking-wide text-white">KVS K VIVEK</span>
              <span className="hidden sm:inline-block ml-2 text-xs text-cyan-400 font-mono bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                GenAI & Agentic AI
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">AI Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Matrix</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 text-xs bg-slate-900 border border-slate-700 hover:border-cyan-500/50 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
            </button>
            <button
              onClick={scrollToContact}
              className="text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white px-4 py-1.5 rounded-lg shadow-md shadow-cyan-500/20 transition-all flex items-center space-x-1 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        
        {/* HERO SECTION */}
        <section id="about" className="pt-6 sm:pt-10">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{profile.status}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">GenAI & Agentic AI</span> for Enterprise Scale
              </h1>
              
              <div className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
                <span className="text-white font-semibold">{profile.name}</span> — {profile.role}
              </div>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
                {profile.summary}
              </p>

              {/* Core Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "10+ Years Enterprise Engineering",
                  "LangGraph Multi-Agent Workflows",
                  "Supervisor-Agent HITL",
                  "Hybrid RAG (pgvector + FTS)",
                  "RRF & CrossEncoder Reranking",
                  "FastAPI & Groq Streaming",
                  "React / TypeScript Architecture"
                ].map((spec, i) => (
                  <span key={i} className="text-xs bg-slate-900/80 border border-slate-800 text-slate-300 px-3 py-1 rounded-md font-mono flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Explore AI Projects</span>
                </a>

                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Get in Touch</span>
                </button>

                <div className="flex items-center space-x-2 ml-0 sm:ml-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Engineering Snapshot (Updated as requested) */}
            <div className="lg:col-span-4 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Engineering Snapshot</span>
                <span className="text-xs bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-2.5 py-0.5 rounded-full font-mono font-medium">
                  Technical Lead
                </span>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-2xl font-bold text-white font-mono">10+ Yrs</div>
                  <div className="text-xs text-slate-400 mt-1">Enterprise Software Experience</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-2xl font-bold text-cyan-400 font-mono">10+</div>
                  <div className="text-xs text-slate-400 mt-1">Engineers Led & Mentored</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-2xl font-bold text-indigo-400 font-mono">Twice Awarded</div>
                  <div className="text-xs text-slate-400 mt-1">Best Team Award at Sony</div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800/60">
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono">{profile.email}</span>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-[10px] text-cyan-400 hover:underline font-mono cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-mono">{profile.phone}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="font-medium text-slate-300 mb-1">Education Credentials</div>
                <div>• MBA — Christ University, Bengaluru (2018–2020)</div>
                <div>• B.E. Electronics & Communication — SCSVMV (2011–2015)</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SHOWCASE (Updated to GenAI, EKA & Autonomous Multi-Agent only) */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Systems</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                GenAI & Agentic Projects
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Production-oriented GenAI implementations combining LangGraph supervisor workflows, Hybrid RAG with CrossEncoder reranking, and autonomous multi-agent graphs.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center bg-slate-900/90 border border-slate-800 p-1 rounded-xl text-xs font-medium self-start md:self-auto gap-1">
              {[
                { id: 'all', label: 'All 3 Projects' },
                { id: 'genai', label: 'Agentic AI Chatbot' },
                { id: 'eka', label: 'EKA Project' },
                { id: 'multiagent', label: 'Autonomous Multi Agent Engine' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-xs text-slate-400 font-medium">
                        {project.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Highlights Metric Pill Box */}
                  <div className="space-y-1.5 py-2">
                    {project.stats.map((st, i) => (
                      <div key={i} className="bg-slate-950/70 border border-slate-800/80 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-mono text-[11px]">{st.label}</span>
                        <span className="font-semibold text-slate-200">{st.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center space-x-1.5 transition-colors group/btn cursor-pointer"
                  >
                    <span>View Architecture Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL: DETAILED PROJECT ARCHITECTURE BREAKDOWN */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#0B101D] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3">
                  Key Technical Innovations & Architecture
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Complete Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium cursor-pointer"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CORE TECHNICAL STACK / MATRIX (Updated as requested) */}
        <section id="skills" className="space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Skills Matrix</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Competency & Technology Matrix
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Core technical capabilities across Agentic AI workflows, Hybrid RAG retrieval, backend services, and streaming user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl p-5 backdrop-blur-md transition-all hover:border-cyan-500/40 ${cat.color}`}
              >
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-800/70">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 text-slate-300 px-2.5 py-1 rounded-md font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER TIMELINE & RECOGNITION (Updated with TCS / Mindtree client references removed) */}
        <section id="experience" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Trajectory</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                10+ Years of Engineering & Leadership
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Demonstrated success architecting enterprise applications, leading engineering squads, and taking GenAI initiatives to production.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 bg-amber-950/30 border border-amber-800/40 px-3 py-1.5 rounded-lg">
              <Award className="w-4 h-4 shrink-0" />
              <span>Awarded Best Team Recognition Twice at Sony</span>
            </div>
          </div>

          <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070B14] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-300 flex items-center space-x-2">
                    <span className="text-cyan-400 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 text-xs">{exp.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {exp.summary}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Recognition Grid (TCS/SVB removed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-white font-bold">MBA (Master of Business Administration)</div>
                  <div className="text-xs text-slate-400">Christ University, Bengaluru • 2018 - 2020</div>
                </div>
                <div className="border-t border-slate-800/80 pt-2">
                  <div className="text-white font-bold">B.E. Electronics & Communication Engineering</div>
                  <div className="text-xs text-slate-400">SCSVMV University, Kanchipuram • 2011 - 2015</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Recognition & Impact</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="font-semibold text-white">Internal AI Platform Builder:</span> Contributed to the research, architecture, and delivery of internal GenAI initiatives at Sony, helping establish reusable implementation patterns for enterprise AI development.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="font-semibold text-white">Delivery Excellence:</span> Awarded Best Team Recognition twice for outstanding engineering contributions and high-quality deliveries in Sony.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REAL WORKING CONTACT & INQUIRY FORM */}
        <section id="contact" className="space-y-8 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-slate-900/90 via-slate-950 to-[#0B0F19] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Direct Fast Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Initiate Discussion</span>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Let's Discuss Your GenAI Roadmap
                </h2>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Available for <span className="text-white font-medium">Technical Lead, GenAI Engineer, and Staff Engineering</span> positions requiring agentic orchestration, hybrid RAG pipelines, and enterprise engineering reliability.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Email Address</div>
                      <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-white font-mono hover:text-cyan-300">
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Direct Phone</div>
                    <a href={`tel:${profile.phone}`} className="text-sm font-semibold text-white font-mono hover:text-cyan-300">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Right Column: Real Functional Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-1">
                Direct Message / Opportunity Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your note below. Submitting will directly open your default mail app addressed to <strong>{profile.email}</strong> with your text pre-formatted.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Role / Topic</label>
                    <select
                      value={contactForm.roleType}
                      onChange={(e) => setContactForm({ ...contactForm, roleType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option>Technical Lead (GenAI / Fullstack)</option>
                      <option>GenAI & Agentic AI Engineer</option>
                      <option>Staff / Principal Software Engineer</option>
                      <option>Engineering Leadership / Team Lead</option>
                      <option>Advisory / Consulting Discussion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Hi Vivek, we saw your work on LangGraph, Hybrid RAG with CrossEncoder reranking, and would like to discuss..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-slate-500">
                    Recipient: <span className="font-mono text-slate-400">{profile.email}</span>
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 flex items-center space-x-2 transition-all cursor-pointer"
                    >
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {formSubmitted && (
                  <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 flex items-center justify-between">
                    <span>Mail application opened! If it didn't open automatically, you can send directly to {profile.email}.</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="ml-2 font-mono underline text-white hover:text-cyan-300"
                    >
                      Copy Email
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER (Cleaned of 'Copy Address') */}
      <footer className="mt-24 border-t border-slate-800/80 bg-[#04070D] py-8 text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
              KV
            </div>
            <span className="text-slate-400">
              © {new Date().getFullYear()} {profile.name} • {profile.role}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <button 
              onClick={handleCopyEmail}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Email
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
