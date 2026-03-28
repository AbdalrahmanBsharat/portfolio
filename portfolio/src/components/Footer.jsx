import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const links = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

const socials = [
  { icon: FiGithub,   href: 'https://github.com/AbdalrahmanBsharat',          label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abd-alrahman-bsharatt/', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:abd.bsharatt@gmail.com',                    label: 'Email' },
];

const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => (
  <footer className="relative border-t border-purple-900/20">
    {/* Gradient top fade */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid sm:grid-cols-3 gap-10 mb-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30">
              AB
            </div>
            <span className="font-bold text-white">Abdalrahman Bsharat</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Computer Systems Engineer &amp; Flutter Developer passionate about building scalable, impactful software.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Connect</h4>
          <div className="flex gap-3 mb-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
          <a
          href="mailto:abd.bsharatt@gmail.com"
          className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200"
        >
          abd.bsharatt@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Abdalrahman Bsharat. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <FiHeart size={12} className="text-rose-500" /> using React &amp; Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
