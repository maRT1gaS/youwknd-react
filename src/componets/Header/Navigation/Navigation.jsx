import { HashLink } from "react-router-hash-link";
import './Navigation.sass';
import { useTranslation } from "react-i18next";
import '../../../utils/i18n';


const Navigation = () => {

    const { t } = useTranslation();

    const navObj = t('header.nav', { returnObjects: true });

    return ( 
        <nav className="nav">
          <ul className="nav__items">
            {navObj.map((item, index) => {
              return (
              <li className="nav__item" key={index}>
                <HashLink smooth to={"/youwknd-react" + item.url} className="nav__link">{item.title}</HashLink>
              </li>)
            })}
        </ul>
      </nav>
    );
}
 
export default Navigation;