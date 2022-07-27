import React, {useContext} from 'react';
import cls from './Navbar.module.css'
import {Link} from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }
    return (
        <div className={cls.Navbar}>
            {isAuth
                ? <MyButton onClick={logout}>Logout</MyButton>
                : null
            }
            <div className={cls.Navbar_links}>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;