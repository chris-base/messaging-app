import "../Styles/MainChatStyles.css";
import MessageSendBoxComponent from "./MessageSendBoxComponent";

const MainChatComponent = ({ userOpen }) => {
  return (
    <div id='mainChatContainer'>
      <div id='userHeaderContainer'>
        <p id='userHeaderNameText'>{userOpen}</p>
        <div id='userHeaderOnlineStatus' />
      </div>

      <div id='messageBoxContainer'>
        <MessageSendBoxComponent />
      </div>
    </div>
  );
};

export default MainChatComponent;
