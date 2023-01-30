import { useState } from "react"
import '../../styles.css';
import profilePic from '../../images/profile.png';

export const TweetBox = () => {
    

    return (
        <div className="tweetBox">
            <img src={profilePic} />
            <input type={'text'} placeholder="Say Something !!" className="tweetText"/>
        </div>
    );
}