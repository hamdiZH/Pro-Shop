import styled from 'styled-components';
import {HeroBox} from "../HomeScreen/HomePage.Styles";
import {FlexRow, Typography} from "../../../App.Styles";

export const ProductContainer = styled(HeroBox)`
  justify-content: space-between;
  align-items: start;
  height: auto;
`

export const Title = styled(Typography)`
  margin: 0 0 56px 0;
  font-size: 24px;
  justify-content: start;
`;

export const ProductImage = styled.img`
  width:${props=>props.width?props.width : 401}px;
  height:${props=>props.height?props.height : 401}px;
`

// export const FlexColWhite = styled(FlexColumn)`
//   align-items: flex-start;
//   border: 1px solid #bcbcbc;
//   padding: 0 51px 15px 51px;
// `;

export const CardsBox = styled(FlexRow)`
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  width: 94vw;
  max-width: 1800px;
  margin-top: 50px;
  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 20px 0;
  padding: 20px;
  resize: vertical;
`;