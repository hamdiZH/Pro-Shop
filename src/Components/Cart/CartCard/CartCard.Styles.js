import styled from 'styled-components'
import {FlexColumn, FlexRow} from "../../../App.Styles";

export const CartItem = styled(FlexColumn)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 282px;
  background: #F2F2F2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  padding: 0 35px;
  margin-bottom: 30px;
`

export const CartItemImg = styled.img`
  width: 304px;
  height: 203px;
  margin: 13px 21px 0px 18px;
  object-fit: contain;
`

export const CartCounter = styled(FlexRow)`
  justify-content: space-between;
  width: 204px;
  height: 40px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
`

export const CounterMinusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 40px;
  border: 1px solid #FCDD06;
  opacity: 0.3;
  cursor: pointer;
`

export const CounterPlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 40px;
  border: 1px solid #FCDD06;
  opacity: 1;
  cursor: pointer;
`
