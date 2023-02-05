import { ProfileCard } from "./ProfileCard";


export const AllProfiles = () => {

    const users = [{name:'Atif',followers:'120',following:'10'},{name:'Zaid',followers:'110',following:'20'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'},{name:'Atif',followers:'120',following:'10'}];
    return (<div>
        {users.map((user) => <ProfileCard name={user.name} followers={user.followers} following={user.following}/>)}
    </div>);
}