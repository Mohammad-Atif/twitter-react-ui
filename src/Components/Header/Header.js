import '../../styles.css';
import logo from '../../images/home.png';
import userLogo from '../../images/user.png';

const NavItem = ({itemName}) => {
    return(
    <p>{itemName}</p>
    );
};

export const Header = ({btnCLick}) =>{
    return (
    <div className="header">
        <img src={logo} onClick = {()=> btnCLick(true)} />
        <img src={userLogo} onClick = {()=> btnCLick(false)}/>
        </div>);
};