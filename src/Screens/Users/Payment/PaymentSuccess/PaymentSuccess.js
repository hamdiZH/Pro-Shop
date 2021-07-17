import React from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, Typography} from "../../../../App.Styles";
import {PaymentInfoBox, PaymentInfoSideBox, PaymentSuccessContainer} from "./PaymentSucess.Styles";
import TopRatedProductSection from "../../../Guests/HomeScreen/TopRatedProductSection";
import Button from "../../../../Components/Button/Button";

// function PaymentSuccess({text, orderNumber, shippingAddress, orderItem}) {
function PaymentSuccess() {
    return (
        <FlexBox>
            <InnerSection>
                <FlexColumn>
                    <PaymentSuccessContainer style={{marginTop: 92}}>
                        <Typography fontSize={40} color={'#242424'} fontWeight={700}>Payment Success !</Typography>
                        <PaymentInfoBox width={1000}>
                            <PaymentInfoSideBox>
                                <PaymentInfoBox width={500}>
                                    <Typography fontSize={32} color={'#242424'} fontWeight={700}>Order
                                        number</Typography>
                                    <Typography fontSize={16} color={'#242424'}
                                                fontWeight={700}>65AS1D56ASD156DS</Typography>
                                </PaymentInfoBox>
                                <PaymentInfoBox width={500}>
                                    <Typography fontSize={32} color={'#242424'} fontWeight={700}>Shipping Address</Typography>
                                    <Typography fontSize={16} color={'#242424'} fontWeight={700}>56051 Jones Falls, Philippines, Turkey - 62502</Typography>
                                </PaymentInfoBox>
                                <PaymentInfoBox width={500}>
                                    <Typography fontSize={32} color={'#242424'} fontWeight={700}>Order Items</Typography>
                                    <Typography fontSize={16} color={'#242424'} fontWeight={700}>56051 Jones Falls, Philippines, Turkey - 62502</Typography>
                                </PaymentInfoBox>
                            </PaymentInfoSideBox>
                        </PaymentInfoBox>
                        <Typography fontSize={16} color={'#242424'} fontWeight={300}>An email will be sent to
                            your email address contains order confirmation and tacking code.</Typography>

                    </PaymentSuccessContainer>
                    <FlexRow  style={{justifyContent: 'flex-end', marginTop: 30}}>
                        <Button text={'Keep Shopping'} width={354} height={62} isGray={false} borderRadius={10} onClick={()=>{}} style={{}}/>
                    </FlexRow>

                    <TopRatedProductSection text={'Recently viewed'}/>
                </FlexColumn>
            </InnerSection>
        </FlexBox>
    );
}

export default PaymentSuccess;