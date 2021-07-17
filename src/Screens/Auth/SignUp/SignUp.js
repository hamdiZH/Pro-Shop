import React from 'react';
import {FlexBox, InnerSection, Typography} from "../../../App.Styles";
import {AuthContainer, AuthImg, AuthSide, ErrorMessage, InputIdentification, LoginTitle} from "../Auth.Styles";
import {Formik, Form} from 'formik';
import InputField from "../../../Components/InputField/InputField";
import loginImage from '../../../Assets/Auth.png'
import Button from "../../../Components/Button/Button";
import {RegisterSchema} from "../../../Validation";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {registerAction} from "../../../Redux/User/userActions";
import {Link} from "react-router-dom";


function SignUp(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((store) => store);
    const userDetails = state.userDetails;
    const {error, isLoading} = userDetails;
    // const error = state.userDetails.error;
    // const isLoading = state.userDetails.isLoading;

    const handleSaveChanges = (values) => {
        dispatch(registerAction(values, history));
    }

    return (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <AuthContainer>
                    <AuthSide width={10}>
                        <LoginTitle style={{marginBottom: 16}}>Register</LoginTitle>
                        <Typography fontsize={32} color={'#707070'} fontWeight={400}
                                    style={{marginBottom: 32, width: 300}}>Login with your data that you entered during
                            registration</Typography>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                passwordConfirmation: ''
                            }}
                            validationSchema={RegisterSchema()}
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

                                        <Button isLoading={isLoading} text={'Register'} width={398} height={40} borderRadius={6}
                                                isGray={false} style={{margin: '30px 0px'}}/>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <Typography
                            fontSize={22}
                            color={"#707070"}
                            style={{
                                width: '290px',

                            }}
                        >
                            Have an account ? <Link to={"/login"} style={{
                            color: '#fcdd06',

                        }}>Login</Link>
                        </Typography>

                    </AuthSide>
                    <AuthSide width={70}>
                        <AuthImg src={loginImage} alt='Login image'/>
                    </AuthSide>
                </AuthContainer>
            </InnerSection>
        </FlexBox>
    );
}

export default SignUp;