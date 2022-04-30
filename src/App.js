import { useState } from "react";
import "./App.css";
import SidebarComponent from "./Components/SidebarComponent";
import MainChatComponent from "./Components/MainChatComponent";
import UserInfoPopupComponent from "./Components/UserInfoPopupComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userOpen, setUserOpen] = useState(["User 1", true]);
  const [userPopupActive, setUserPopupActive] = useState(false);

  return (
    <div className='App'>
      <SidebarComponent darkMode={darkMode} setDarkMode={setDarkMode} userOpen={userOpen} setUserOpen={setUserOpen} />
      <MainChatComponent darkMode={darkMode} userOpen={userOpen} setUserPopupActive={setUserPopupActive} />

      {userPopupActive ? (
        <UserInfoPopupComponent userOpen={userOpen} userPopupActive={userPopupActive} setUserPopupActive={setUserPopupActive} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
