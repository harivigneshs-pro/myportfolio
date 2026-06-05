import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import SkillIcon from '../ui/SkillIcon';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools', 'AI/ML'];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(skill => skill.category === activeCategory);

  const categoryColors: Record<string, string> = {
    'Frontend': '#00E5FF',
    'Backend': '#7C3AED',
    'Database': '#F59E0B',
    'Cloud': '#10B981',
    'Tools': '#EC4899',
    'AI/ML': '#8B5CF6',
  };

  return (
    <section id="skills" className="py-24 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <SectionHeader 
          title="Skills & Technologies" 
          subtitle="Technologies I use to bring ideas to life"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-background shadow-lg shadow-accent/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with Orbiting Effect */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 relative z-10"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="glass-card p-6 flex flex-col items-center gap-3 cursor-pointer glow-border transition-all duration-300 hover:border-accent/30">
                    <div className="relative">
                      <SkillIcon 
                        iconName={skill.icon} 
                        size={40} 
                        color={categoryColors[skill.category] || '#00E5FF'}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>

                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card-bg border border-white/10 rounded-lg text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {skill.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Orbiting Animation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 relative h-[300px] hidden md:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[250px] h-[250px]">
              {/* Orbit rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-8 border border-white/5 rounded-full" />
              <div className="absolute inset-16 border border-white/5 rounded-full" />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <span className="text-background font-bold text-sm">Stack</span>
                </div>
              </div>

              {/* Orbiting icons */}
              {portfolioData.skills.slice(0, 8).map((skill, index) => {
                const angle = (index / 8) * 360;
                const radius = 110;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute left-1/2 top-1/2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: `${-x}px ${-y}px`,
                    }}
                  >
                    <div 
                      className="glass p-2 rounded-lg"
                      style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <SkillIcon 
                        iconName={skill.icon} 
                        size={20} 
                        color={categoryColors[skill.category] || '#00E5FF'}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
