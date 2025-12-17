import React from 'react';
import { getInitial, getAvatarColor } from '@/utils/formatters';

/**
 * Avatar Component
 * Displays user avatar with initial letter and color
 * 
 * @param {string} name - User's name
 * @param {string} size - Size variant: 'sm', 'md', 'lg'
 */
const Avatar = ({ name, size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };
  
  const initial = getInitial(name);
  const color = getAvatarColor(name);
  
  return (
    <div 
      className={`${sizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}
    >
      {initial}
    </div>
  );
};

export default Avatar;