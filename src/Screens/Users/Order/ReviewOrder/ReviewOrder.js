import React from 'react';
import {FlexColumn, FlexRow, Typography} from "../../../../App.Styles";
import {LeftOrderInformation, RightOrderInformation} from "../GlobalOrderStyle.Styles";
import {ReviewOrderSchema} from "../../../../Validation";
import {Form, Formik} from "formik";
import {ErrorMessage, InputIdentification} from "../../../Auth/Auth.Styles";
import InputField from "../../../../Components/InputField/InputField";
import Button from "../../../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {addShippingAddress} from "../../../../Redux/Cart/cartActions";

function ReviewOrder(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const history = useHistory();

    const handleSaveChanges = (value) => {
        dispatch(addShippingAddress(value));
        history.push('/proceed-checkout/place-order')
    }
    return (
        <FlexRow style={{justifyContent: "flex-start", alignItems: "flex-start", marginTop: 16}}>
            <Formik
                initialValues=
                    {{
                        country: state.cart.shippingAddress.country || '',
                        city: state.cart.shippingAddress.city || '',
                        postalCode: state.cart.shippingAddress.postalCode || '',
                        address: state.cart.shippingAddress.address || '',
                    }}
                validationSchema={ReviewOrderSchema()}
                onSubmit={handleSaveChanges}
            >

                {({errors, touched}) => {
                    return (
                        <Form>
                            <FlexRow style={{justifyContent: 'space-between', alignItems: 'start'}}>
                                <LeftOrderInformation style={{height: 500}}>
                                        <Typography fontSize="32" color={'#242424'} fontWeight="700" style={{marginBottom: 16}}>
                                            Shipping Address
                                        </Typography>
                                    <FlexRow>
                                        <FlexColumn style={{alignItems: 'start'}}>
                                            <InputIdentification>Country</InputIdentification>
                                            <InputField name={'country'} type={'text'}
                                                        placeholder='Enter your Country'
                                                        required={true} width={360} color={'#F2F2F2'}/>{
                                            errors.country && touched.country ?
                                                <ErrorMessage>
                                                    {errors.country}
                                                </ErrorMessage> :
                                                null
                                        }
                                            <InputIdentification style={{marginTop: 41}}>Zip Code</InputIdentification>
                                            <InputField name={'postalCode'} type={'number'} placeholder='Zip Code'
                                                        width={360} color={'#F2F2F2'}/>{
                                            errors.postalCode && touched.postalCode ?
                                                <ErrorMessage>
                                                    {errors.postalCode}
                                                </ErrorMessage> :
                                                null
                                        }
                                        </FlexColumn>
                                        <FlexColumn style={{alignItems: 'start', marginLeft: 54}}>
                                            <InputIdentification>City</InputIdentification>
                                            <InputField name={'city'} type={'text'} placeholder='Enter your City'
                                                        width={360} color={'#F2F2F2'}/>{
                                            errors.city && touched.city ?
                                                <ErrorMessage>
                                                    {errors.city}
                                                </ErrorMessage> :
                                                null
                                        }
                                            <InputIdentification style={{marginTop: 41}}>Street
                                                Address</InputIdentification>
                                            <InputField name={'address'} type={'text'} placeholder='Street Address'
                                                        width={360} color={'#F2F2F2'}/>{
                                            errors.address && touched.address ?
                                                <ErrorMessage>
                                                    {errors.address}
                                                </ErrorMessage> :
                                                null
                                        }
                                        </FlexColumn>
                                    </FlexRow>
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
                                        <Button link={''} text={'Review order'} width={324} height={62} borderRadius={6}
                                                isGray={false} style={{margin: '20px 0px'}}/>
                                    </FlexRow>
                                </RightOrderInformation>
                            </FlexRow>
                        </Form>
                    );
                }}
            </Formik>
        </FlexRow>
    );
}

export default ReviewOrder;