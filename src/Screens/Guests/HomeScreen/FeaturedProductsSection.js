import React, {useState} from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, Typography} from "../../../App.Styles";
import {Divider, Dots} from "./HomePage.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import SwipeableViews from "react-swipeable-views";


const styles = {
    root: {
        position: "relative",
        width: "100%",
        height: 710,
    },
};

function FeaturedProductsSection({ products}) {
    const [sliderIndex, setSliderIndex] = useState(0);

    const chunkSize =
        window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;

    const handleChangeIndex = () => {};

    const getSlides = () => {
        const chunks = [];

        products.map((i, idx) => {
            if (idx % chunkSize === 0) {
                chunks.push([]);
            }

            const firstArrayLength = chunks.length;
            const secondArrayLength = chunks[firstArrayLength - 1].length;

            chunks[firstArrayLength - 1][secondArrayLength] = i;

            return i;
        });

        return chunks.map((i, idx) => (
            <FlexRow key={idx}>
                {i.map((item) => (
                    <ProductCard
                        product={item}
                        id={item._id}
                        key={item._id}
                        widthBorder={false}
                        image={"https://proshop-ms.herokuapp.com/" + item.image}
                        name={item.name}
                        // discount={0}
                        price={item.price}
                        rate={item.rating}
                    />
                ))}
            </FlexRow>
        ));
    };


    return (
        <FlexBox color={'#F7F8FC'}>
            <InnerSection style={{marginTop: 62}}>
                <FlexColumn>
                    <Typography fontSize={32} color={'#242424'} fontWeight={700} style={{marginBottom: 22}}>Featured
                        Products</Typography>
                    <Divider dividerWidth={200} dividerHeight={7} isYellow={true}/>
                    <Divider dividerWidth={1640} dividerHeight={2} isYellow={false} style={{marginBottom: 52}}/>
                </FlexColumn>

                <SwipeableViews
                    style={Object.assign({}, styles.root, styles.root)}
                    index={sliderIndex}
                    onChangeIndex={handleChangeIndex}
                >
                    {getSlides()}
                </SwipeableViews>

                <FlexRow style={{marginTop: 0, marginBottom: 80}}>
                    <Dots
                        size={14}
                        isGray={sliderIndex !== 0}
                        onClick={() => {
                            setSliderIndex(0)
                        }}
                    />
                    <Dots
                        size={14}
                        isGray={sliderIndex !== 1}
                        onClick={() => {
                            setSliderIndex(1)
                        }}
                    />
                    <Dots
                        size={14}
                        isGray={sliderIndex !== 2}
                        onClick={() => {
                        setSliderIndex(2)
                    }}/>
                </FlexRow>
            </InnerSection>
        </FlexBox>
    );
}

export default FeaturedProductsSection;