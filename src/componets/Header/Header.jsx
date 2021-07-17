import './header.sass';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import { useMediaQuery } from '@material-ui/core';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState(false);

    const matches = useMediaQuery('(max-width: 1000px)');

    const changeBackground = () => {
        if (!matches && window.scrollY >= 60) {
            setActive(true);
        } else {
            setActive(false);
        };
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <header className={active ? 'header header--active' : 'header'}>
            { matches ? <MobileHeader /> : <DesktopHeader /> }
        </header>
    )
}

export default Header;