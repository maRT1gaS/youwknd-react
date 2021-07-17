import logo from'../../../assets/img/logo.jpg';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import Navigation from '../Navigation/Navigation';

const DesktopHeader = () => {
    return ( 
        <div className="header__container">
                    <div className="logo">
                        <img src={logo} width="50" height="50" alt="Logo" />
                    </div>
                    <Navigation />
                    <ChangeLanguage />
                </div>
    );
}
 
export default DesktopHeader;