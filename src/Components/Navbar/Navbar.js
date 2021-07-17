import React, {useState} from 'react';
import {
    Icon,
    Logo,
    NavBox,
    NavContainer,
    NavInnerSection,
    SearchButton,
    SearchIconStyled,
    SearchInput
} from "./Navbar.Styles";
import logo from '../../Assets/logo.png'
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "../../App.Styles";
import {logoutAction} from "../../Redux/User/userActions";
import {useHistory} from "react-router";

const Style = {
    fontSize: 25,
    color: "#FFF",
    fill: "#FFF",
    margin: "auto 0 10px 0",
};
function Navbar(props) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((store) => store);
    const history = useHistory();
    return (
        <NavContainer>
            <NavInnerSection>
                <NavBox>
                    <Link to={'/'}>
                        <Logo src={logo} alt='Logo'/>
                    </Link>
                </NavBox>
                <NavBox style={{background: '#fff', borderRadius: '6px'}}>
                    <SearchInput value={value} text='text' placeholder='Search' onChange={(e) => setValue(e.target.value)}/>
                    <SearchButton color={'#000'} onClick={()=>{
                        history.push(`/search${value ? `?keyword=${value}` : ""}`);
                    }}>
                        <SearchIconStyled />
                        Search
                    </SearchButton>
                </NavBox>
                <NavBox>
                    <Icon to={state.userDetails.user._id ? "/profile" : "/login"}>
                        <PersonIcon style={Style} />
                        {state.userDetails.user._id ? (
                            <Typography fontSize={"13px"} color={"#fff"}>
                                Profile
                            </Typography>
                        ) : (
                            <Typography fontSize={"13px"} color={"#fff"}>
                                Login / Sign up
                            </Typography>
                        )}
                    </Icon>

                    <Icon>
                        <span>0</span>
                        <BookmarkIcon style={Style} />
                        <Typography fontSize={"13px"} color={"#fff"}>
                            Wishlist
                        </Typography>
                    </Icon>

                    <Icon to={'/shoppingCart'}>
                        <span>0</span>
                        <ShoppingCartIcon style={Style}/>
                        <Typography fontSize={"13px"} color={"#fff"}>
                            Cart
                        </Typography>
                    </Icon>
                    {state.userDetails.user._id && (
                        <Icon
                            onClick={() => {
                                dispatch(logoutAction());
                                localStorage.removeItem("user");
                            }}
                        >
                            <ExitToAppIcon style={Style} />
                            <Typography fontSize={"13px"} color={"#fff"}>
                                Logout
                            </Typography>
                        </Icon>
                    )}
                </NavBox>
            </NavInnerSection>
        </NavContainer>
    );
}

export default Navbar;