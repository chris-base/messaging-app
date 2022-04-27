import { useRef } from "react";
import "../Styles/MessageSendBoxStyles.css";

const MessageSendBoxComponent = ({ messages, setMessages }) => {
  let inputRef = useRef(null);

  const prevDef = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    if (inputRef.current.value.length > 0) {
      let tempMessage = [...messages];
      let date = new Date().toLocaleString();
      tempMessage.splice(0, 0, { user: 0, time: `${date}`, message: inputRef.current.value });
      inputRef.current.value = "";
      setMessages(tempMessage);
    }
  };

  return (
    <div id='messageSendBoxContainer'>
      <form id='messageForm' onSubmit={prevDef}>
        <input id='messageInput' type='text' placeholder='Type your message...' ref={inputRef} />
      </form>

      <div id='messageButtonsContainer'>
        <div id='attachmentButton'>
          <div id='attachmentIcon' />
        </div>

        <div id='sendMessageButton' onClick={() => sendMessage()}>
          <div id='sendMessageIcon' />
        </div>
      </div>
    </div>
  );
};

export default MessageSendBoxComponent;
