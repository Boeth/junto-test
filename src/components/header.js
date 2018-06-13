import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  return (
    <header>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Контроль расходов
          </Typography>
          <Button color="inherit"><Link to="/" >Список</Link></Button>
          <Button color="inherit"><Link to="/add" >Создать расход</Link></Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default withStyles(styles)(Header);
