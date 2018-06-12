import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props) => {
  const { classes } = props;
  return(
  <header>  
    <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Контроль расходов
          </Typography>
          <Button color="inherit"><NavLink to="/" activeClassName="is-active" exact={true}>Список</NavLink></Button>
          <Button color="inherit"> <NavLink to="/add" activeClassName="is-active">Создать расход</NavLink></Button>
        </Toolbar>
      </AppBar>
  </header>
  )
}


export default withStyles(styles)(Header);
