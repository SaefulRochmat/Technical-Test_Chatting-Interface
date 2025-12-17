/**
 * Format timestamp to time string (HH:MM)
 * @param {string} timestamp - ISO timestamp string
 * @returns {string} - Formatted time string
 */
export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

/**
 * Get role badge configuration
 * @param {number} role - Role number (0: Admin, 1: Agent, 2: Customer)
 * @returns {object} - Role configuration with label and color
 */
export const getRoleBadge = (role) => {
  const roles = {
    0: { label: 'Admin', color: 'bg-red-100 text-red-700' },
    1: { label: 'Agent', color: 'bg-blue-100 text-blue-700' },
    2: { label: 'Customer', color: 'bg-green-100 text-green-700' }
  };
  return roles[role] || roles[2];
};

/**
 * Get initial from name for avatar
 * @param {string} name - Full name
 * @returns {string} - First letter uppercase
 */
export const getInitial = (name) => {
  return name ? name.charAt(0).toUpperCase() : '?';
};

/**
 * Get color for avatar based on name
 * @param {string} name - Full name
 * @returns {string} - Tailwind color class
 */
export const getAvatarColor = (name) => {
  const colors = [
    'bg-blue-500', 
    'bg-green-500', 
    'bg-purple-500', 
    'bg-pink-500', 
    'bg-indigo-500'
  ];
  const colorIndex = name ? name.charCodeAt(0) % colors.length : 0;
  return colors[colorIndex];
};