'use client';
import { AppContext } from '@/context/app-context';
import initialChat from '@/lib/initialChat';
import { useContext } from 'react';
import useChat from './use-chat';

const useToggle = () => {
  try {
    const { alert, setAlert, collapse, setCollapse } = useContext(AppContext);
    const { setChat } = useChat();

    //set alert confi
    const handleAlert = () => {
      setChat(initialChat);

      setAlert(true);
      //wait 3s then
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    };

    //set collapse confi
    const togglrCollapse = () => {
      setCollapse(!collapse);
    };

    const offCollapse = () => {
      collapse && setCollapse(false);
    };

    return {
      alert,
      handleAlert,
      collapse,
      offCollapse,
      togglrCollapse,
    };
  } catch (error) {
    throw new Error('useChat must be used within a ChatContext');
  }
};

export default useToggle;
