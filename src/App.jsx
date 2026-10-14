import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import portraitUrl from "./sources/sakshiraut.jpeg";
import resumeUrl from "./sources/SAKSHI _RAUT_RESUME_.pdf";
import technobeatsCertificateUrl from "./sources/technobeats.jpeg";
import nextgenCertificateUrl from "./sources/nextgenaiml.jpeg";
import mysqlCertificateUrl from "./sources/mysql.jpeg";
import javascriptPhpCertificateUrl from "./sources/javascriptphp.jpeg";
import sqlCertificateUrl from "./sources/sql_advanced certificate.pdf";
import discoverAnalyticsCertificateUrl from "./sources/ms_discover_data_analytics.pdf";
import dataAnalyticsCertificateUrl from "./sources/ms_data_analytics.pdf";
import internshipCertificateUrl from "./sources/internship certificate.pdf";
import genAiCertificateUrl from "./sources/genai_completion_certificate.pdf";
import codingCompetitionCertificateUrl from "./sources/coding_compitition.pdf";
import microsoftAchievementsUrl from "./sources/Achievements - sakshinitinraut-3398 _ Microsoft Learn.pdf";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Sparkles, Database, ChartNoAxesCombined, Code2, Telescope,
  ExternalLink, Download, BookOpen, Layers3, BrainCircuit, FileText, Award
} from "lucide-react";

const profile = {
  name: "Sakshi Raut",
  headline: "Curious mind. Analytical thinking. Thoughtful building.",
  email: "sakshiraut612@.com",
  location: "Amravati, Maharashtra, India",
  resume: resumeUrl,
  linkedin: "https://www.linkedin.com/in/sakshi-raut-bbab4b251/",
  github: "https://github.com/SakshiRaut004",
  photo: portraitUrl,
};

const credentials = [
  { title: "Build with AI: Machine Learning in Practice", issuer: "NxtGen Intelligence AI Academy · 25 Jun 2026", type: "AI / MACHINE LEARNING", href: nextgenCertificateUrl, preview: nextgenCertificateUrl },
  { title: "TechnoBeats 2K25", issuer: "Certificate of participation · Amravati", type: "EVENT PARTICIPATION", href: technobeatsCertificateUrl, preview: technobeatsCertificateUrl },
  { title: "Learn MySQL – For Beginners", issuer: "Udemy · YouAccel Training · 27 Jan 2026", type: "DATABASES", href: mysqlCertificateUrl, preview: mysqlCertificateUrl },
  { title: "CSS, JavaScript and PHP for Beginners", issuer: "Udemy · Proper Dot Institute · 14 Apr 2024", type: "WEB DEVELOPMENT", href: javascriptPhpCertificateUrl, preview: javascriptPhpCertificateUrl },
  { title: "Advanced SQL Certificate", issuer: "Certificate document", type: "DATABASES", href: sqlCertificateUrl },
  { title: "Discover Data Analytics", issuer: "Microsoft · Certificate document", type: "DATA ANALYTICS", href: discoverAnalyticsCertificateUrl },
  { title: "Data Analytics", issuer: "Microsoft · Certificate document", type: "DATA ANALYTICS", href: dataAnalyticsCertificateUrl },
  { title: "Web Development Internship", issuer: "Educron Pvt. Ltd. · Certificate document", type: "INTERNSHIP", href: internshipCertificateUrl },
  { title: "Generative AI Completion Certificate", issuer: "Certificate document", type: "GENERATIVE AI", href: genAiCertificateUrl },
  { title: "Coding Competition", issuer: "Certificate document", type: "ACHIEVEMENT", href: codingCompetitionCertificateUrl },
  { title: "Microsoft Learn Achievements", issuer: "Microsoft Learn · Achievement record", type: "LEARNING MILESTONE", href: microsoftAchievementsUrl },
];

const skills = [
  { title: "Data & Analytics", icon: ChartNoAxesCombined, items: ["SQL", "Power BI", "DAX", "Power Query", "Excel", "Pandas", "NumPy", "Data storytelling"] },
  { title: "Development", icon: Code2, items: ["Python", "JavaScript", "React", "FastAPI", "REST APIs", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Data & Platforms", icon: Database, items: ["PostgreSQL", "MongoDB (basics)", "NeonDB", "Git", "GitHub", "Vercel", "Render"] },
  { title: "Exploring next", icon: BrainCircuit, items: ["Statistics", "Machine Learning", "Applied AI", "Cloud fundamentals"] },
];

const projects = [
  {
    number: "01", category: "DATA ANALYTICS · BI",
    title: "Power BI Analytics Dashboard for FIFA WORLD CUP 2022 Analysis", status: "FIFA WORLD CUP 2022 ANALYSIS ",
    description: "A dashboard-focused analytics project intended to turn raw information into clear KPIs, useful comparisons, and a story a decision-maker can follow.",
    contribution: "The objective is to identify the key factors that contribute to team success through interactive dashboards and data-driven storytelling",
    stack: ["Power BI", "DAX", "Power Query", "Data modelling"],
    href: "#contact",
    cta: "Complete case study",
    visual: "chart"
  },
  {
    number: "02", category: "FULL-STACK · COLLABORATION",
    title: "EduNexus", status: "PROJECT",
    description: "An AI-powered, LinkedIn-inspired collaboration platform designed to help faculty connect, share knowledge, and discover opportunities.",
    contribution: "Built with the MERN stack: React, Express, Node.js, and MongoDB. Add your repository, screenshots, and specific contribution details.",
    stack: ["React", "Express", "Node.js", "MongoDB"],
    href: "https://github.com/SakshiRaut004/EduNexus",
    cta: "Explore repository",
    visual: "network"
  },
  {
    number: "03", category: "WEB DEVELOPMENT · INTERNSHIP",
    title: "Student Internship Dashboard", status: "INTERNSHIP",
    description: "A student internship dashboard developed during a web development internship, with login and domain-view functionality.",
    contribution: "Educron Pvt. Ltd. · Aug–Nov 2024. HTML, CSS, JavaScript, PHP, and MySQL.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    href: "#internshipCertificateUrl",
    cta: "explore",
    visual: "dashboard"
  },
];

const experience = [
  { date: "AUG — NOV 2024", role: "Web Development Intern", org: "Educron Pvt. Ltd.", detail: "Worked on a student internship dashboard featuring login and domain-view functionality." },
  { date: "2025 — PRESENT", role: "Master of Computer Applications", org: "P. R. Pote Patil College of Engineering & Management", detail: "Building on a computer science foundation while developing practical skills across analytics, software development, and cloud technologies." },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" />{children}</div>;
}

function ProjectVisual({ type }) {
  if (type === "chart") return (
    <div className="visual visual-chart" aria-hidden="true">
      <div className="chart-top"><span>INSIGHT / 01</span><span>↗</span></div>
      <div className="chart-kpis"><div><small>TOTAL</small><b>—</b></div><div><small>CHANGE</small><b>—%</b></div></div>
      <div className="bar-chart">{[35, 52, 43, 76, 59, 88, 68, 96, 72, 82, 58, 90].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
      <div className="chart-foot"><span>FIFA WORLD CUP DATA</span><span>POWER BI</span></div>
    </div>
  );
  if (type === "network") return (
    <div className="visual visual-network" aria-hidden="true">
      <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
      <div className="network-core"><Layers3 size={28}/></div>
      <span className="node node-a">IDEAS</span><span className="node node-b">PEOPLE</span><span className="node node-c">RESEARCH</span><span className="node node-d">SHARE</span>
      <span className="visual-index">EDUNEXUS / 01</span>
    </div>
  );
  return (
    <div className="visual visual-dashboard" aria-hidden="true">
      <div className="dash-side"><span>◈</span><i/><i/><i/><i/></div>
      <div className="dash-main"><div className="dash-heading"><b>Overview</b><span>•••</span></div>
        <div className="dash-stat-row"><i/><i/><i/></div>
        <div className="dash-graph"><div className="graph-grid"/><svg viewBox="0 0 320 100" preserveAspectRatio="none"><path d="M0 80 C30 78 38 40 65 55 S100 70 130 35 S170 55 195 26 S235 55 260 15 S290 40 320 12" fill="none" stroke="currentColor" strokeWidth="2.5"/></svg></div>
        <div className="dash-bottom"><i/><i/><i/></div>
      </div>
      <span className="visual-index">WEB / INTERNSHIP</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filteredProjects = projects.filter(p => activeFilter === "ALL" || p.category.includes(activeFilter));
  const nav = [["Work", "#work"], ["About", "#about"], ["Journey", "#journey"], ["Credentials", "#credentials"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <div className="starfield" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Sakshi Raut home"><span className="wordmark-icon">s.</span><span>SAKSHI RAUT<small>PORTFOLIO / 2026</small></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
        <a className="top-cta" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}}><span className="live-dot"/> OPEN TO LEARNING & OPPORTUNITIES <span className="eyebrow-rule"/></motion.div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:.7, delay:.1}}>I turn <em>curiosity</em><br/>into things that<br/><span className="outlined-word">make sense.</span></motion.h1>
            <motion.p className="hero-sub" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7, delay:.3}}>I'm Sakshi — a computer applications postgraduate exploring the space where <strong>data, software, and human problems</strong> meet.</motion.p>
            <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7, delay:.4}}>
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-quiet" href={profile.resume} target="_blank" rel="noreferrer"><Download size={16}/> Resume PDF</a>
            </motion.div>
            <motion.div className="hero-meta" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7, delay:.5}}>
              <span><i className="meta-dot"/> {profile.location}</span><span className="meta-sep">/</span><span>DATA · DEVELOPMENT · AI</span>
            </motion.div>
          </div>
          <motion.div className="hero-art" initial={{opacity:0, scale:.94}} animate={{opacity:1, scale:1}} transition={{duration:1, delay:.15}}>
            <div className="art-caption caption-top">FIELD NOTES <span>NO. 001</span></div>
            <div className="planet planet-large"><div className="planet-shade"/><div className="planet-ring"/></div>
            <div className="planet planet-small"/>
            <div className="orbit-line orbit-one"/><div className="orbit-line orbit-two"/>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <div className="art-card"><span className="art-card-icon"><Telescope size={18}/></span><div><small>CURRENT DIRECTION</small><b>Analytics → Data Science → AI</b></div><ArrowUpRight size={16}/></div>
            <div className="art-caption caption-bottom"><span>FOLLOW THE QUESTION</span><span>↗</span></div>
            <div className="portrait-frame">
              {profile.photo ? <img src={profile.photo} alt="Portrait of Sakshi Raut" /> : <div className="portrait-placeholder">
                <div className="portrait-monogram">SR</div>
                <span>YOUR PORTRAIT</span>
                <small>ADD PHOTO IN src/App.jsx</small>
              </div>}
              <span className="portrait-corner portrait-corner-tl" />
              <span className="portrait-corner portrait-corner-br" />
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><div><ArrowDownRight size={16}/></div></a>
        </section>

        <section className="intro-strip section-wrap" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="intro-grid">
            <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{once:true, amount:.3}}>A builder's mindset.<br/><em>An analyst's curiosity.</em></motion.h2>
            <motion.div className="intro-text" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true, amount:.3}}>
              <p>My foundation is in Computer Science, with Statistics and Electronics in my undergraduate studies. I'm currently pursuing an MCA and steadily building the skills to investigate problems, work with data, and create useful digital experiences.</p>
              <p>I enjoy the full journey: asking a better question, preparing the information, building the solution, and communicating what matters. My long-term direction is data analytics, data science, and applied AI — grounded in strong fundamentals and real projects.</p>
              <a className="text-link" href="#journey">More about my journey <ArrowRight size={16}/></a>
            </motion.div>
          </div>
          <div className="principles">
            {[["01","Stay curious","Ask why before choosing a tool."],["02","Build with intent","Make projects solve a real problem."],["03","Explain clearly","Turn technical work into useful insight."]].map(([n,t,d]) => <div className="principle" key={n}><span>{n}</span><div><b>{t}</b><p>{d}</p></div><ArrowUpRight size={15}/></div>)}
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionLabel number="02">SELECTED WORK</SectionLabel>
          <div className="section-heading"><div><h2>Projects in <em>progress.</em></h2><p>A growing collection of things I've built, explored, and learned from.</p></div><span className="section-count">03 / CASE FILES</span></div>
          <div className="filter-row">{["ALL","DATA ANALYTICS","FULL-STACK","WEB DEVELOPMENT"].map(f => <button key={f} className={activeFilter === f ? "filter active" : "filter"} onClick={() => setActiveFilter(f)}>{f}<span>{f==="ALL" ? "03" : f==="DATA ANALYTICS" ? "01" : f==="FULL-STACK" ? "01" : "01"}</span></button>)}</div>
          <div className="project-list">
            {filteredProjects.map((p, i) => <motion.article className="project-card" key={p.number} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true, amount:.12}} transition={{delay:i*.06}}>
              <div className="project-visual-wrap"><ProjectVisual type={p.visual}/></div>
              <div className="project-info">
                <div className="project-topline"><span>{p.number} / {p.category}</span><span className="status-pill">{p.status}</span></div>
                <h3>{p.title}</h3><p>{p.description}</p><p className="project-contribution">{p.contribution}</p>
                <div className="tag-row">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <a className="text-link project-link" href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{p.cta} <ArrowUpRight size={16}/></a>
              </div>
            </motion.article>)}
          </div>
          <p className="small-note"><Sparkles size={14}/> Exploring and Learning Continously.</p>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionLabel number="03">TOOLS IN MY KIT</SectionLabel>
          <div className="section-heading"><div><h2>Learned, used, <em>growing.</em></h2><p>A practical toolkit that will keep evolving as I build.</p></div><span className="section-count">SKILL MAP / 001</span></div>
          <div className="skills-grid">{skills.map((s,i) => <motion.div className="skill-card" key={s.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.08}}><div className="skill-icon"><s.icon size={19}/></div><div className="skill-number">0{i+1}</div><h3>{s.title}</h3><div className="skill-tags">{s.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div>
          <div className="skill-disclaimer">Skill levels are intentionally not self-rated here. The projects and case studies above demonstrate how each tool is used.</div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <SectionLabel number="04">THE THROUGH-LINE</SectionLabel>
          <div className="journey-grid">
            <div className="journey-intro"><h2>Every chapter<br/>adds <em>context.</em></h2><p>Education, hands-on work, and deliberate practice are shaping how I approach technology.</p><div className="book-stamp"><BookOpen size={20}/><span>NOTES FROM<br/>THE JOURNEY</span></div></div>
            <div className="timeline">{experience.map((e,i) => <motion.div className="timeline-item" key={e.role} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="timeline-marker"><span/></div><div className="timeline-content"><span className="timeline-date">{e.date}</span><h3>{e.role}</h3><h4>{e.org}</h4><p>{e.detail}</p></div></motion.div>)}
              <div className="timeline-item future-item"><div className="timeline-marker"><span/></div><div className="timeline-content"><span className="timeline-date">NEXT CHAPTER</span><h3>Data science & applied AI</h3><h4>Learning through projects</h4><p>Deepening statistics, analytical reasoning, and machine-learning fundamentals.</p></div></div>
            </div>
          </div>
          <div className="education-band"><div><span className="timeline-date">UNDERGRADUATE</span><h3>B.Sc. Computer Science</h3><p>Computer Science · Statistics · Electronics</p></div><div className="education-divider"/><div><span className="timeline-date">POSTGRADUATE</span><h3>Master of Computer Applications</h3><p>P. R. Pote Patil College of Engineering & Management, Amravati</p></div></div>
        </section>

        <section className="credentials-section section-wrap" id="credentials">
          <SectionLabel number="05">PROOF OF LEARNING</SectionLabel>
          <div className="section-heading"><div><h2>Credentials & <em>milestones.</em></h2><p>Certificates and learning records. Select any item to open the original document.</p></div><span className="section-count">{String(credentials.length).padStart(2, "0")} / RECORDS</span></div>
          <div className="credential-grid">
            {credentials.map((credential, i) => <motion.a className="credential-card" key={credential.title} href={credential.href} target="_blank" rel="noreferrer" aria-label={`Open ${credential.title}`} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true, amount:.12}} transition={{delay:(i % 3) * .06}}>
              <div className="credential-preview">{credential.preview ? <img src={credential.preview} alt={`${credential.title} certificate`} loading="lazy"/> : <div className="credential-document"><Award size={32}/><span>VERIFIED DOCUMENT</span><FileText size={17}/></div>}</div>
              <div className="credential-details"><span className="timeline-date">{credential.type}</span><h3>{credential.title}</h3><p>{credential.issuer}</p><span className="credential-link">View credential <ExternalLink size={13}/></span></div>
            </motion.a>)}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-orbit" aria-hidden="true"><div/><div/><div/></div>
          <SectionLabel number="06">OPEN A CONVERSATION</SectionLabel>
          <div className="contact-content"><span className="eyebrow"><span className="live-dot"/> AVAILABLE FOR THE RIGHT OPPORTUNITY</span><h2>Have a problem<br/>worth <em>exploring?</em></h2><p>I'm especially interested in entry-level data analytics opportunities, where I can apply SQL, Power BI, Python, and analytical thinking while continuing to build toward data science and applied AI.</p><a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=Let's%20connect`}>Say hello <ArrowUpRight size={17}/></a><span className="email-hint">Replace the placeholder email in src/App.jsx before publishing.</span></div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home"><span className="wordmark-icon">s.</span><span>SAKSHI RAUT<small>MADE WITH CURIOSITY</small></span></a>
        <span className="footer-note">A Lifetime Learner</span>
        <div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div>
      </footer>
    </div>
  );
}
