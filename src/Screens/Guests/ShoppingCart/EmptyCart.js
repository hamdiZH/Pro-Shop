import React from 'react';
import {FlexBox, FlexRow, InnerSection} from "../../../App.Styles";
import {EmptyCardImg} from "./ShoppingCart.Styles";
import emptyCart from '../../../Assets/emptyshoppingcart.png'
import TopRatedProductSection from "../HomeScreen/TopRatedProductSection";

function EmptyCart() {
    return (
        <FlexBox>
            <InnerSection>
                <FlexRow>
                    <EmptyCardImg src={emptyCart} alt={'empty cart'}/>
                </FlexRow>
                <FlexRow>
                    <TopRatedProductSection text={'Recently viewed'} />
                </FlexRow>
            </InnerSection>
        </FlexBox>
    );
}

export default EmptyCart;