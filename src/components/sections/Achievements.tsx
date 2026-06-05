import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GitPullRequest, Code2, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import AnimatedCounter from '../ui/AnimatedCounter';

const iconMap: Record<string, React.ReactNode> = {
  'Trophy': <Trophy size={32} />,
  'GitPullRequest': <GitPullRequest size={32} />,
  'Code2': <Code2 size={32} />,
  'Award': <Award size={32} />,
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <SectionHeader 
          title="Achievements" 
          subtitle="Milestones and recognition in my journey"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card p-8 text-center h-full glow-border hover:border-accent/20 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary-accent/20 text-accent mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {iconMap[achievement.icon] || <Award size={32} />}
                </div>

                {/* Counter */}
                {achievement.count && (
                  <div className="mb-3">
                    <AnimatedCounter
                      end={achievement.count}
                      suffix="+"
                      label=""
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
