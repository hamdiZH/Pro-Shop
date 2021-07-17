import styled from 'styled-components';
import {Link} from "react-router-dom";


export const CustomButton=styled(Link)`
  display: flex;
  justify-content: center;
  align-items:center;
  background: ${props=>props.isGray?"#F2F2F2":"#FCDD06"};
  color:#242424;
  width:${props=>props.width}px;
  height: ${props=>props.height}px;
  border-radius:${props=>props.borderRadius?props.borderRadius : 10}px;
  border:none;
  font-size:24px;
  cursor: pointer;

  ${(props) =>
          props.disabled
                  ? `
        background:gray;
        color:white;
        cursor: none;
  `
                  : ""}

`;