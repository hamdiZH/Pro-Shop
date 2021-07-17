import React from 'react';
import {FlexBox, FlexColumn, InnerSection} from "../../../App.Styles";
import {CartSideBox, ShoppingCartSection} from "./ShoppingCart.Styles";
import CartCard from "../../../Components/Cart/CartCard/CartCard";
import Checkout from "../../../Components/Cart/Checkout/Checkout";
import {useDispatch, useSelector} from "react-redux";
import {addCartItem, decreaseCartItemQuantity, deleteCartItem} from "../../../Redux/Cart/cartActions";

function ShoppingCart(props) {
    const state = useSelector((store) => store);
    const dispatch = useDispatch();
    return (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <FlexColumn>
                    <ShoppingCartSection style={{marginTop: 92}}>
                        <CartSideBox width={1226}>
                            {state.cart.cart.map((item) => (
                                <CartCard
                                    increaseCounter={() => {
                                        if (item.quantity < item.countInStock)
                                            dispatch(addCartItem(item, 1));
                                    }}
                                    decreaseCounter={() => {
                                        if (item.quantity > 1) dispatch(decreaseCartItemQuantity(item, 1));
                                    }}
                                    key={item._id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    counter={item.quantity}
                                    handleDelete={() => dispatch(deleteCartItem(item._id))}
                                />
                            ))}
                            </CartSideBox>
                        <CartSideBox width={384}>
                            <Checkout/>
                        </CartSideBox>
                    </ShoppingCartSection>
                </FlexColumn>
            </InnerSection>
        </FlexBox>
    );
}

export default ShoppingCart;