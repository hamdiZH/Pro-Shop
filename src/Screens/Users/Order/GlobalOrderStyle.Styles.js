import styled from 'styled-components';
import {FlexColumn} from "../../../App.Styles";

export const LeftOrderInformation = styled(FlexColumn)`
  width: 67%;
  height: auto;
  padding: 45px 88px;
  background-color: #F2F2F2;
  margin-top: 36px;
  justify-content: start;
  align-items: start;
`

export const RightOrderInformation = styled(FlexColumn)`
  width: 25%;
  height: auto;
  padding: 35px 22px;
  background-color: #F2F2F2;
  margin-top: 36px;
  justify-content: start;
  align-items: start;
`

export const Num = styled.span`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.isGray ? "#707070" : "#FCDD06")};
  color: ${(props) => (props.isGray ? "#FFFFFF" : "#00000")};
  opacity: 1;
`;