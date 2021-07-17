import React, {lazy} from 'react';
import {Route} from "react-router";


const UserProfile = lazy(() => import("../Screens/Users/UserProfile/UserProfile"));
const UpdateProfile = lazy(() => import("../Screens/Users/UserProfile/UpdateProfile"));
const Payment = lazy(() => import("../Screens/Users/Order/Payment"));
const Order = lazy(() => import("../Screens/Users/Order/ProceedCheckout/Order"));
const Orders = lazy(() => import("../Screens/Users/Orders/Orders"));

function UserRouter(props) {
    return [
        <Route key={4} path={'/profile'} component={UserProfile}/>,
        <Route key={5} path={'/update-profile'} component={UpdateProfile}/>,
        <Route key={405} path={"/proceed-checkout/shipping-address"} exact={true} component={Payment}/>,
        <Route key={402} path={"/proceed-checkout/place-order"} exact={true} component={Payment}/>,
        <Route key={50} path={"/order/:id"} exact={true} component={Order}/>,
        <Route key={22} path={"/orders"} exact={true} component={Orders} />,
    ];
}

export default UserRouter;