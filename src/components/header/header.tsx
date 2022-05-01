import { AppBar, List, ListItem, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../utils/const';

import styles from './header.module.css';

function Header(): JSX.Element {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Link to={AppRoute.Root} className={styles['logo']}>
          LOGO
        </Link>
        <List sx={{ display: 'flex', flexGrow: 1 }}>
          <ListItem>
            <Link to={AppRoute.Contacts} className={styles['link']}>
              Contacts
            </Link>
          </ListItem>
          <ListItem sx={{ justifyContent: 'flex-end' }}>
            <Link to={AppRoute.Login} className={styles['link']}>
              Login
            </Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
