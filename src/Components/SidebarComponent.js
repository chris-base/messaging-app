import "../Styles/SidebarStyles.css";

const SidebarComponent = () => {
  let channels = ["Main channel", "second channel"];

  return (
    <div id='sidebarContainer'>
      <div id='sidebarHeader'>
        <h1>Messaging App</h1>
      </div>

      {[...channels].map((channel, index) => {
        return (
          <div id='channelContainer' key={index}>
            <p id='channelTitle'>#{channel}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarComponent;
