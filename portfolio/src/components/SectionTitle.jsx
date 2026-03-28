import { motion } from 'framer-motion';

const SectionTitle = ({ label, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    {label && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
        {label}
      </span>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
      {title}
    </h2>
    <div className="section-underline w-16 mx-auto mb-4" />
    {subtitle && (
      <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
