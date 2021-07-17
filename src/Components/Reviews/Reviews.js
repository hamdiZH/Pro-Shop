import React from 'react';
import {RateBox, ReviewContainer, ReviewDescription, ReviewName, TextReviewDate} from "./Reviews.Styles";
import Rating from "@material-ui/lab/Rating";

function Reviews({name, text, rate, date}) {
    return (
        <ReviewContainer>
            <ReviewName>{name}</ReviewName>
            <RateBox>
                <Rating name="simple-controlled" value={rate} />
                <TextReviewDate>{date.substring(0, 10)}</TextReviewDate>
            </RateBox>
            <ReviewDescription>{text}</ReviewDescription>
        </ReviewContainer>
    );
}

export default Reviews;