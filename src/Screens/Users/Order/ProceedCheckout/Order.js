import React, {useEffect} from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, SpinnerContainer, Typography} from "../../../../App.Styles";
import {LeftOrderInformation, RightOrderInformation} from "../GlobalOrderStyle.Styles";
import OrderCard from "../../../../Components/OrderCard/OrderCard";
import {getOrderById, payOrder} from "../../../../Redux/Orders/ordersActions";
import {ErrorMessage, SuccessMessage} from "../../../Auth/Auth.Styles";
import {useDispatch, useSelector} from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";

function Order(props) {
    const state = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderById(props.match.params.id));
    }, [dispatch, props.match.params.id, state.orders.payOrder.success]);

    return state.orders.userOrder.isLoading ? (
        <SpinnerContainer/>) : state.orders.userOrder.error ? (
        <ErrorMessage>{state.orders.userOrder.error}</ErrorMessage>) : (

            <FlexBox color={'#FFFFFF'}>
                <InnerSection>
                    <FlexColumn>
                        <Typography style={{ justifyContent: "start", marginTop: "60px"}} fontSize="32" color="#242424" fontWeight="700">
                            Review Order
                        </Typography>
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
                                            style={{justifyContent: "start", marginBottom: "16px"}}>
                                    {state.orders.userOrder.order.shippingAddress.country}
                                    - {state.orders.userOrder.order.shippingAddress.city}
                                </Typography>

                                {state.orders.userOrder.order.isPaid ? (
                                    <SuccessMessage>Paid!</SuccessMessage>
                                ) : (
                                    <ErrorMessage>Not Paid</ErrorMessage>
                                )}
                                {state.orders.userOrder.order.isDelivered ? (
                                    <SuccessMessage>Delivered!</SuccessMessage>
                                ) : (
                                    <ErrorMessage>Not Delivered</ErrorMessage>
                                )}

                                <Typography fontSize="32" fontWeight="700"
                                            style={{justifyContent: "start", margin: 16}}>
                                    Order Details
                                </Typography>

                                {state.orders?.userOrder?.order?.orderItems?.map((item) => (
                                    <OrderCard
                                        key={item._id}
                                        src={"https://proshop-ms.herokuapp.com/" + item.image}
                                        itemName={item.name}
                                        itemPrice={item.price}
                                        itemQuantity={item.qty}
                                        orderItemTotalPrice={item.price * item.qty}
                                    />
                                ))}
                            </LeftOrderInformation>

                            <RightOrderInformation>
                                <FlexRow>
                                    <FlexColumn style={{alignItems: 'start'}}>
                                        <Typography fontSize={"32"} color={"#242424"} fontWeight={"bold"}
                                            style={{ marginBottom: "30px", justifyContent: "start" }}
                                        >
                                            Order Details
                                        </Typography>
                                        <FlexRow style={{ justifyContent: "space-between" }}>
                                            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                                                Subtotal
                                            </Typography>
                                            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                                                $
                                                {state.orders?.userOrder?.order?.orderItems
                                                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                                                    .toFixed(2)}
                                            </Typography>
                                        </FlexRow>
                                        <FlexRow style={{ justifyContent: "space-between" }}>
                                            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                                                Tax
                                            </Typography>
                                            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                                                $0
                                            </Typography>
                                        </FlexRow>
                                        <FlexRow style={{ justifyContent: "space-between" }}>
                                            <Typography
                                                style={{ justifyContent: "start" }}
                                                color={"#242424"}
                                                fontWeight={"bold"}
                                            >
                                                Shipping
                                            </Typography>
                                            <Typography
                                                style={{ justifyContent: "start" }}
                                                color={"#242424"}
                                                fontWeight={"bold"}
                                            >
                                                $
                                                {state.orders?.userOrder?.order?.orderItems
                                                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                                                    .toFixed(2)}
                                            </Typography>
                                        </FlexRow>
                                    </FlexColumn>
                                </FlexRow>
                                {!state.orders.userOrder.order.isPaid && (
                                    <FlexRow style={{ width: "100%", margin: "40px auto" }}>
                                        <PayPalButton
                                            amount={state.orders?.userOrder?.order?.orderItems
                                                .reduce((acc, item) => acc + item.price * item.qty, 0)
                                                .toFixed(2)}
                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                            onSuccess={(details, data) => {
                                                alert(
                                                    "Transaction completed by " + details.payer.name.given_name
                                                );

                                                // OPTIONAL: Call your server to save the transaction
                                                dispatch(
                                                    payOrder(props.match.params.id, {
                                                        email_address: details.payer.email_address,
                                                        status: details.status,
                                                        create_time: details.create_time,
                                                        update_time: details.update_time,
                                                        id: details.id,
                                                    })
                                                );
                                            }}
                                            onError={(error) => {
                                                console.log(error);
                                            }}
                                            options={{
                                                clientId:
                                                    "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                                            }}
                                        />
                                    </FlexRow>
                                )}
                            </RightOrderInformation>
                        </FlexRow>
                    </FlexColumn>
                </InnerSection>
            </FlexBox>
    );
}

export default Order;