'use client';

import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import ParticipantList from '@/components/chat/ParticipantList';
import { useChatData, getSenderInfo } from '@/hooks/useChatData';

/**
 * Home Page - Main Chat Interface (App Router)
 * Displays chat room with messages and participants
 */
export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const { chatData, loading, error } = useChatData();
  
  // Current logged in user
  const currentUser = "agent@mail.com";
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData]);
  
  // Loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading chat...</p>
        </div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-red-100 text-red-700 rounded-lg p-4 mb-4">
            <p className="font-semibold">Error loading chat</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  // No data state
  if (!chatData || !chatData.results || chatData.results.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">No chat data available</p>
      </div>
    );
  }
  
  const room = chatData.results[0].room;
  const comments = chatData.results[0].comments;
  
  const handleSendMessage = (message) => {
    console.log('New message:', message);
    // TODO: Implement sending message to backend
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Participant Sidebar */}
      <ParticipantList 
        participants={room.participant} 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <ChatHeader 
          room={room} 
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {comments.map((comment) => {
            const sender = getSenderInfo(room.participant, comment.sender);
            const isOwn = comment.sender === currentUser;
            
            return (
              <ChatMessage 
                key={comment.id}
                comment={comment}
                sender={sender}
                isOwn={isOwn}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}