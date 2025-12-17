import React from 'react';
import { Menu } from 'lucide-react';

/**
 * Chat Header Component
 * Displays room information and menu toggle
 * 
 * @param {object} room - Room data (name, image, participants)
 * @param {function} onMenuClick - Callback for menu button click
 */
const ChatHeader = ({ room, onMenuClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
      <button 
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>
      
      <img 
        src={room.image_url} 
        alt={room.name}
        className="w-10 h-10 rounded-lg object-cover"
      />
      
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-gray-900 truncate">
          {room.name}
        </h2>
        <p className="text-xs text-gray-500">
          {room.participant.length} participants
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;