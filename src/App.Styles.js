import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: auto;
  max-width: 1920px;
  width: 100%;
  @media screen and (min-width: 1620px){
    margin: 0 auto;
  }
`
export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${props=>props.color};
`

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`

export const InnerSection = styled(FlexColumn)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  
`

export const Typography = styled.p`
  font-size: ${props=>props.fontSize}px;
  color: ${props=>props.color};
  font-weight: ${props=>props.fontWeight};
  //margin: 0px;
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #fcdd06;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  margin-top: 20%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const NumberInBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
  color: #242424;
  padding: 6px 14px;
  margin-left: 9px;
  font-weight: 700;
  font-size: 22px;
`


export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
`

export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#fcdd06")};
  color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 0 auto;
`;