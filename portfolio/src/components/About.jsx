import { motion } from 'framer-motion';
import { FiCode, FiServer, FiSmartphone, FiStar } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const stats = [
  { value: '5+',  label: 'Projects Built' },
  { value: '3+',  label: 'Tech Stacks' },
  { value: '1+',  label: 'Years Coding' },
  { value: '2+',  label: 'Domains Covered' },
];

const highlights = [
  { icon: FiSmartphone, color: 'text-blue-400',   bg: 'bg-blue-500/10',   label: 'Mobile Development',   desc: 'Flutter apps with Provider & GetX' },
  { icon: FiServer,     color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'Backend Systems',       desc: 'Spring Boot APIs with JWT & JPA' },
  { icon: FiCode,       color: 'text-indigo-400', bg: 'bg-indigo-500/10', label: 'Clean Architecture',    desc: 'Scalable & testable code structure' },
  { icon: FiStar,       color: 'text-pink-400',   bg: 'bg-pink-500/10',   label: 'AI Integration',        desc: 'OpenAI API & semantic search' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
  <section id="about" className="py-24 relative">
    {/* Background accent */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        label="About Me"
        title="Who I Am"
        subtitle="Passionate engineer who loves turning ideas into real, impactful software."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — Avatar + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-[3px] shadow-2xl shadow-purple-500/30">
              <div className="w-full h-full rounded-3xl bg-dark-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder avatar with initials */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900/60 to-purple-900/60 flex items-center justify-center">
                  <span className="text-6xl font-black gradient-text">AB</span>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl glass-card border border-purple-500/30 text-xs font-medium text-purple-300 shadow-lg"
            >
              🎓 CS Engineer
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 px-3 py-2 rounded-xl glass-card border border-blue-500/30 text-xs font-medium text-blue-300 shadow-lg"
            >
              📱 Flutter Dev
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 w-full max-w-sm"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="glass-card rounded-2xl p-5 text-center border border-purple-900/30 hover:border-purple-500/40 transition-colors duration-300"
              >
                <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                <div className="text-xs text-gray-400 font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-5 text-gray-400 text-base leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Abdalrahman Bsharat</span>, a Computer Systems
              Engineering graduate with a deep passion for building software that matters. My journey spans
              across <span className="text-blue-400">mobile development</span> with Flutter and{' '}
              <span className="text-purple-400">backend engineering</span> with Spring Boot.
            </p>
            <p>
              I have hands-on experience in <span className="text-white">API integration</span>,{' '}
              <span className="text-white">debugging complex systems</span>, and building scalable applications
              from scratch. I love working at the intersection of clean architecture and modern technologies.
            </p>
            <p>
              Currently exploring <span className="text-blue-400 font-medium">React.js</span> and{' '}
              <span className="text-purple-400 font-medium">AI-powered applications</span> — always hungry to
              learn and grow.
            </p>
          </div>

          {/* Highlights grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, color, bg, label, desc }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-card rounded-2xl p-4 border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <Icon size={18} className={color} />
                </div>
                <p className="text-white text-sm font-semibold mb-1">{label}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
