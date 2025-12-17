import React, { useState } from 'react';
import { Video, FileText, Download } from 'lucide-react';
import Modal from '@/components/ui/Modal';

/**
 * Message Attachment Component
 * Handles rendering of different attachment types (image, video, pdf)
 * 
 * @param {string} type - Attachment type: 'image', 'video', 'pdf'
 * @param {object} attachment - Attachment data (url, filename, size, etc)
 * @param {string} message - Message text
 */
const MessageAttachment = ({ type, attachment, message }) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  // Render image attachment
  if (type === 'image') {
    return (
      <>
        <div className="mt-2 cursor-pointer" onClick={() => setModalOpen(true)}>
          <img 
            src={attachment.thumbnail_url || attachment.url} 
            alt={attachment.filename}
            className="rounded-lg max-w-xs w-full h-auto object-cover hover:opacity-90 transition-opacity"
          />
          <p className="text-xs text-gray-500 mt-1">
            {attachment.filename} • {attachment.size}
          </p>
        </div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <img 
            src={attachment.url} 
            alt={attachment.filename} 
            className="w-full h-full object-contain" 
          />
        </Modal>
      </>
    );
  }
  
  // Render video attachment
  if (type === 'video') {
    return (
      <>
        <div className="mt-2 cursor-pointer" onClick={() => setModalOpen(true)}>
          <div className="relative rounded-lg overflow-hidden max-w-xs">
            <img 
              src={attachment.thumbnail_url} 
              alt={attachment.filename}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Video className="text-gray-800" size={32} />
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {attachment.filename} • {attachment.size} • {attachment.duration}
          </p>
        </div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <video controls className="w-full h-full">
            <source src={attachment.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal>
      </>
    );
  }
  
  // Render PDF attachment
  if (type === 'pdf') {
    return (
      <div className="mt-2">
        <a 
          href={attachment.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors max-w-xs"
        >
          <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
            <FileText className="text-red-600" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {attachment.filename}
            </p>
            <p className="text-xs text-gray-500">
              {attachment.size} • {attachment.pages} pages
            </p>
          </div>
          <Download size={18} className="text-gray-400 flex-shrink-0" />
        </a>
      </div>
    );
  }
  
  return null;
};

export default MessageAttachment;