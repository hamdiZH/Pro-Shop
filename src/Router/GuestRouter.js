import React, {lazy} from 'react';
import {Route} from "react-router";

const HomePage = lazy(() => import("../Screens/Guests/HomeScreen/HomePage"));
const ProductScreen = lazy(() => import("../Screens/Guests/ProductScreen/ProductScreen"));
const ShoppingCart = lazy(() => import("../Screens/Guests/ShoppingCart/ShoppingCart"));
const Search = lazy(() => import("../Screens/Guests/Search/Search"));


function GuestRouter(props) {
    return [
        <Route key={1} path={'/'} exact={true} component={HomePage} />,
        <Route path={'/product/:id/:name'} component={ProductScreen}/>,
        <Route key={3} path={'/shoppingCart'} component={ShoppingCart}/>,
        <Route key={4} path={'/search'} component={Search}/>
    ];
}

export default GuestRouter;