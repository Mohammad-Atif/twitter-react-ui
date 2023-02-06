import { useState } from "react";
import { ProfileButton } from "./Profile/ProfileButton";
import {AllProfiles} from "./Profile/AllProfiles"

export const ProfilePage = () => {
    const [profileClicked,setProfileClicked] = useState(false)
    const onProfileClick = () => {
        setProfileClicked(true);
    }
    const handleCloseClick = () => {
        setProfileClicked(()=> {
            return false;
        })
    }

    return (
        <div className="profilePage">
            <ProfileButton onClickBtn={() => {}} text= {"My Profile"}/>
            {profileClicked == true ? <AllProfiles onCloseClick={handleCloseClick}/>:<ProfileButton onClickBtn={onProfileClick} text= {"All profile"}/>}
            <ProfileButton onClickBtn={() => {}} text= {"Log Out"}/>
        </div>
    );
}