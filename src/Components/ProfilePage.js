import { ProfileButton } from "./Profile/ProfileButton";


export const ProfilePage = () => {
    return (
        <div className="profilePage">
            <ProfileButton onClickBtn={() => {}} text= {"My profile"}/>
            <ProfileButton onClickBtn={() => {}} text= {"All profiles"}/>
            <ProfileButton onClickBtn={() => {}} text= {"Log Out"}/>
        </div>
    );
}