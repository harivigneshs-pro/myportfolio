import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeader 
          title="INTERNSHIPS & EXPERIENCE" 
          subtitle="My professional journey and career milestones"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary-accent to-transparent md:-translate-x-px" />

          {/* Glow line effect */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-px h-full bg-gradient-to-b from-accent via-secondary-accent to-transparent md:-translate-x-px"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: 'top' }}
          />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 z-10 ${
                index % 2 === 0 ? 'left-4 md:left-1/2 md:-translate-x-2' : 'left-4 md:left-1/2 md:-translate-x-2'
              }`}>
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
              </div>

              {/* Card */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="glass-card p-6 glow-border group hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10 shrink-0">
                      <Briefcase size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-secondary-accent font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <ChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
