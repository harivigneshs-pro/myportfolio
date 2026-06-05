import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import SkillIcon from '../ui/SkillIcon';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeader 
          title="Certifications" 
          subtitle="Professional credentials and continuous learning"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card p-6 h-full glow-border hover:border-accent/20 transition-all duration-300">
                {/* Logo */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-secondary-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <SkillIcon iconName={cert.logo} size={28} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {cert.organization}
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
