import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      avatar: '/placeholder.svg',
      rating: 5,
      content: 'Alex delivered exceptional work on our e-commerce platform. His attention to detail and ability to translate complex requirements into elegant solutions made our collaboration seamless. The final product exceeded our expectations!',
      project: 'E-commerce Platform Redesign'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      avatar: '/placeholder.svg',
      rating: 5,
      content: 'Working with Alex was a game-changer for our startup. He built our MVP from the ground up with incredible efficiency and quality. His technical expertise and proactive communication made him feel like part of our core team.',
      project: 'SaaS MVP Development'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Design Director',
      company: 'Creative Agency',
      avatar: '/placeholder.svg',
      rating: 5,
      content: 'Alex has an exceptional ability to bridge the gap between design and development. He implemented our complex UI designs pixel-perfectly while adding thoughtful improvements that enhanced the user experience. Truly professional work!',
      project: 'Portfolio Website Development'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder',
      company: 'FitnessTech',
      avatar: '/placeholder.svg',
      rating: 5,
      content: 'The mobile app Alex developed for us has been a huge success. His expertise in React Native and attention to performance optimization resulted in an app that our users love. Highly recommend his services!',
      project: 'Fitness Mobile App'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Project Manager',
      company: 'EdTech Solutions',
      avatar: '/placeholder.svg',
      rating: 5,
      content: 'Alex delivered our learning management system on time and within budget. His ability to understand complex educational workflows and translate them into intuitive interfaces was impressive. Great collaboration throughout!',
      project: 'Learning Management System'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client <span className="bg-gradient-button bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What my clients say about working with me and the results we achieved together
            </p>
          </motion.div>

          {/* Testimonial Slider */}
          <motion.div variants={itemVariants} className="relative">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait" custom={0}>
                <motion.div
                  key={currentIndex}
                  custom={0}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <Card className="border-border shadow-medium bg-gradient-card">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col items-center text-center space-y-6">
                        {/* Quote Icon */}
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-accent" />
                        </div>

                        {/* Rating */}
                        <div className="flex space-x-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
                          "{testimonials[currentIndex].content}"
                        </blockquote>

                        {/* Project */}
                        <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                          Project: {testimonials[currentIndex].project}
                        </div>

                        {/* Client Info */}
                        <div className="flex flex-col items-center space-y-2">
                          <img
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-accent/20"
                          />
                          <div className="text-center">
                            <h4 className="font-semibold text-foreground">
                              {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="sm"
                  className="hover:border-accent/50 hover:text-accent"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-accent scale-110'
                          : 'bg-muted hover:bg-accent/50'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="sm"
                  className="hover:border-accent/50 hover:text-accent"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Join These Happy Clients?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss your project and see how I can help you achieve your goals. 
                  I'm committed to delivering exceptional results that exceed your expectations.
                </p>
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-button hover:shadow-glow transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;