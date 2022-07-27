import React, {useContext} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    function login(e) {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter login"/>
                <MyInput placeholder="Enter password" type="password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;