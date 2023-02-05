import { useState } from "react";
import { ProfileButton } from "./Profile/ProfileButton";
import {AllProfiles} from "./Profile/AllProfiles"

export const ProfilePage = () => {
    const [profileClicked,setProfileClicked] = useState(false)
    const onProfileClick = () => {
        setProfileClicked(true);
    }

    return (
        <div className="profilePage">
            {profileClicked == true ? <AllProfiles/>:<ProfileButton onClickBtn={onProfileClick} text= {"My profile"}/>}
            <ProfileButton onClickBtn={() => {}} text= {"All profiles"}/>
            <ProfileButton onClickBtn={() => {}} text= {"Log Out"}/>
        </div>
    );
}