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

      <div id='sidebarButtonContainer'>
        <div id='darkModeButton' />

        <div id='logoutButton' />
      </div>
    </div>
  );
};

export default SidebarComponent;
