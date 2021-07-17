import React, {useEffect} from 'react';
import {FlexBox, InnerSection, SpinnerContainer} from "../../../App.Styles";
import {AuthContainer, AuthSide, ErrorMessage, InputIdentification, LoginTitle} from "../../Auth/Auth.Styles";
import {Form, Formik} from "formik";
import {updateProfileSchema} from "../../../Validation";
import InputField from "../../../Components/InputField/InputField";
import Button from "../../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getProfileAction, updateProfileAction} from "../../../Redux/User/userActions";
import {useHistory} from "react-router";

function UpdateProfile(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((store) => store);
    const userDetails = state.userDetails;
    const { error, isLoading } = userDetails;

    const handleSaveChanges =(values)=> {
        dispatch(updateProfileAction(values, history))
    }

    useEffect(()=>{
        dispatch(getProfileAction());
    }, [dispatch]);

    return state.userDetails.userProfile?.isLoading? (
        <SpinnerContainer />
    ) : (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <AuthContainer>
                    <AuthSide width={10}>
                        <LoginTitle style={{marginBottom: 16}}>Update Profile</LoginTitle>
                        <Formik
                            initialValues={{
                                name: state.userDetails.userProfile?.user?.name,
                                email: state.userDetails.userProfile?.user?.email,
                                password: '',
                                passwordConfirmation: ''
                            }}
                            validationSchema={updateProfileSchema()}
                            onSubmit={handleSaveChanges}
                        >
                            {({errors, touched}) => {
                                return (
                                    <Form>
                                        <InputIdentification>Enter your name</InputIdentification>
                                        <InputField name={'name'} type={'name'} placeholder='Enter Your Name'
                                                    required={true} width={398}/>{
                                        errors.name && touched.name ?
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage> :
                                            null
                                    }
                                        <br/>
                                        <br/>

                                        <InputIdentification>Enter your email address</InputIdentification>
                                        <InputField name={'email'} type={'email'} placeholder='name@example.com'
                                                    required={true} width={398}/>{
                                        errors.email && touched.email ?
                                            <ErrorMessage>
                                                {errors.email}
                                            </ErrorMessage> :
                                            null
                                    }
                                        <br/>
                                        <br/>
                                        <InputIdentification>Enter your password</InputIdentification>
                                        <InputField name={'password'} type={'password'} placeholder='******'
                                                    width={398}/>{
                                        errors.password && touched.password ?
                                            <ErrorMessage>
                                                {errors.password}
                                            </ErrorMessage> :
                                            null
                                    }

                                        <br/>
                                        <br/>
                                        <InputIdentification>Enter password confirmation</InputIdentification>
                                        <InputField name={"passwordConfirmation"}
                                                    type={"password"}
                                                    placeholder={"Confirmation password"}
                                                    style={{width: '100%'}}
                                        />
                                        {errors.passwordConfirmation && touched.passwordConfirmation ? (
                                            <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
                                        ) : null}

                                        {error ? <ErrorMessage>{error}</ErrorMessage> : null}

                                        <Button link={'profile'} isLoading={isLoading} text={'Update'} width={398} height={40} borderRadius={6}
                                                isGray={false} style={{margin: '30px 0px'}}/>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </AuthSide>
                </AuthContainer>
            </InnerSection>
        </FlexBox>
    );
}

export default UpdateProfile;