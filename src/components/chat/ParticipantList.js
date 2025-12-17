import React from 'react';
import { X } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import { getRoleBadge } from '@/utils/formatters';

/**
 * Participant List Component
 * Sidebar showing all chat participants with roles
 * 
 * @param {Array} participants - List of participants
 * @param {boolean} isOpen - Sidebar visibility state
 * @param {function} onClose - Callback to close sidebar
 */
const ParticipantList = ({ participants, isOpen, onClose }) => {
  return (
    <div className={`lg:relative fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Participants</h3>
        <button 
          onClick={onClose}
          className="lg:hidden p-1 hover:bg-gray-100 rounded"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>
      
      <div className="p-4 space-y-3">
        {participants.map((participant) => {
          const roleBadge = getRoleBadge(participant.role);
          return (
            <div key={participant.id} className="flex items-center gap-3">
              <Avatar name={participant.name} size="md" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {participant.name}
                </p>
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${roleBadge.color}`}>
                  {roleBadge.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantList;