import React from 'react';
import * as Icons from '@icons-pack/react-simple-icons';

interface SkillIconProps {
  iconName: string;
  size?: number;
  className?: string;
  color?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ iconName, size = 24, className = '', color = '#00E5FF' }) => {
  const IconComponent = (Icons as unknown as  Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>>)[iconName];

  if (!IconComponent) {
    return (
      <div 
        className={`flex items-center justify-center rounded-lg bg-accent/10 ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-accent text-xs font-bold">{iconName.slice(2, 4)}</span>
      </div>
    );
  }

  return <IconComponent size={size} className={className} color={color} />;
};

export default SkillIcon;
