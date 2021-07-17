import React, {useEffect, useState} from 'react';
import {FlexBox, FlexColumn, FlexRow, InnerSection, SpinnerContainer, Typography} from "../../../App.Styles";
import {SideBox} from "../HomeScreen/HomePage.Styles";
import {ProductContainer, ProductImage, StyledTextArea, Title} from "./ProductScreen.Styles";
import {CartCounter, CounterMinusButton, CounterPlusButton} from "../../../Components/Cart/CartCard/CartCard.Styles";
import Button from "../../../Components/Button/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Reviews from "../../../Components/Reviews/Reviews";
import FeaturedProductsSection from "../HomeScreen/FeaturedProductsSection";
import {useDispatch, useSelector} from "react-redux";
import {getFeaturedProducts, getProduct} from "../../../Redux/Guest/guestActions";
import {useHistory, useParams} from "react-router";
import {addCartItem} from "../../../Redux/Cart/cartActions";
import {useLocationWithQuery} from "react-router-query-hooks";
import Rating from "@material-ui/lab/Rating";
import {ErrorMessage, SuccessMessage} from "../../Auth/Auth.Styles";
import {addReviewAction} from "../../../Redux/User/userActions";
import {ADD_REVIEW_RESET, ADD_REVIEW_TO_PRODUCT} from "../../../Redux/User/userTypes";

function ProductScreen(props) {
    const locationQuery = useLocationWithQuery();
    const {
        query: {review: reviewFromQuery, rating: ratingFromQuery},
    } = locationQuery
    const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
    const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
    const [count, setCount] = useState(1);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const state = useSelector((store) => store);
    const params = useParams();
    const history = useHistory();
    const product = state.guestState.product;

    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        dispatch({
            type: ADD_REVIEW_RESET,
        });
        dispatch(getFeaturedProducts());
        dispatch(getProduct(params.id));
    }, [dispatch, params.id]);

    useEffect(() => {
        if (state?.userDetails?.addReview?.success) {
            dispatch({
                type: ADD_REVIEW_TO_PRODUCT,
                payload: {
                    comment: review,
                    rating,
                    createdAt: new Date().toString(),
                    name: state?.userDetails.user.name,
                },
            });
            setError("");
            setReview("");
            setRating(0);
        }
    }, [
        dispatch,
            rating,
            review,
            state?.userDetails?.addReview?.success,
            state?.userDetails?.user.name,
        ]);

    return state.guestState.isLoading || product.isLoading ? (
        <SpinnerContainer/>
    ) : (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <FlexRow style={{justifyContent: 'start', margin: 30}}>
                <Title>
                    <span
                        style={{color: "#707070", marginRight: 5, cursor: "pointer"}}
                        onClick={goBack}
                    >
                      Back{" "}
                    </span>{" "}
                    /{product.product.name}
                </Title>
                </FlexRow>
                <ProductContainer>
                    <SideBox width={25} style={{justifyContent: 'start'}}>
                        <FlexRow>
                            <ProductImage src={"https://proshop-ms.herokuapp.com/" + product.product.image}/>
                        </FlexRow>
                    </SideBox>
                    <SideBox width={75} style={{marginLeft: 31, justifyContent: 'start'}}>
                        <FlexRow>
                            <Typography fontSize={32} color={'#242424'} fontWeight={700}
                                        style={{width: '80%'}}>{product.product.name}</Typography>
                            <Typography fontSize={32} color={'#242424'} fontWeight={700}
                                        style={{width: '20%'}}>${product.product.price}</Typography>
                        </FlexRow>
                        <FlexRow style={{justifyContent: 'start', marginTop: 30}}>
                            <CartCounter>
                                <CounterMinusButton
                                    onClick={() => {
                                        if (count > 1) setCount(count - 1);
                                    }}
                                >-</CounterMinusButton>
                                <Typography fontSize={24} color={'#242424'} fontWeight={700}>{count}</Typography>
                                <CounterPlusButton
                                    onClick={() => {
                                        if (count < product.product.countInStock)
                                            setCount(count + 1);
                                    }}
                                >+</CounterPlusButton>
                            </CartCounter>
                        </FlexRow>
                        <FlexRow style={{justifyContent: 'start', marginTop: 30}}>
                            <Button width={50} height={50} borderRadius={'50'} style={{background: '#ffdae0'}}/>
                            <Button width={50} height={50} borderRadius={'50'}
                                    style={{background: '#e5e5e5', margin: '0px 50px'}}/>
                            <Button width={50} height={50} borderRadius={'50'} style={{background: '#afafaf'}}/>
                        </FlexRow>
                        <FlexRow style={{marginTop: 30, justifyContent: 'flex-end'}}>
                            <Button text={<BookmarkBorderIcon/>} width={62} height={62}
                                    style={{border: '#FCDD06 solid', background: '#FFFFFF'}}/>
                            <Button link={'/shoppingCart'} text={'Add To Cart'} borderRadius={10} width={324} height={62} disabled={product.product.countInStock}
                                    style={{marginLeft: 30}} onClick={() => {
                                if (product.product.countInStock)
                                    dispatch(addCartItem(product.product, count));
                            }}/>
                        </FlexRow>
                        <FlexRow style={{marginTop: 40}}>
                            <Typography fontSize={16} color={'#242424'} fontWeight={400}>
                                {product.product.description}
                            </Typography>
                        </FlexRow>
                    </SideBox>
                </ProductContainer>

                {product.product?.reviews?.length > 0 && (
                    <FlexColumn style={{ alignItems: "flex-start" }}>
                        <Typography fontSize="32" fontWeight="700" style={{ marginBottom: 30, marginTop: 150, justifyContent: "start" }}>
                            Reviews
                        </Typography>
                        <FlexColumn style={{border: '1px solid #bcbcbc', padding: '0 51px 15px 51px', alignItems: "start"}}>
                            <Typography fontSize="32" fontWeight="700" style={{ marginBottom: 30, marginTop: 150, justifyContent: "start" }}>
                                Add Review
                            </Typography>

                            <StyledTextArea type="text" placeholder={"Add Your Review ..."} required={true} onChange={(e) => setReview(e.target.value)} value={review}/>
                            <Rating style={{margin: "0px 20px 20px"}} onChange={(e, value) => {
                                setRating(value);
                            }}
                            value={rating}
                            defaultValue={props.rate}
                            name="simple-controlled"
                            />
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                            {state?.useDetails?.addReview?.error && (
                                <ErrorMessage>
                                    {state?.userDetails?.addReview?.error}
                                </ErrorMessage>
                            )}
                            {state?.userDetails?.addReview?.success && (
                                <SuccessMessage>
                                    {state?.userDetails?.addReview?.success}
                                </SuccessMessage>
                            )}
                            <FlexRow style={{justifyContent: "start"}}>
                                <Button text={"Submit"} link={
                                    state?.userDetails.user.name ? "" : `/login?pathname=${props.location.pathname}&rating=${rating}&review=${review}`
                                }
                                        onClick={
                                            state?.userDetails.user.name ? () => {
                                                dispatch(
                                                    addReviewAction({
                                                        comment: review,
                                                        rating,
                                                    },
                                                    product.product._id
                                                    )
                                                );
                                                if (review && rating) {
                                                } else
                                                    setError("Please write a comment and add rating");
                                            } : () => {}
                                        }
                                        isLoading={state?.userDetails?.addReview?.isLoading}
                                        borderRadius={10}
                                        width={220}
                                        height={56}
                                />
                            </FlexRow>
                            {product.product?.reviews?.map((item) => (
                                <Reviews
                                    name={item.name}
                                    text={item.comment}
                                    date={item.createdAt}
                                    rate={item.rating}
                                />
                            ))}
                        </FlexColumn>
                    </FlexColumn>
                )}
                <FeaturedProductsSection products={state.guestState.products.products || []}/>

            </InnerSection>
        </FlexBox>
    );
}

export default ProductScreen;