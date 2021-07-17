import styled from "styled-components";
import {HeroBox, SideBox} from "../HomeScreen/HomePage.Styles";


export const ShoppingCartSection = styled(HeroBox)`
  align-items: start;
  height: auto;
`

export const CartSideBox = styled(SideBox)`
  width: ${props=>props.width}px;
  height: auto;
`

export const EmptyCardImg = styled.img`
  width: 458px;
  height: 371px;
  object-fit: contain;
`