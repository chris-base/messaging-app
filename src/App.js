import { useState } from "react";
import "./App.css";
import SidebarComponent from "./Components/SidebarComponent";
import MainChatComponent from "./Components/MainChatComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userOpen, setUserOpen] = useState("@User 1");

  return (
    <div className='App'>
      <SidebarComponent darkMode={darkMode} setDarkMode={setDarkMode} setUserOpen={setUserOpen} />
      <MainChatComponent userOpen={userOpen} />
    </div>
  );
}

export default App;
