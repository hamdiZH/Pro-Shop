import styled from 'styled-components';
import {FlexColumn, FlexRow} from "../../../App.Styles";
import {HeroBox, SideBox} from "../../Guests/HomeScreen/HomePage.Styles";
import {Link} from "react-router-dom";

export const ProfileSection = styled(HeroBox)`
  justify-content: space-between;
  align-items: start;
  height: 528px;
`

export const ProfileSideBox = styled(SideBox)`
  width: ${props=>props.width}px;
  height: 580px;
  background: #F2F2F2;
  border-radius: 16px;
  margin-right: 130px;
  justify-content: start;
  align-items: start;
  flex-direction: ${props=>props.flexDirection};
`

export const ProfileImg = styled.img`
  width: 137px;
  height: 137px;
  border: 2px solid #FCDD06;
  opacity: 1;
  object-fit: contain;
  border-radius: 50%;
  margin-left: 16px;
  margin-top: 20px;
`

export const ProfileText = styled(Link)`
  font-size: 24px;
  margin-bottom: 30px;
  color: ${(props) => (props.isGray ? "#707070" : "#242424")};
  display: flex;
  justify-content: start;
  align-items: start;
  width: auto;
`;

export const GrayContainer = styled(FlexColumn)`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  width: ${(props) => (props.isBig ? "950px" : "398px")};
  height: 380px;
  padding: 1% 2%;
  margin-right: 32px;
  justify-content: start;
  align-items: start;
`;

export const StyledRow = styled(FlexRow)`
  justify-content: start;
`;

export const UserInfoElement = styled(FlexColumn)`
  margin-top: 25px;
  padding: 20px
`

export const UserInfoData = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 44px;
`