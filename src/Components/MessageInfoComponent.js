import "../Styles/MessageInfoStyles.css";

const MessageInfoComponent = ({ messageInfo }) => {
  return (
    <div id='messageInfoContainer' style={messageInfo.user === 0 ? { alignItems: "end" } : { alignItems: "start" }}>
      <div id='messageBubbleContainer' style={messageInfo.user === 0 ? { backgroundColor: "#f0f0f0" } : { backgroundColor: "#212121" }}>
        <p id='messageBubbleText' style={messageInfo.user === 0 ? { color: "black" } : { color: "white" }}>
          {messageInfo.message}
        </p>
      </div>
      <div id='messageTimeContainer'>
        <p id='messageTimeText'>{messageInfo.time}</p>
      </div>
    </div>
  );
};

export default MessageInfoComponent;
