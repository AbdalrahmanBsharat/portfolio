import { motion } from 'framer-motion';
import {
  SiFlutter, SiFirebase, SiSpringboot, SiMysql,
  SiPostgresql, SiReact, SiDotnet,
  SiOpenai, SiGithub, SiPostman,
} from 'react-icons/si';
import { FiDatabase, FiTool, FiBookOpen, FiCloud } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: '📱',
    color: 'from-blue-500 to-cyan-400',
    border: 'border-blue-500/20',
    glow: 'hover:shadow-blue-500/20',
    skills: [
      { name: 'Flutter',   icon: SiFlutter,  color: '#54C5F8' },
      { name: 'Provider',  icon: FiDatabase, color: '#7C4DFF' },
      { name: 'GetX',      icon: FiDatabase, color: '#EF5350' },
      { name: 'Firebase',  icon: SiFirebase, color: '#FFA000' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-purple-500 to-indigo-500',
    border: 'border-purple-500/20',
    glow: 'hover:shadow-purple-500/20',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'REST APIs',   icon: FiDatabase,   color: '#FF6B35' },
      { name: 'JWT Auth',    icon: FiTool,       color: '#F7DF1E' },
      { name: 'JPA / ORM',  icon: FiDatabase,   color: '#A0522D' },
      { name: '.NET',        icon: SiDotnet,     color: '#512BD4' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Cloud',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-emerald-500/20',
    skills: [
      { name: 'MySQL',       icon: SiMysql,          color: '#4479A1' },
      { name: 'PostgreSQL',  icon: SiPostgresql,     color: '#336791' },
      { name: 'Firestore',   icon: SiFirebase,       color: '#FFA000' },
      { name: 'AWS S3',      icon: FiCloud,             color: '#FF9900' },
      { name: 'OpenAI API',  icon: SiOpenai,         color: '#00A67E' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-rose-500 to-pink-500',
    border: 'border-rose-500/20',
    glow: 'hover:shadow-rose-500/20',
    skills: [
      { name: 'GitHub',   icon: SiGithub,  color: '#ffffff' },
      { name: 'Postman',  icon: SiPostman, color: '#FF6C37' },
      { name: 'Draw.io',  icon: FiTool,    color: '#F08705' },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    icon: '🚀',
    color: 'from-amber-500 to-orange-500',
    border: 'border-amber-500/20',
    glow: 'hover:shadow-amber-500/20',
    skills: [
      { name: 'React.js',   icon: SiReact,      color: '#61DAFB' },
      { name: 'Tailwind',   icon: FiBookOpen,   color: '#06B6D4' },
      { name: 'TypeScript', icon: FiBookOpen,   color: '#3178C6' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const chipVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        label="Technical Skills"
        title="My Toolkit"
        subtitle="Technologies and tools I use to build impactful, production-ready applications."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass-card rounded-2xl p-6 border ${cat.border} hover:shadow-xl ${cat.glow} transition-all duration-300`}
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}>
                {cat.icon}
              </div>
              <h3 className="text-white font-bold text-base">{cat.title}</h3>
            </div>

            {/* Skill Chips */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {cat.skills.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  variants={chipVariants}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 hover:border-white/20 transition-all duration-200 cursor-default"
                >
                  <Icon size={14} style={{ color }} />
                  <span className="text-gray-300 text-xs font-medium">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
