import React from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, Typography} from "../../../App.Styles";
import {Divider} from "../../Guests/HomeScreen/HomePage.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";

function FeaturedProducts(props) {
    return (
        <FlexBox color={'#F7F8FC'}>
            <InnerSection style={{marginTop: 62}}>
                <FlexColumn>
                    <Typography fontSize={32} color={'#242424'} fontWeight={700} style={{marginBottom: 22}}>Featured
                        Products</Typography>
                    <Divider dividerWidth={200} dividerHeight={7} isYellow={true}/>
                    <Divider dividerWidth={1640} dividerHeight={2} isYellow={false}/>
                </FlexColumn>

                <FlexRow style={{margin : 43, alignItems: 'start', justifyContent:'start'}}>
                    <ProductCard text={'Apple iPhone 11 Pro 256GB Memory'} price={'499'}/>
                </FlexRow>
            </InnerSection>
        </FlexBox>
    );
}

export default FeaturedProducts;