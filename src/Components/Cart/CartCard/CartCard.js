import {CartCounter, CartItem, CartItemImg, CounterMinusButton, CounterPlusButton} from "./CartCard.Styles";
import {FlexRow, Typography} from "../../../App.Styles";
import propTypes from "prop-types";

function CartCard({name, price, counter, increaseCounter, decreaseCounter, image, handleDelete}) {
    return (
        <CartItem style={{justifyContent: 'start'}}>
            <FlexRow style={{justifyContent: "flex-end"}}>
              <span style={{fontSize: 24, padding: 10, cursor: 'pointer'}} onClick={handleDelete}>
                X
              </span>
            </FlexRow>

            <FlexRow>
                <CartItemImg src={"https://proshop-ms.herokuapp.com/" + image} alt={name}/>
                <Typography fontSize={24} color={'#242424'} fontWeight={700}
                            style={{marginRight: 21, marginBottom: 100}}>{name}</Typography>
                <CartCounter  style={{marginRight: 50}}>

                    <CounterMinusButton
                        onClick={decreaseCounter}
                    >-</CounterMinusButton>
                    <Typography fontSize={24} color={'#242424'} fontWeight={700}>{counter}</Typography>
                    <CounterPlusButton
                        onClick={increaseCounter}
                    >+</CounterPlusButton>
                </CartCounter>
                <Typography fontSize={24} color={'#242424'} fontWeight={700}>${price}</Typography>
            </FlexRow>
        </CartItem>

    );
}

CartCard.propTypes = {
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    counter: propTypes.number.isRequired,
    price: propTypes.number.isRequired,
    increaseCounter: propTypes.func.isRequired,
    decreaseCounter: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired
};

CartCard.defaultProps = {
    handleDelete: () => {},
    increaseCounter: () => {},
    decreaseCounter: () => {},
    counter: 1,
};

export default CartCard;