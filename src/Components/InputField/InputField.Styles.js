import styled from 'styled-components';
import {Field} from "formik";

export const Input = styled(Field)`
  width: ${props=>props.width}px;
  height: 40px;
  border: 1px solid #242424;
  border-radius: 6px;
  opacity: 1;
  padding: 11px;
  background-color:${props=>props.color?props.color : '#FFFFFF'};
  
  &:focus::placeholder{
    outline: none;
  }
`