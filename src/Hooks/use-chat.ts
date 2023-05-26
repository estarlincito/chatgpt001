'use client';

import { ChatContext } from '@/context/chat-context';
import { useContext } from 'react';

const useChat = () => {
  try {
    const context = useContext(ChatContext);
    return context;
  } catch (error) {
    throw new Error('useChat must be used within a ChatContext');
  }
};

export default useChat;
