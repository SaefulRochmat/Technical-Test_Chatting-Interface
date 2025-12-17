import React from 'react';
import Avatar from '@/components/ui/Avatar';
import MessageAttachment from './MessageAttachment';
import { formatTime } from '@/utils/formatters';

/**
 * Chat Message Component
 * Displays a single chat message with sender info and attachments
 * 
 * @param {object} comment - Message data
 * @param {object} sender - Sender information
 * @param {boolean} isOwn - Whether message is from current user
 */
const ChatMessage = ({ comment, sender, isOwn }) => {
  return (
    <div className={`flex gap-2 mb-4 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isOwn && <Avatar name={sender.name} size="sm" />}
      
      <div className={`flex flex-col max-w-[75%] md:max-w-[60%] ${isOwn ? 'items-end' : 'items-start'}`}>
        {!isOwn && (
          <span className="text-xs font-medium text-gray-600 mb-1 ml-1">
            {sender.name}
          </span>
        )}
        
        <div className={`rounded-2xl px-4 py-2 ${
          isOwn 
            ? 'bg-blue-500 text-white rounded-tr-sm' 
            : 'bg-gray-100 text-gray-900 rounded-tl-sm'
        }`}>
          <p className="text-sm whitespace-pre-wrap break-words">
            {comment.message}
          </p>
          
          {comment.attachment && (
            <MessageAttachment 
              type={comment.type} 
              attachment={comment.attachment}
              message={comment.message}
            />
          )}
        </div>
        
        <span className={`text-xs text-gray-500 mt-1 ${isOwn ? 'mr-1' : 'ml-1'}`}>
          {formatTime(comment.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;