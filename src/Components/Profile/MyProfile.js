import closeLogo from "../../images/close.png";


export const MyProfile = ({onCloseClick}) => {
    return (
        <div className="allProfiles">
        <div className="toClose" >
            <img src={closeLogo} onClick={onCloseClick}/>
        </div>
        </div>
    );
}