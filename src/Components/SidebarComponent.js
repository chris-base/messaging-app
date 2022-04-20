import "../Styles/SidebarStyles.css";

const SidebarComponent = ({ darkMode, setDarkMode }) => {
  let channels = ["Main channel", "second channel"];

  return (
    <div id='sidebarContainer'>
      <div id='mainSBContents'>
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

      <div id='sidebarButtonContainer'>
        <div
          onClick={() => setDarkMode(!darkMode)}
          class='sbButtons'
          id='darkModeButton'
          style={darkMode ? { filter: "invert(100%) sepia(53%) saturate(353%) hue-rotate(240deg) brightness(107%) contrast(102%)" } : {}}
        />

        <div
          class='sbButtons'
          id='logoutButton'
          style={darkMode ? { filter: "invert(100%) sepia(53%) saturate(353%) hue-rotate(240deg) brightness(107%) contrast(102%)" } : {}}
        />
      </div>
    </div>
  );
};

export default SidebarComponent;
