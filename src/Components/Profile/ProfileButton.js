

export const ProfileButton = ({text,onClickBtn}) => {
    return (
        <button className="profileButton" onClick={onClickBtn}>{text}</button>
    );
}