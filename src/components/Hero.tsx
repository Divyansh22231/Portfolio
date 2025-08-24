import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import profileHeadshot from '/lovable-uploads/4bae0617-b760-425f-99ff-bbab45733cd7.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Full Stack Developer',
    'React Specialist',
    // 'UI/UX Enthusiast',
    'Problem Solver'
  ];


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(prev => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero bg-[length:400%_400%] animate-gradient-shift" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-hero-secondary/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-hero-secondary font-medium text-lg">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Divyansh <span className="bg-gradient-to-r from-hero-secondary to-white bg-clip-text text-transparent">Yadav</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="h-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                  <span className="border-r-2 border-hero-secondary pr-2 animate-blink">
                    {currentText}
                  </span>
                </h2>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Passionate about clean code, innovative solutions, and turning ideas into reality.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                  className="bg-hero-secondary text-hero-primary hover:bg-hero-secondary/90 hover:shadow-glow transition-all duration-300 font-semibold px-8"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="bg-hero-secondary text-hero-primary hover:bg-hero-secondary/90 hover:shadow-glow transition-all duration-300 font-semibold px-8"
                >
                  Let's Talk
                </Button>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-6 justify-center lg:justify-start"
              >
                {[
                  { icon: Github, href: 'https://github.com/Divyansh22231', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/kishan-singh-a28364215/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:divyanshyadav4568@gmail.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-white group-hover:text-hero-secondary transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  // animate={{ 
                  //   scale: [1, 1.05, 1],
                  //   rotate: [0, 2, -2, 0]
                  // }}
                  // transition={{
                  //   duration: 6,
                  //   repeat: Infinity,
                  //   ease: "easeInOut"
                  // }}
                  // className="relative z-10"
                >
                  {/* <img
                    src={profileHeadshot}
                    alt="Kishan Singh - Full Stack Developer"
                    className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 shadow-strong"
                  /> */}
                </motion.div>
                
                {/* Glowing Border Effect
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-hero-secondary via-white to-hero-secondary p-1 animate-gradient-shift">
                  <div className="w-full h-full rounded-full bg-hero-primary" />
                </div> */}

                {/* Floating Elements
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-20 h-20 bg-hero-secondary/20 rounded-full border border-hero-secondary/30"
                /> */}
                {/* <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/10 rounded-full border border-white/20"
                /> */}
                
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;