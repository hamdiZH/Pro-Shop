import {
    FlexColumn,
    FlexRow,
    InnerSection,
    Line,
    Typography,
} from "../../../App.Styles";
import {Num} from "./GlobalOrderStyle.Styles";
import {useLocation} from "react-router";
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

function Payment(props) {
    const location = useLocation();
    const isShippingPage = location.pathname.includes("shipping-address");


    return (
        <InnerSection style={{margin: "44px 0 60px", alignItems: "flex-start"}}>
            <FlexColumn style={{alignItems: 'start'}}>
                <FlexRow style={{justifyContent: 'start'}}>
                    <Typography fontSize="32" color="#242424" fontWeight="700" style={{marginBottom: 16}}>
                        Review Order
                    </Typography>
                </FlexRow>
                <FlexRow style={{justifyContent: 'start'}}>
                    <Typography
                        fontSize={22}
                        color={"#242424"}
                    >
                        <Num>&nbsp; 1 &nbsp;</Num> Shipping and Payment
                    </Typography>
                    <Line width={180} style={{margin: '0px 10px'}}/>
                    <Typography
                        style={{justifyContent: "start"}}
                        fontSize={22}
                        color={"#707070"}
                    >
                        <Num isGray={isShippingPage}>&nbsp; 2 &nbsp;</Num> Place an Order
                    </Typography>
                </FlexRow>

                {isShippingPage ? <ReviewOrder/> : <PlaceOrder/>}
            </FlexColumn>
        </InnerSection>
    );
}

export default Payment;
