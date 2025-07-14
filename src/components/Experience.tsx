import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      logo: 'TC',
      website: 'https://techcorp.com',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 70%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with product team to define technical requirements'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript']
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Remote',
      logo: 'SX',
      website: 'https://startupxyz.com',
      description: [
        'Built MVP from scratch using React and Express.js',
        'Designed and implemented RESTful APIs and GraphQL endpoints',
        'Optimized application performance resulting in 40% faster load times',
        'Integrated third-party services including Stripe and SendGrid'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'GraphQL', 'Stripe']
    },
    {
      id: 3,
      company: 'WebDev Agency',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
      location: 'New York, NY',
      logo: 'WA',
      website: 'https://webdevagency.com',
      description: [
        'Developed responsive websites for 50+ clients',
        'Created reusable component libraries using React and Storybook',
        'Collaborated with designers to implement pixel-perfect UI/UX',
        'Maintained high code quality standards and best practices'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'WordPress', 'jQuery']
    },
    {
      id: 4,
      company: 'Digital Marketing Co',
      position: 'Junior Web Developer',
      duration: '2017 - 2018',
      location: 'Austin, TX',
      logo: 'DM',
      website: 'https://digitalmarketing.com',
      description: [
        'Built landing pages and marketing websites',
        'Implemented analytics and tracking solutions',
        'Worked on SEO optimization and performance improvements',
        'Learned modern web development practices and frameworks'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work <span className="bg-gradient-button bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the companies that shaped my career
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="ml-16 md:ml-0 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-medium">
                        <CardContent className="p-6">
                          {/* Company Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center border border-border">
                                <span className="text-lg font-bold text-accent">
                                  {exp.logo}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">
                                  {exp.company}
                                </h3>
                                <p className="text-accent font-medium">{exp.position}</p>
                              </div>
                            </div>
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors duration-200"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>

                          {/* Duration and Location */}
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="text-muted-foreground text-sm flex items-start">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities and exciting projects. 
                  Let's connect and see how we can create something amazing together.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;