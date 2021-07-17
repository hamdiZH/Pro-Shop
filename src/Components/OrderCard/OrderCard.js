import React from 'react';
import {OrderItem, OrderItemImage, OrderItemInfo} from "./OrderCard.Styles";
import {FlexRow, Typography} from "../../App.Styles";

function OrderCard({src, itemName, itemPrice, itemQuantity, orderItemTotalPrice}) {
    return (
        <OrderItem>
            <FlexRow style={{ justifyContent: "flex-start" }}>
                <OrderItemImage src={src}/>
                <OrderItemInfo>
                    <Typography fontSize={16} color={"#707070"} fontWeight={400}>
                        {itemName}
                    </Typography>
                    <FlexRow style={{justifyContent: 'flex-start'}}>
                        <FlexRow style={{justifyContent: 'flex-start'}}>
                            <Typography fontSize={15} color={"#707070"} fontWeight={400} style={{marginRight: 18}}>
                                {itemPrice}
                            </Typography>
                            <Typography fontSize={15} color={"#707070"} fontWeight={400} style={{marginRight: 18}}>
                                x{itemQuantity}
                            </Typography>
                        </FlexRow>
                        <Typography fontSize={15} color={"#707070"} fontWeight={400}>
                            ${orderItemTotalPrice}
                        </Typography>
                    </FlexRow>
                </OrderItemInfo>
            </FlexRow>
        </OrderItem>
    );
}

export default OrderCard;