import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hero-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Footer Content */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">
                Let's Build Something <span className="text-hero-secondary">Amazing</span> Together
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Thank you for taking the time to explore my portfolio. I'm always excited to 
                work on new projects and collaborate with passionate individuals and teams.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-6"
            >
              {[
                { name: 'GitHub', href: 'https://github.com/username' },
                { name: 'LinkedIn', href: 'https://linkedin.com/in/username' },
                { name: 'Twitter', href: 'https://twitter.com/username' },
                { name: 'Email', href: 'mailto:alex@example.com' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-white/70 hover:text-hero-secondary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 border-t border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <p className="text-white/60 text-sm flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> by Kishan Singh
                </p>
                <p className="text-white/60 text-sm">
                  © {new Date().getFullYear()} Kishan Singh. All rights reserved.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-gradient-button p-3 rounded-full shadow-glow hover:shadow-strong transition-all duration-300 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <ArrowUp className="w-6 h-6 text-primary-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

