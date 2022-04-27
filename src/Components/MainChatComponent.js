import { useRef, useState } from "react";
import "../Styles/MainChatStyles.css";
import MessageSendBoxComponent from "./MessageSendBoxComponent";
import MessageInfoComponent from "./MessageInfoComponent";

const MainChatComponent = ({ userOpen }) => {
  let date = new Date().toLocaleString();
  const [messages, setMessages] = useState([
    { user: 0, time: date, message: "This is a return test message." },
    { user: 1, time: date, message: "This is a test message." },
  ]);

  let statusRef = useRef(null);

  const showStatusText = () => {
    statusRef.current.style.display = "flex";
  };

  const hideStatusText = () => {
    statusRef.current.style.display = "none";
  };

  return (
    <div id='mainChatContainer'>
      <div id='userHeaderContainer'>
        <p id='userHeaderNameText'>@{userOpen}</p>

        <div id='userHeaderOnlineStatus' onMouseOver={() => showStatusText()} onMouseLeave={hideStatusText} />

        <div id='userHeaderOnlineStatusTextContainer' ref={statusRef}>
          <div id='userHeaderOnlineStatusArrow' />
          <p id='userHeaderOnlineStatusText'>Online</p>
        </div>
      </div>

      <div id='messagesContainer'>
        {messages.map((messageInfo, index) => {
          return <MessageInfoComponent messageInfo={messageInfo} key={index} />;
        })}
      </div>

      <div id='messageBoxContainer'>
        <MessageSendBoxComponent messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default MainChatComponent;
