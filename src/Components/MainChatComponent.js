import { useRef } from "react";
import "../Styles/MainChatStyles.css";
import MessageSendBoxComponent from "./MessageSendBoxComponent";
import MessageInfoComponent from "./MessageInfoComponent";

const MainChatComponent = ({ userOpen }) => {
  let statusRef = useRef(null);

  const messages = [
    { user: 0, time: "Jan 1, 2022", message: "This is a test message." },
    { user: 1, time: "Jan 1, 2022", message: "This is a return test message." },
    {
      user: 0,
      time: "Jan 1, 2022",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: 1,
      time: "Jan 1, 2022",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];

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
        <MessageSendBoxComponent />
      </div>
    </div>
  );
};

export default MainChatComponent;
