import { useRef } from "react";
import "../Styles/MessageSendBoxStyles.css";

const MessageSendBoxComponent = ({ messages, setMessages, userOpen }) => {
  let inputRef = useRef(null);

  const prevDef = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    if (inputRef.current.value.length > 0) {
      let tempAllMessages = [];
      let tempMessage;
      let currUser = [userOpen[0]];

      messages.map((user) => {
        if (user[0][0] === userOpen[0]) {
          tempMessage = [...user[1]];
          return 0;
        } else {
          tempAllMessages.push(user);
        }
      });

      let date = new Date().toLocaleString();
      tempMessage.splice(0, 0, { user: 0, time: `${date}`, message: inputRef.current.value });

      tempAllMessages.push([currUser, tempMessage]);
      inputRef.current.value = "";
      setMessages(tempAllMessages);
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
