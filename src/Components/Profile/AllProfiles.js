import { ProfileCard } from "./ProfileCard";
import closeLogo from "../../images/close.png";

export const AllProfiles = ({onCloseClick}) => {

    const users = [{name:'Atif',followers:'120',following:'10'},{name:'Zaid',followers:'110',following:'20'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'}];

    return (<div className="allProfiles">
        <div className="toClose" >
            <img src={closeLogo} onClick={onCloseClick}/>
        </div>
        {users.map((user) => <ProfileCard name={user.name} followers={user.followers} following={user.following}/>)}
    </div>);
}