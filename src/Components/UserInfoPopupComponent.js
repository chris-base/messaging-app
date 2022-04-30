import { useRef, useEffect } from "react";
import "../Styles/UserInfoPopupStyles.css";

const UserInfoPopupComponent = ({ userOpen, userPopupActive, setUserPopupActive }) => {
  let containerRef = useRef(null);
  let mainRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (userPopupActive && containerRef.current && !containerRef.current.contains(event.target) && mainRef.current.contains(event.target)) {
      setUserPopupActive(false);
    }
  };

  return (
    <div id='mainUserPopupContainer' ref={mainRef}>
      <div id='userPopupContainer' ref={containerRef}>
        <div id='userPopupTitleInfo'>
          <p>@{userOpen}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPopupComponent;
