import { useState } from "react";
import "../Styles/MessageSendBoxStyles.css";

const MessageSendBoxComponent = () => {
  const [messageText, setMessageText] = useState("");

  const prevDef = (e) => {
    e.preventDefault();
  };

  return (
    <div id='messageSendBoxContainer'>
      <form id='messageForm' onSubmit={prevDef}>
        <input
          id='messageInput'
          type='text'
          placeholder='Type your message...'
          onChange={(e) => setMessageText(e.target.value)}
          input={messageText}
        />
      </form>

      <div id='sendMessageButton'>
        <div id='sendMessageIcon' />
      </div>
    </div>
  );
};

export default MessageSendBoxComponent;
