import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
// import logo from "../../images/chilifood.jpeg";
import logo from "../../images/chilifood.jpeg";
import useStyles from './styles';

const Navbar = (props) => {
    const classes = useStyles();
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/' exact>
                        <img src={logo} alt="logo" className={classes.logo}/>
                    </NavLink>
                    <NavLink to='/' exact activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
                
                {
                    props.user.email && props.user.password ? 
                    <NavMenu>
                        <span className="badge bg-light" style={{fontSize:"15px",color:"black"}}>{props.user.email}</span>
                        <NavLink to='/' activeStyle>
                            Logout
                        </NavLink>
                    </NavMenu>:
                    <NavMenu>
                        <NavLink to='/register' className={classes.register} activeStyle>
                            Register
                        </NavLink>
                        <NavLink to='/login' className={classes.login} activeStyle>
                            Login
                        </NavLink>
                    </NavMenu> 
                }
                
            </Nav>
            <br/>
        </>
    );
};

export default Navbar;

