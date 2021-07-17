import styled from 'styled-components';
import {FlexColumn, FlexRow} from "../../../../App.Styles";
import {SideBox} from "../../../Guests/HomeScreen/HomePage.Styles";

export const PaymentSuccessContainer = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  width: 1640px;
  height: 372px;
  background: #F2F2F2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
`


export const PaymentInfoBox = styled(FlexRow)`
  justify-content: space-between;
  align-items: start;
  width: ${props=>props.width}px;
`

export const PaymentInfoSideBox  = styled(SideBox)`
  width: 40%;
`

