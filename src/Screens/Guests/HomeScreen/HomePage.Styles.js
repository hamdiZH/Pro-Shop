import styled from 'styled-components';
import {FlexBox, FlexColumn, FlexRow} from "../../../App.Styles";

export const HeroBox = styled(FlexRow)`
  justify-content: space-between;
  height: 678px;
`
export const SideBox = styled(FlexColumn)`
  width:${props=>props.width?props.width : 40}%;
  align-items: start;
  height: 100%;
  
`

export const HeroTitle = styled.h1`
  font-size: 60px;
  letter-spacing: 2.4px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
`

export const SliderImage = styled.img`
  width: 580px;
  height: 520px;
  object-fit: contain;

`

export const Arrow = styled(FlexBox)`
  font-size: 30px;
  margin: 0 23.5px;
  color: #000;
  width: 30px;
  font-weight: 700;
  cursor: pointer;

  ${
    props => props.isLeft ? "transform: rotate(-180deg);" : ""
}
`
export const Dots = styled.div`
  width: ${props=> props.size}px;
  height: ${props=>props.size}px;
  background: ${props=>props.isGray? '#70707030' : '#FCDD06' }  0% 0% no-repeat padding-box;
  border-radius: 50%;
  margin: 0 10.5px;
  cursor: pointer;
`

export const Divider = styled.hr`
  width: ${props=>props.dividerWidth}px;
  height: ${props=>props.dividerHeight}px;
  background: ${props=>props.isYellow? '#FCDD06' : '#70707030'} 0% 0% no-repeat padding-box;
  border: none;
`



