import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import MagneticButton from '../ui/MagneticButton';
import SkillIcon from '../ui/SkillIcon';

const roles = [
  "Full Stack Developer",
  "React Developer", 
  "AI Enthusiast",
  "Problem Solver",
  "Cloud Architect",
];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const glowX = useTransform(springX, [-500, 500], [-100, 100]);
  const glowY = useTransform(springY, [-500, 500], [-100, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing animation
  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const floatingIcons = [
    { icon: 'SiReact', delay: 0, x: -180, y: -120 },
    { icon: 'SiNodedotjs', delay: 1, x: 200, y: -80 },
    { icon: 'SiPython', delay: 2, x: -150, y: 100 },
    { icon: 'SiDocker', delay: 3, x: 180, y: 120 },
    { icon: 'SiTypescript', delay: 1.5, x: -80, y: -180 },
    { icon: 'SiAmazonaws', delay: 2.5, x: 120, y: 160 },
  ];

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-padding"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
        style={{ x: glowX, y: glowY }}
      />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary-accent/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-accent text-lg font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {portfolioData.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-12 mb-6"
            >
              <span className="text-2xl md:text-3xl font-semibold text-white">
                {displayText}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton variant="primary">
                <span className="flex items-center gap-2">
                  View Projects <ExternalLink size={18} />
                </span>
              </MagneticButton>
              {/* resum link */}
              <a href="https://drive.google.com/file/d/1GiS5z-k0Qa-85Xey-52aavDEAlNA_ko4/view?usp=drive_link">

              <MagneticButton variant="secondary">
                <span className="flex items-center gap-2">
                  <Download size={18} /> Resume
                </span>
              </MagneticButton>
              </a>
              <MagneticButton variant="secondary">
                <span className="flex items-center gap-2">
                  <Mail size={18} /> Contact
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Content - Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              {/* Central glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary-accent/20 rounded-full blur-3xl" />

              {/* Developer avatar placeholder */}
              <motion.div
                className="absolute inset-8 rounded-3xl glass-card overflow-hidden flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-secondary-accent flex items-center justify-center">
                    <span className="text-4xl font-bold text-background">HV</span>
                  </div>
                  <p className="text-gray-400 text-sm">Developer Profile</p>
                </div>
              </motion.div>

              {/* Floating tech icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  animate={{
                    x: item.x,
                    y: item.y,
                    rotate: [0, 360],
                  }}
                  transition={{
                    x: { duration: 0 },
                    y: { duration: 0 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                  style={{ marginLeft: '-20px', marginTop: '-20px' }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="glass p-3 rounded-xl shadow-lg shadow-accent/10"
                  >
                    <SkillIcon iconName={item.icon} size={28} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Orbiting dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-accent/60"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  style={{
                    transformOrigin: `${i % 2 === 0 ? 220 : 180}px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
