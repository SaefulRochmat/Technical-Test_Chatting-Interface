import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch and manage chat data
 * @returns {object} - Chat data and loading state
 */
export const useChatData = () => {
  const [chatData, setChatData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/chat_response.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch chat data');
        }
        
        const data = await response.json();
        setChatData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching chat data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, []);

  return { chatData, loading, error };
};

/**
 * Get sender information from participants
 * @param {Array} participants - List of participants
 * @param {string} senderId - Sender email ID
 * @returns {object} - Sender information
 */
export const getSenderInfo = (participants, senderId) => {
  return participants.find(p => p.id === senderId) || { 
    name: 'Unknown User',
    id: senderId,
    role: 2
  };
};