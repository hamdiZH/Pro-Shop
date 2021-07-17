import React from 'react';
import {Typography} from "../../../App.Styles";
import {CheckoutBox} from "./Checkout.Styles";
import Button from "../../Button/Button";
import {Divider} from "../../../Screens/Guests/HomeScreen/HomePage.Styles";
import {useSelector} from "react-redux";

function Checkout() {
    const state = useSelector((store)=> store);
    return (
        <CheckoutBox>
            <Typography fontSize={32} color={'#242424'} fontWeight={700} style={{marginTop: 26}}>Subtotal ({state.cart.cart.length}) items</Typography>
            <Typography fontSize={32} fontWeight={700} style={{ marginBottom: 80 }}>
                Total (
                {state.cart.cart.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0)}) items
            </Typography>
            <Typography fontSize={38} fontWeight={700} style={{ marginBottom: 30, justifyContent: "start" }}>
                Total Price $
                {state.cart.cart.reduce((acc, item) => {
                        return acc + item.price * item.quantity;
                    }, 0).toFixed(2)}
            </Typography>
            <Divider dividerWidth={338} dividerHeight={2} isYellow={false}/>
            <Button
                link={
                    state.userDetails.user._id ? "/proceed-checkout/shipping-address" : "/login"
                }
                text={'Proceed to checkout'}
                width={324}
                height={62}
                borderRadius={10}
                isGray={false}
                onClick={()=>{}}
                style={{marginTop: 47}} />

        </CheckoutBox>
    );
}

export default Checkout;