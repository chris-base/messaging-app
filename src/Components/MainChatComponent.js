import "../Styles/MainChatStyles.css";
import MessageSendBoxComponent from "./MessageSendBoxComponent";

const MainChatComponent = () => {
  return (
    <div id='mainChatContainer'>
      <div id='messageBoxContainer'>
        <MessageSendBoxComponent />
      </div>
    </div>
  );
};

export default MainChatComponent;
