import { useState } from "react";
import { ProfileButton } from "./Profile/ProfileButton";
import { AllProfiles } from "./Profile/AllProfiles";
import { MyProfile } from "./Profile/MyProfile";
import { Navigate } from "react-router-dom";

export const ProfilePage = () => {
  const [profileClicked, setProfileClicked] = useState(false);
  const [myProfileClicked, setMyProfileClicked] = useState(false);
  const [logout, setLogout] = useState(false);
  const [logoutText, setLogoutText] = useState(
    "You Have Successfully Logged Out!!"
  );
  const [displayText, setDisplayText] = useState(false);
  const onProfileClick = () => {
    setDisplayText(false);
    setProfileClicked(true);
  };
  const onMyProfileClick = () => {
    setDisplayText(false);
    setMyProfileClicked(true);
  };
  const handleCloseClick = () => {
    setDisplayText(false);
    setProfileClicked(() => {
      return false;
    });
  };

  const handleMyProfileCloseClick = () => {
    setDisplayText(false);
    setMyProfileClicked(() => {
      return false;
    });
  };

  const logutOutHandler = () => {
    setDisplayText(true);
    setLogout(true);
    setLogoutText("You Have Successfully Logged Out!!");
  };
  const logInHandler = () => {
    setLogout(false);
    setLogoutText("You Have Successfully Logged In");
  };

  return (
    <div className="profilePage">
      <div>{displayText && logoutText}</div>
      {myProfileClicked == true ? (
        <MyProfile onCloseClick={handleMyProfileCloseClick} />
      ) : (
        <ProfileButton onClickBtn={onMyProfileClick} text={"My Profile"} />
      )}
      {profileClicked == true ? (
        <AllProfiles onCloseClick={handleCloseClick} />
      ) : (
        <ProfileButton onClickBtn={onProfileClick} text={"All profile"} />
      )}
      {!logout ? (
        <ProfileButton onClickBtn={logutOutHandler} text={"Log Out"} />
      ) : (
        <ProfileButton onClickBtn={logInHandler} text={"Log In"} />
      )}
    </div>
  );
};
