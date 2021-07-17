import styled from 'styled-components';
import {FlexRow, InnerSection} from "../../App.Styles";
import SearchIcon  from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #242424 0% 0% no-repeat padding-box;
  width: 100%;
  height: auto;
  height: 85px;
  opacity: 1;
`

export const NavInnerSection = styled(InnerSection)`
  flex-direction: row;
  justify-content: space-between;
`

export const NavBox = styled(FlexRow)`
  width: auto;
`

export const Logo = styled.img`
  width: 180px;
  height: 50px;
  object-fit: cover;
  
`

export const SearchInput = styled.input`
  height: 40px;
  width:550px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border:none;
  padding:12px 26px;
  &:focus{
    outline:none;
    border:none;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  width: 152px;
  height: 40px;
  background: #FCDD06 0% 0% no-repeat padding-box;
  border-radius: 6px;
  border: none;
  opacity: 1;
  cursor: pointer;
  color: ${props=>props.color};
  margin-left: 10px;
`

export const Icon = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  width: auto;
  margin: auto 0 auto 32px;
  span {
    color: #000;
    background: #fcdd06;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
`;

export const SearchIconStyled = styled(SearchIcon)`
  font-size: 18px;
  margin: 10px;
`