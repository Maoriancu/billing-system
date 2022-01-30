import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useStyles from './NavBar.css';

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/all" exact>All Transactions</NavLink>
                <NavLink className={classes.tabs} to="/add" exact>Add Transaction</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;