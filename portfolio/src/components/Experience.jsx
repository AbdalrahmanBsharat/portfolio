import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const timelineItems = [
  {
    id: 1,
    period: '2020 – 2025',
    role: 'B.Sc. Computer Systems Engineering',
    company: 'Arab American University of Palestine',
    location: 'Palestine',
    type: 'education',
    color: 'from-blue-500 to-cyan-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    dot: 'bg-blue-500',
    description:
      'Graduated with a degree in Computer Systems Engineering. Gained deep knowledge in software development, databases, networking, and system architecture. Completed a capstone project — Studify — an AI-powered academic assistant.',
    highlights: ['Software Engineering', 'Database Systems', 'Computer Networks', 'Capstone: Studify'],
  },
  {
    id: 2,
    period: '2025 – 2026',
    role: 'Mobile App Developer',
    company: 'Dopa Solutions',
    location: 'Jordan',
    type: 'work',
    color: 'from-purple-500 to-violet-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    dot: 'bg-purple-500',
    description:
      'Designed and developed cross-platform mobile applications using Flutter. Integrated REST APIs, Firebase services, and real-time databases. Built apps across productivity, sports, and e-commerce domains.',
    highlights: ['Flutter & Dart', 'Firebase Integration', 'REST API Consumption', 'State Management (Provider / GetX)'],
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const typeBadge = {
  education: { label: 'Education', cls: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  work:      { label: 'Work',      cls: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
  learning:  { label: 'Learning',  cls: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
};

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/5 to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        label="My Journey"
        title="Experience & Education"
        subtitle="The milestones that shaped my skills and passion for engineering."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-rose-500/50 -translate-x-1/2 hidden sm:block" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-10"
        >
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex flex-col sm:flex-row gap-6 ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                <div className={`w-4 h-4 rounded-full ${item.dot} ring-4 ring-[#060b18] shadow-lg`} />
              </div>

              {/* Spacer */}
              <div className="hidden sm:block flex-1" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className={`flex-1 glass-card rounded-2xl border ${item.border} p-6 hover:shadow-xl transition-all duration-300`}
              >
                {/* Card top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.color} rounded-full mb-5 opacity-80`} />

                {/* Header */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1">
                      {item.role}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.company}
                    </p>
                  </div>
                  <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium border ${typeBadge[item.type].cls}`}>
                    {typeBadge[item.type].label}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${item.bg} border ${item.border} text-gray-300`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
