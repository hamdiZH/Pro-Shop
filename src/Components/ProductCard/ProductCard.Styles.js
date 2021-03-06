import styled from 'styled-components';
import {Link} from "react-router-dom";

export const CardContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 520px;
  height: 670px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  color: #242424;
  margin-bottom: 40px;

  ${(props) => (props.widthBorder ? "box-shadow: 0px 2px 20px #08091E1A;" : "")}
`

// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// width: 520px;
// height: 655px;
// background: #ffffff 0% 0% no-repeat padding-box;
// border-radius: 16px;
// opacity: 1;
// margin: 0 22px;
// padding: 34px 50px;
// color: #000000;
// ${(props) => (props.widthBorder ? "box-shadow: 0px 2px 20px #08091E1A;" : "")}
// `;

export const CardImage = styled.img`
  width: 513px;
  height: 342px;
  opacity: 1;
  object-fit: contain;
  margin-bottom: 24px;
  cursor: pointer;
`