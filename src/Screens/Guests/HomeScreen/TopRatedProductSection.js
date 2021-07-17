import React from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, Typography} from "../../../App.Styles";
import {Divider} from "./HomePage.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";

function TopRatedProductSection({topRatedProducts}) {
    return (
        <FlexBox color={'#FFFFFF'} style={{marginBottom: 142}}>
            <InnerSection>
                <FlexColumn style={{margin: 63, alignItems: 'start'}}>
                    <Typography fontSize={32} color={'#242424'} fontWeight={700}>TOP RATE PRODUCTS</Typography>
                    <Divider dividerWidth={200} dividerHeight={7} isYellow={true}/>
                    <Divider dividerWidth={1640} dividerHeight={2} isYellow={false}/>
                </FlexColumn>

                <FlexColumn style={{padding: 20,border: '1px solid #FCDD06'}}>
                    <FlexRow style={{marginTop: 20}}>
                    {topRatedProducts.map((item) => (
                        <ProductCard
                            product={item}
                            id={item._id}
                            key={item._id}
                            widthBorder={true}
                            image={"https://proshop-ms.herokuapp.com/" + item.image}
                            name={item.name}
                            // discount={0}
                            price={item.price}
                            rate={item.rating}
                            />
                    ))}
                    </FlexRow>
                </FlexColumn>
            </InnerSection>

        </FlexBox>
    );
}

export default TopRatedProductSection;