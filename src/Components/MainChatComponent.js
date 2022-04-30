import { useRef, useState } from "react";
import "../Styles/MainChatStyles.css";
import MessageSendBoxComponent from "./MessageSendBoxComponent";
import MessageInfoComponent from "./MessageInfoComponent";

const MainChatComponent = ({ darkMode, userOpen, setUserPopupActive }) => {
  let date = new Date().toLocaleString();
  const [messages, setMessages] = useState([
    [
      ["User 1", true],
      [
        { user: 0, time: date, message: "This is a return test message." },
        { user: 1, time: date, message: "This is a test message." },
      ],
    ],
    [["User 2", false], [{ user: 1, time: date, message: "This is a test message." }]],
  ]);

  let statusRef = useRef(null);

  const showStatusText = () => {
    statusRef.current.style.display = "flex";
  };

  const hideStatusText = () => {
    statusRef.current.style.display = "none";
  };

  return (
    <div id='mainChatContainer' style={darkMode ? { backgroundColor: "white" } : {}}>
      <div id='userHeaderContainer' style={darkMode ? { backgroundColor: "rgba(0, 23, 61, 0.3)" } : { backgroundColor: "rgba(0, 23, 61, 0.8)" }}>
        <p id='userHeaderNameText' style={darkMode ? { color: "black" } : {}} onClick={() => setUserPopupActive(true)}>
          @{userOpen[0]}
        </p>

        <div
          className={userOpen[1] ? "onlineStatusBubble" : "offlineStatusBubble"}
          id='userHeaderOnlineStatus'
          onMouseOver={() => showStatusText()}
          onMouseLeave={hideStatusText}
        />

        <div id='userHeaderOnlineStatusTextContainer' ref={statusRef}>
          <div id='userHeaderOnlineStatusArrow' onlineStatus={userOpen[1]} />
          <p id='userHeaderOnlineStatusText'>Online</p>
        </div>
      </div>

      <div id='messagesContainer'>
        {messages.map((user) => {
          if (user[0][0] === userOpen[0]) {
            return user[1].map((messageInfo, index) => {
              return <MessageInfoComponent messageInfo={messageInfo} key={index} />;
            });
          }
        })}
      </div>

      <div id='messageBoxContainer'>
        <MessageSendBoxComponent messages={messages} setMessages={setMessages} userOpen={userOpen} />
      </div>
    </div>
  );
};

export default MainChatComponent;
