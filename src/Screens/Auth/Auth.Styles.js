import styled from 'styled-components';
import {HeroTitle, SideBox} from "../Guests/HomeScreen/HomePage.Styles";
import {FlexRow} from "../../App.Styles";

export const AuthContainer = styled(FlexRow)`
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: auto;
  margin-top: 44px;
`

export const AuthSide = styled(SideBox)`
  width: ${props=>props.width}%;
  align-items: start;
  justify-content: start;
  height: 100%;
`

export const LoginTitle = styled(HeroTitle)`
  text-transform: none;
`

export const InputIdentification = styled.span`
  font-size: 22px;
  text-align: left;
  letter-spacing: 0.88px;
  color: #242424;
  opacity: 1;
`

export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  min-height: 60px;
  color: red;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 16px;
`

export const SuccessMessage = styled(ErrorMessage)`
  color: green;
  background: lightgreen;
`;

export const AuthImg = styled.img`
  width: 100%;
  height: 770px;
  opacity: 1;
  object-fit: contain;
`
