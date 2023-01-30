import { useState } from "react"
import '../../styles.css';
import profilePic from '../../images/profile.png';

export const TweetBox = () => {
    

    return (
        <div className="tweetBoxParent">
            <p>Say Something !!</p>
            <div className="tweetBox">
            <img src={profilePic} />
            <input type={'text'} className="tweetText"/>
        </div>
        </div>
        
    );
}