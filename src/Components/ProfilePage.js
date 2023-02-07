import { useState } from "react";
import { ProfileButton } from "./Profile/ProfileButton";
import {AllProfiles} from "./Profile/AllProfiles"
import { MyProfile } from "./Profile/MyProfile";

export const ProfilePage = () => {
    const [profileClicked,setProfileClicked] = useState(false)
    const [myProfileClicked,setMyProfileClicked] = useState(false)
    const onProfileClick = () => {
        setProfileClicked(true);
    }
    const onMyProfileClick = () => {
        setMyProfileClicked(true);
    }
    const handleCloseClick = () => {
        setProfileClicked(()=> {
            return false;
        })
        
    }

    const handleMyProfileCloseClick = () => {
        setMyProfileClicked(()=> {
            return false;
        })
    }

    return (
        <div className="profilePage">
            {myProfileClicked == true?<MyProfile onCloseClick={handleMyProfileCloseClick}/>:<ProfileButton onClickBtn={onMyProfileClick} text= {"My Profile"}/>}
            {profileClicked == true ? <AllProfiles onCloseClick={handleCloseClick}/>:<ProfileButton onClickBtn={onProfileClick} text= {"All profile"}/>}
            <ProfileButton onClickBtn={() => {}} text= {"Log Out"}/>
        </div>
    );
}