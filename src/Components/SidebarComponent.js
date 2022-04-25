import "../Styles/SidebarStyles.css";

const SidebarComponent = ({ darkMode, setDarkMode, userOpen, setUserOpen }) => {
  let directMessages = ["User 1", "User 2"];

  return (
    <div id='sidebarContainer'>
      <div id='mainSBContents'>
        <div id='sidebarHeader'>
          <h1>Messaging App</h1>
        </div>

        {[...directMessages].map((user, index) => {
          return (
            <div
              className={user === userOpen ? "selectedDirectMessageContainer" : "directMessageContainer"}
              onClick={() => setUserOpen(user)}
              key={index}
            >
              <p className={user === userOpen ? "selectedDirectMessageName" : "directMessageName"}>@{user}</p>
            </div>
          );
        })}
      </div>

      <div id='sidebarButtonContainer'>
        <div
          onClick={() => setDarkMode(!darkMode)}
          class='sbButtons'
          id='darkModeButton'
          style={darkMode ? {} : { filter: "invert(100%) sepia(53%) saturate(353%) hue-rotate(240deg) brightness(107%) contrast(102%)" }}
        />

        <div
          class='sbButtons'
          id='logoutButton'
          style={darkMode ? {} : { filter: "invert(100%) sepia(53%) saturate(353%) hue-rotate(240deg) brightness(107%) contrast(102%)" }}
        />
      </div>
    </div>
  );
};

export default SidebarComponent;
