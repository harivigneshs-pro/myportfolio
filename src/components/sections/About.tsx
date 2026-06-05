import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import AnimatedCounter from '../ui/AnimatedCounter';

const About: React.FC = () => {
  const stats = [
    { end: portfolioData.stats.projectsCompleted, label: 'Projects Completed', suffix: '+' },
    { end: portfolioData.stats.technologiesLearned, label: 'Technologies Learned', suffix: '+' },
    { end: portfolioData.stats.certificationsEarned, label: 'Certifications Earned', suffix: '' },
    { end: portfolioData.stats.yearsExperience, label: 'Years Experience', suffix: '+' },
  ];

  return (
    <section id="about" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeader 
          title="About Me" 
          subtitle="Passionate about building exceptional digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary-accent/30 rounded-3xl blur-2xl" />
              <div className="relative glass-card h-full flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-secondary-accent flex items-center justify-center shadow-2xl shadow-accent/20">
                    <span className="text-5xl font-bold text-background">HV</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{portfolioData.name}</h3>
                  <p className="text-accent font-medium mb-4">{portfolioData.title}</p>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} />
                    <span>{portfolioData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="glass-card p-6 glow-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Briefcase size={20} className="text-accent" />
                  Career Summary
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  With over {portfolioData.stats.yearsExperience} years of experience in full-stack development, 
                  I've worked across multiple projects and  delivering scalable solutions 
                  that drive career growth. My expertise spans modern frontend frameworks, robust backend 
                  architectures, and cloud-native deployments.
                </p>
              </div>

              <div className="glass-card p-6 glow-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <GraduationCap size={20} className="text-secondary-accent" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <p className="font-medium">B.E. Computer Science and engineering</p>
                      <p className="text-gray-400 text-sm">sri eshwar college of engineering</p>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                        <Calendar size={12} />
                        <span>2024 - 2028</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 glow-border">
                <h3 className="text-xl font-semibold mb-3">My Story</h3>
                <p className="text-gray-400 leading-relaxed">
                  I started coding at age 16, solving simple problems in cpp. 
                  That curiosity evolved into a deep passion for software engineering. Today, 
                  I specialize in creating performant, accessible, and visually stunning applications 
                  that solve real-world problems. When I'm not coding, you'll find me drawing portraits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
