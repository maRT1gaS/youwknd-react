import { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import Navigation from '../Navigation/Navigation';
import menuBurger from '../../../assets/svg/menu-burger.svg';
import './mobile-header.sass';

import '../../../utils/i18n.js';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  paperAnchorRight: {
    backgroundColor: '#292929'
  },
  list: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '1em'
  }
});

function MobileHeader() {

  const { t } = useTranslation();

  const anchor = 'right';

  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if (event.type === 'click' && event.target.name === 'language') {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div 
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Navigation />
        <ChangeLanguage />
    </div>
  );

  return (
    <div className={classes.container}>
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={menuBurger} alt={ t('header.burger-menu.aria-label') } aria-label={ t('header.burger-menu.aria-label') } />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Fragment>
    </div>
  );
}

export default MobileHeader;
