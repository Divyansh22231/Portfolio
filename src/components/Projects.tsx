import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web App', 'Mobile', 'E-commerce', 'AI/ML'];

  const projects = [
    {
      id: 1,
      title: 'Ai-Quiz',
      description: 'An interactive AI-powered quiz designed to test and enhance your knowledge of artificial intelligence concepts and applications.',
 
      image: '/lovable-uploads/cd.png',
      category: 'AI/ML',
      technologies: ['React', 'Node.js',],
      liveUrl: 'https://ai-quiz-lyart.vercel.app/',
      githubUrl: 'https://github.com/kishan34-Mac/AI-Quiz',
      featured: true
    },
    {
       id:2,
       title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '/lovable-uploads/td.jpeg',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: 'https://nova-mart-lemon.vercel.app/',
      githubUrl: 'https://github.com/kishan34-Mac/Nova-mart',
      featured: true
    },
    
    {
      id: 3,
      title: 'AI Code-Review',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and analytics.',
      image: '/lovable-uploads/a42e3ebb8c917c1b6a899abdbc0eedcb.jpg',
      
      category: 'AI/ML',
      technologies: ['React', 'TypeScript', 'Express', 'Node.js', ''],
      liveUrl: 'https://ai-code-review-ashy.vercel.app/',
      githubUrl: 'https://github.com/kishan34-Mac/AI-Code-Review-',
      featured: true
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
description: 'Analytics dashboard for social media management with data visualization and scheduling features.',
image: '/lovable-uploads/placeholder1.jpeg',
category: 'Web App',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'Redis', 'Chart.js'],
      liveUrl: 'https://social-media-amber-seven.vercel.app/',
      githubUrl: 'https://github.com/kishan34-Mac/Social-media-Dashboard',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
      image: '/lovable-uploads/EasyDigitalWorkout - Transform Your Home into Your Gym.jpeg',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      liveUrl: 'https://fitness-app.com',
      githubUrl: 'https://github.com/username/fitness-app',
      featured: false
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking with portfolio management and price alerts.',
      image: '/lovable-uploads/Corellian Portfolio Tracker Crypto.jpeg',
      category: 'Web App',
      technologies: ['React', 'Next.js', 'CoinGecko API', 'TailwindCSS'],
      liveUrl: 'https://crypto-new-lovat.vercel.app',
      githubUrl: 'https://github.com/kishan34-Mac/crypto-new',
      featured: false
    },
    // {
    //   id: 6,
    //   title: 'Learning Management System',
    //   description: 'Educational platform with course management, progress tracking, and interactive content.',
    //   image: '/placeholder.svg',
    //   category: 'SaaS',
    //   technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'WebRTC'],
    //   liveUrl: 'https://lms-demo.com',
    //   githubUrl: 'https://github.com/username/lms',
    //   featured: true
    // }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="bg-gradient-button bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-button hover:shadow-glow'
                    : 'hover:border-accent/50 hover:text-accent'
                }`}
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-accent/50 transition-all duration-300 hover:shadow-medium overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Project Links */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Preview Button */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                              {project.title}
                            </h3>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">Code</span>
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200"
                          >
                            <span className="text-sm font-medium">View Live</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Want to See More?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Check out my GitHub profile for more projects, contributions, and experiments. 
                  I'm always working on something new and exciting!
                </p>
                <Button
                  onClick={() => window.open('https://github.com/username', '_blank')}
                  className="bg-gradient-button hover:shadow-glow transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;