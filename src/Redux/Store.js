import {applyMiddleware, combineReducers, createStore} from "redux";
import {guestReducer} from "./Guest/guestReducer";
import thunk from "redux-thunk";
import {userReducer} from "./User/userReducer";
import {cartReducer} from "./Cart/cartReducer";
import {ordersReducer} from "./Orders/ordersReducer";


const reducers = combineReducers({
    guestState: guestReducer,
    userDetails: userReducer,
    cart: cartReducer,
    orders: ordersReducer,

});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const shippingFromLocalStorage = JSON.parse(localStorage.getItem('Address')) || {};

const initialState = {
    userDetails: {
        user: userFromLocalStorage,
    },
    cart: {
        cart: cartFromLocalStorage,
        shippingAddress: shippingFromLocalStorage,
    }
};

const middlewares = [thunk];

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

// To track store and actions
Window.store = store

export default store;