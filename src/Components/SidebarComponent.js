import "../Styles/SidebarStyles.css";

const SidebarComponent = ({ darkMode, setDarkMode, userOpen, setUserOpen }) => {
  let directMessages = [
    ["User 1", true],
    ["User 2", false],
  ];

  return (
    <div
      id='sidebarContainer'
      style={
        darkMode
          ? { backgroundColor: "rgba(0, 23, 61, 0.2)", borderRight: "1px solid rgba(0, 23, 61, 0.7)" }
          : { backgroundColor: "rgba(0, 23, 61, 0.7)" }
      }
    >
      <div id='mainSBContents'>
        <div id='sidebarHeader'>
          <h1 style={darkMode ? { color: "black" } : { color: "white" }}>Messaging App</h1>
        </div>

        {[...directMessages].map((user, index) => {
          return (
            <div
              className={user[0] === userOpen[0] ? "selectedDirectMessageContainer" : "directMessageContainer"}
              onClick={() => setUserOpen([user[0], user[1]])}
              style={darkMode ? { backgroundColor: "rgba(0, 23, 61, 0.3)" } : { backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              key={index}
            >
              <p className={user[0] === userOpen[0] ? "selectedDirectMessageName" : "directMessageName"}>@{user[0]}</p>
            </div>
          );
        })}
      </div>

      <div id='sidebarButtonContainer'>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className='sbButtons'
          id='darkModeButton'
          style={darkMode ? {} : { filter: "invert(100%) sepia(53%) saturate(353%) hue-rotate(240deg) brightness(107%) contrast(102%)" }}
        />

        <div
          className='sbButtons'
          id='logoutButton'
          style={darkMode ? {} : { filter: "invert(100%) sepia(53%) saturate(353%) hue-rotate(240deg) brightness(107%) contrast(102%)" }}
        />
      </div>
    </div>
  );
};

export default SidebarComponent;
