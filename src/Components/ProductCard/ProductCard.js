import {CardContainer, CardImage} from "./ProductCard.Styles";
import {FlexColumn, FlexRow, Typography} from "../../App.Styles";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from "../Button/Button";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {useDispatch} from "react-redux";
import {addCartItem} from "../../Redux/Cart/cartActions";


function ProductCard(props) {
    const dispatch = useDispatch();

    return (
        <CardContainer widthBorder={props.widthBorder}
            to={`/product/${props.id}/${props.name}`}
            style={{marginRight: 20}}>
            <FlexColumn>
                <CardImage src={props.image} alt={props.name}/>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                    <Typography fontSize={24} color={'#242424'} fontWeight={400} style={{marginBottom: 18}}>{props.name}</Typography>
                    <Rating name="read-only" value={props.rate} readOnly />
                </Box>

                <FlexRow
                    style={{
                        marginBottom: 18,
                        // justifyContent: "space-between",
                        maxWidth: "40%",
                    }}
                >
                    {/*{props.discount && (*/}
                    {/*    <Typography color={"#FC4059"} fontSize={30}>*/}
                    {/*        $ {props.discount}*/}
                    {/*    </Typography>*/}
                    {/*)}*/}
                    <Typography
                        fontSize={30}
                        fontWeight={700}
                        style={{ textDecoration: props.discount&&"line-through" }}
                    >
                        ${props.price}
                    </Typography>
                </FlexRow>

                <FlexRow>
                    <Button text={<BookmarkBorderIcon />} isGray={true} width={62} height={62} borderRadius={10} onClick={()=>{}}/>
                    <Button
                        disabled={props.product.countInStock}
                        text={'Add to cart'}
                        isGray={true}
                        width={324}
                        height={62}
                        borderRadius={10}
                        link={"/shoppingCart"}
                        style={{marginLeft: 20}}
                        onClick={()=>{
                             if (props.product.countInStock)
                                 dispatch(addCartItem(props.product, 1))
                        }}/>
                </FlexRow>

            </FlexColumn>
        </CardContainer>
    );
}

export default ProductCard;