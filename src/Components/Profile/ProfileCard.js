import { useState } from "react";
import { ProfileButton } from "./ProfileButton";


export const ProfileCard = ({name,followers,following}) => {
    const [isFollowing,setIsFollowing] = useState(false)
    const onClickButton = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <div className="profileCard">
            <p>Name: {name}</p>
            <p>followers: {followers}</p>
            <p>following: {following}</p>
            <ProfileButton onClickBtn={onClickButton} text = {isFollowing?"Unfollow":"Follow"} />
        </div>
    );
}