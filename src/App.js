import { useState } from "react";
import "./App.css";
import SidebarComponent from "./Components/SidebarComponent";
import MainChatComponent from "./Components/MainChatComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='App'>
      <SidebarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <MainChatComponent />
    </div>
  );
}

export default App;
