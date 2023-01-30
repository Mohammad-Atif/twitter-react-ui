import '../../styles.css';
import logo from '../../images/home.png';
import userLogo from '../../images/user.png';

const NavItem = ({itemName}) => {
    return(
    <p>{itemName}</p>
    );
};

export const Header = () =>{
    return (<div className="header">
        <img src={logo} />
        <img src={userLogo} />
        </div>);
};