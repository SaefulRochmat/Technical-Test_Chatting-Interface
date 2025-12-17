import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

/**
 * Chat Input Component
 * Input area for sending messages and attachments
 * 
 * @param {function} onSendMessage - Callback when message is sent
 */
const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      if (onSendMessage) {
        onSendMessage(message);
      }
      console.log('Sending message:', message);
      setMessage('');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const handleAttachment = () => {
    console.log('Attachment clicked');
    // TODO: Implement file upload
  };
  
  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-end gap-2">
        <button 
          onClick={handleAttachment}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </button>
        
        <div className="flex-1 min-w-0">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="1"
            style={{ maxHeight: '120px' }}
          />
        </div>
        
        <button 
          onClick={handleSend}
          disabled={!message.trim()}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;