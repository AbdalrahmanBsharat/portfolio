import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const projects = [
  {
    id: 1,
    title: 'Studify',
    emoji: '🎓',
    badge: 'Main Project',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    description:
      'Smart academic assistant mobile app featuring an OpenAI chatbot, semantic PDF search, and a role-based system for Students, Admins, and Faculty.',
    tech: ['Flutter', 'PostgreSQL', 'AWS S3', 'OpenAI API', '.NET'],
    techColors: ['bg-blue-500/15 text-blue-300', 'bg-cyan-500/15 text-cyan-300', 'bg-orange-500/15 text-orange-300', 'bg-green-500/15 text-green-300', 'bg-purple-500/15 text-purple-300'],
    github: 'https://github.com/AbdalrahmanBsharat',
    gradient: 'from-blue-600/20 to-purple-600/20',
    border: 'border-purple-500/20',
    glow: 'hover:shadow-purple-500/20',
  },
  {
    id: 2,
    title: 'TIKITAKA',
    emoji: '⚽',
    badge: 'Sports App',
    badgeColor: 'bg-green-500/20 text-green-300 border-green-500/30',
    description:
      'Football match tracking app with live match data, real-time scores, and sports news. Built with a clean UI using Provider for state management.',
    tech: ['Flutter', 'REST API', 'Provider'],
    techColors: ['bg-blue-500/15 text-blue-300', 'bg-orange-500/15 text-orange-300', 'bg-violet-500/15 text-violet-300'],
    github: 'https://github.com/AbdalrahmanBsharat',
    gradient: 'from-green-600/20 to-teal-600/20',
    border: 'border-green-500/20',
    glow: 'hover:shadow-green-500/20',
  },
  {
    id: 3,
    title: 'Note Taking App',
    emoji: '📝',
    badge: 'Productivity',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description:
      'Cross-platform note-taking app with Firebase Authentication (Google & Email), Firestore real-time database, and full CRUD operations.',
    tech: ['Flutter', 'Firebase', 'Firestore'],
    techColors: ['bg-blue-500/15 text-blue-300', 'bg-yellow-500/15 text-yellow-300', 'bg-orange-500/15 text-orange-300'],
    github: 'https://github.com/AbdalrahmanBsharat',
    gradient: 'from-amber-600/20 to-orange-600/20',
    border: 'border-amber-500/20',
    glow: 'hover:shadow-amber-500/20',
  },
  {
    id: 4,
    title: 'Electronics Shop',
    emoji: '🛒',
    badge: 'E-Commerce',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    description:
      'Full-featured e-commerce web application with product listing, shopping cart, and user authentication. Includes a complete .NET backend.',
    tech: ['HTML', 'CSS', 'JavaScript', '.NET'],
    techColors: ['bg-orange-500/15 text-orange-300', 'bg-blue-500/15 text-blue-300', 'bg-yellow-500/15 text-yellow-300', 'bg-purple-500/15 text-purple-300'],
    github: 'https://github.com/AbdalrahmanBsharat',
    gradient: 'from-rose-600/20 to-pink-600/20',
    border: 'border-rose-500/20',
    glow: 'hover:shadow-rose-500/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        label="Portfolio"
        title="Featured Projects"
        subtitle="A selection of real-world applications I've designed, built, and shipped."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className={`group relative glass-card rounded-2xl border ${project.border} overflow-hidden hover:shadow-xl ${project.glow} transition-all duration-400`}
          >
            {/* Gradient header bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')} opacity-70`} />

            {/* Card gradient bg overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{project.emoji}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
                    aria-label="View on GitHub"
                  >
                    <FiGithub size={16} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
                    aria-label="View project"
                  >
                    <FiExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${project.techColors[i] ?? 'bg-gray-700 text-gray-300'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-400 mb-4">Want to see more of my work?</p>
        <motion.a
          href="https://github.com/AbdalrahmanBsharat"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300"
        >
          <FiGithub size={18} />
          View All Projects on GitHub
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
