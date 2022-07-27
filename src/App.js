import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import {privateRoutes, publicRoutes} from "./router/router";
import {AuthContext} from "./context";
import Loader from "./components/UI/Loader/Loader";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    if(isLoading) {
        return <Loader/>
    }

  return (
    <div className="App">
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                {isAuth
                    ?
                    <Switch>
                        {privateRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.path}/>)}
                        <Redirect to='/posts'/>
                    </Switch>
                    :
                    <Switch>
                        {publicRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.path}/>)}
                        <Redirect to='/login'/>
                    </Switch>
                }
            </BrowserRouter>
        </AuthContext.Provider>

    </div>
  );
}

export default App;
