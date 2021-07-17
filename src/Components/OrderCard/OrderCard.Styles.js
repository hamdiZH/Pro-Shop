import styled from 'styled-components';
import {FlexColumn} from "../../App.Styles";

export const OrderItem = styled(FlexColumn)`
  min-height: 96px;
  margin-bottom: 38px;
`;

export const OrderItemImage = styled.img`
  width: 135px;
  height: 90px;
  object-fit: contain;
`;

export const OrderItemInfo = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-start;
  min-height: 96px;
  width: 316px
`;