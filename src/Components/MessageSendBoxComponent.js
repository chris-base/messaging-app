import { useRef } from "react";
import "../Styles/MessageSendBoxStyles.css";

const MessageSendBoxComponent = ({ messages, setMessages }) => {
  let inputRef = useRef(null);

  const prevDef = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    let tempMessage = [...messages];
    tempMessage.splice(0, 0, { user: 0, time: "Jan 10, 2022", message: inputRef.current.value });
    console.log(tempMessage);
    inputRef.current.value = "";
    setMessages(tempMessage);
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
