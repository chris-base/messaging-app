import { useRef } from "react";
import "../Styles/MainChatStyles.css";
import MessageSendBoxComponent from "./MessageSendBoxComponent";

const MainChatComponent = ({ userOpen }) => {
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

      <div id='messageBoxContainer'>
        <MessageSendBoxComponent />
      </div>
    </div>
  );
};

export default MainChatComponent;
