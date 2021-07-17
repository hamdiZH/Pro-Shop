import React from 'react';
import {FlexBox, FlexColumn, InnerSection, Typography} from "../../../App.Styles";
import {
    GrayContainer,
    ProfileSection,
    ProfileSideBox, ProfileText, UserInfoData,
    UserInfoElement
} from "./UserProfile.style";
import Button from "../../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../Redux/User/userActions";

function UserProfile() {
    const state = useSelector((store) => store);
    const dispatch = useDispatch();
    return (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <FlexColumn>
                    <ProfileSection style={{marginTop: 92}}>
                        <GrayContainer>
                            <Typography
                                style={{ marginBottom: 60, justifyContent: "start" }}
                                fontWeight={700}
                                fontSize={32}
                            >
                                {state.userDetails.user.name}
                            </Typography>
                            <ProfileText to={"/orders"}>My Orders</ProfileText>
                            <ProfileText to={""}>Settings</ProfileText>
                            <ProfileText
                                onClick={() => {
                                    dispatch(logoutAction());
                                    localStorage.removeItem("user");
                                }}
                                as={"span"}
                                style={{ marginTop: "auto", cursor: "pointer" }}
                            >
                                Logout
                            </ProfileText>
                        </GrayContainer>

                        <ProfileSideBox width={1050} flexDirection={'row'}>
                            <UserInfoElement>
                                <UserInfoData>
                                    <Typography fontSize={32} color={'#242424'} fontWeight={700} style={{justifyContent: 'start', marginBottom: 21}}>My Profile</Typography>
                                </UserInfoData>
                                <UserInfoData>
                                    <Typography fontSize={24} color={'#707070'} fontWeight={300}>Name</Typography>
                                    <Typography fontSize={24} color={'#000000'} fontWeight={700} style={{paddingRight: 381}}>{state.userDetails.user.name}</Typography>
                                </UserInfoData>
                                <UserInfoData>
                                    <Typography fontSize={24} color={'#707070'} fontWeight={300}>Email</Typography>
                                    <Typography fontSize={24} color={'#000000'} fontWeight={700} style={{paddingRight: 381}}>{state.userDetails.user.email}</Typography>
                                </UserInfoData>
                                <UserInfoData style={{justifyContent: 'start'}}>
                                    <Button
                                    text={'Update Profile'}
                                    link={'/update-profile'}
                                    width={324}
                                    height={62}
                                    borderRadius={10}
                                    isGray={false}
                                    style={{marginTop: 47}} />
                                </UserInfoData>
                            </UserInfoElement>
                        </ProfileSideBox>
                    </ProfileSection>
                </FlexColumn>
            </InnerSection>
        </FlexBox>
    );
}

export default UserProfile;