import React from 'react';
import Sidebar from './sidebar'; // Import the new component
import './styles/chat.css';



const Chat = () => {
  return (
    
    <div className="chat-page">
      <Sidebar />
      <div className="main-content">
          <h1 className='chat-content'>lenna bech tsiir khedmet chat (islem + smexi)</h1>       
      </div>
    </div>

  );
};

export default Chat;
