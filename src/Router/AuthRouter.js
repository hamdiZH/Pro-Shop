import React, {lazy} from 'react';
import {Route} from "react-router";

const Login = lazy(() => import("../Screens/Auth/Login/Login"));
const SignUp = lazy(() => import("../Screens/Auth/SignUp/SignUp"));

function AuthRouter(props) {
    return [
        <Route key={45} path={'/login'} component={() => {
            return <Login />;
        }}/>,
        <Route key={35} path={'/regester'} component={() => {
            return <SignUp />;
        }} />
    ];
}

export default AuthRouter;