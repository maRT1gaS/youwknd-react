import './ScrollTop.sass';
import { HashLink } from 'react-router-hash-link';
import arrowTop from '../../assets/svg/arrow-up.svg';
import '../../utils/i18n.js';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ScrollTop = () => {

    const [ visible, setVisible ] = useState(false);
    const { t } = useTranslation();

    const changeVisible = () => {
        if (window.scrollY >= 60) {
            setVisible(true);
        } else {
            setVisible(false);
        };
    }

    window.addEventListener('scroll', changeVisible);

    return ( 
        <div className={ visible ? 'scroll-top' : 'scroll-top scroll-top--opacity' }>
            <HashLink smooth to="/youwknd-react#">
                <img src={arrowTop} alt={ t('scroll-top.aria-label') } aria-label={ t('scroll-top.aria-label') }/>
            </HashLink>
        </div>
    );
}
 
export default ScrollTop;