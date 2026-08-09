import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'abd.bsharatt@gmail.com',
    href: 'mailto:abd.bsharatt@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'abd-alrahman-bsharatt',
    href: 'https://www.linkedin.com/in/abd-alrahman-bsharatt/',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'AbdalrahmanBsharat',
    href: 'https://github.com/AbdalrahmanBsharat',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Amman, Jordan',
    href: null,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-200';

const Contact = () => {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send — replace with your actual email service (EmailJS / Formspree)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s work together</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently open to new opportunities — whether it&apos;s a full-time role, freelance project, or just a chat.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 glass-card rounded-xl border ${border} transition-all duration-200`}
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`${color} text-sm font-medium hover:underline truncate block break-all`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social row */}
            <div className="pt-2">
              <p className="text-gray-500 text-sm mb-4">Or find me on social media:</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub,   href: 'https://github.com/AbdalrahmanBsharat', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abd-alrahman-bsharatt/', label: 'LinkedIn' },
                  { icon: FiMail,     href: 'mailto:abd.bsharatt@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl border border-purple-900/30 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry / Collaboration"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or what you have in mind..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={status === 'idle' ? { scale: 1.03, boxShadow: '0 0 25px rgba(139,92,246,0.4)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.97 } : {}}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400 cursor-default'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 disabled:opacity-60 disabled:cursor-not-allowed'
                }`}
              >
                {status === 'idle' && <><FiSend size={16} /> Send Message</>}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'sent' && '✓ Message Sent!'}
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
