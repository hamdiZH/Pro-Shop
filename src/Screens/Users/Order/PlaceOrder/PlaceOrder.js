import React from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, Typography} from "../../../../App.Styles";
import {LeftOrderInformation, RightOrderInformation} from "../GlobalOrderStyle.Styles";
import {useDispatch, useSelector} from "react-redux";
import OrderCard from "../../../../Components/OrderCard/OrderCard";
import Button from "../../../../Components/Button/Button";
import {ErrorMessage} from "../../../Auth/Auth.Styles";
import {useHistory} from "react-router";
import {placeOrder} from "../../../../Redux/Orders/ordersActions";

function PlaceOrder(props) {
    const state = useSelector(store => store);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <FlexColumn>
                    <FlexRow style={{justifyContent: 'space-between', alignItems: 'start', marginLeft: 20}}>
                        <LeftOrderInformation>
                            <Typography fontSize="32" fontWeight="700"
                                        style={{justifyContent: "start", marginBottom: "16px"}}>
                                Shipping Address
                            </Typography>

                            <Typography fontSize="22" fontWeight="400"
                                        style={{justifyContent: "start", marginBottom: "16px"}}>
                                {state.userDetails.user.name}
                            </Typography>
                            <Typography fontSize="22" fontWeight="400"
                                        style={{justifyContent: "start", marginBottom: "76px"}}>
                                {state.cart.shippingAddress.country} - {state.cart.shippingAddress.city}
                            </Typography>

                            <Typography fontSize="32" fontWeight="700" style={{justifyContent: "start", marginBottom: 16}}>
                                Order Details
                            </Typography>

                            {state.cart.cart.map((item) => (
                                <OrderCard
                                    key={item._id}
                                    src={"https://proshop-ms.herokuapp.com/" + item.image}
                                    itemName={item.name}
                                    itemPrice={item.price}
                                    itemQuantity={item.quantity}
                                    orderItemTotalPrice={item.price * item.quantity}
                                />
                            ))}
                        </LeftOrderInformation>

                        <RightOrderInformation>
                            <Typography fontSize={32} color={'#242424'} fontWeight={700}
                                        style={{marginBottom: 30}}>Order Details</Typography>
                            <FlexRow>
                                <FlexColumn style={{alignItems: 'start'}}>
                                    <FlexRow style={{justifyContent: 'space-between'}}>
                                        <Typography fontSize={16} color={'#707070'} fontWeight={700}
                                                    style={{width: '75%'}}>Subtotal</Typography>
                                        <Typography fontSize={16} color={'#707070'} fontWeight={700}
                                                    style={{width: '25%'}}>{state.cart.cart.length}</Typography>
                                    </FlexRow>
                                    <FlexRow style={{
                                        justifyContent: 'space-between',
                                        margin: '16px 0px'
                                    }}>
                                        <Typography fontSize={16} color={'#707070'} fontWeight={700}
                                                    style={{width: '75%'}}>Total items</Typography>
                                        <Typography fontSize={16} color={'#707070'} fontWeight={700}
                                                    style={{width: '25%'}}>(
                                            {state.cart.cart.reduce((acc, item) => {
                                                return acc + item.quantity;
                                            }, 0)})</Typography>
                                    </FlexRow>
                                    <FlexRow
                                        style={{justifyContent: 'space-between', marginTop: 16}}>
                                        <Typography fontSize={16} color={'#242424'} fontWeight={700}
                                                    style={{width: '75%'}}>Total price</Typography>
                                        <Typography fontSize={16} color={'#707070'} fontWeight={700}
                                                    style={{width: '25%'}}>${state.cart.cart.reduce((acc, item) => {
                                            return acc + item.price * item.quantity;
                                        }, 0).toFixed(2)}</Typography>
                                    </FlexRow>
                                </FlexColumn>
                            </FlexRow>

                            <FlexRow style={{justifyContent: 'center', marginTop: 30}}>
                                {state.orders.placeOrder.error && (
                                    <ErrorMessage>{state.orders.placeOrder.error}</ErrorMessage>
                                )}
                                <Button
                                    isLoading={state.orders.placeOrder.isLoading}
                                    onClick={() => dispatch(placeOrder(history))}
                                    text={'Place Order'}
                                    width={324}
                                    height={62}
                                    borderRadius={6}
                                    isGray={false} style={{margin: '20px 0px'}}/>
                            </FlexRow>
                        </RightOrderInformation>
                    </FlexRow>
                </FlexColumn>
            </InnerSection>
        </FlexBox>
    );
}

export default PlaceOrder;