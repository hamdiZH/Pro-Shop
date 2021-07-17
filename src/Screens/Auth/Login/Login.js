import {FlexBox, InnerSection, Typography} from "../../../App.Styles";
import {AuthContainer, AuthImg, AuthSide, ErrorMessage, InputIdentification, LoginTitle} from "../Auth.Styles";
import loginImage from '../../../Assets/Auth.png'
import {Formik, Form} from 'formik';
import {LoginSchema} from "../../../Validation";
import InputField from "../../../Components/InputField/InputField";
import Button from "../../../Components/Button/Button";
import {Divider} from "../../Guests/HomeScreen/HomePage.Styles";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../../Redux/User/userActions";

function Login() {

    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((store) => store);
    const error = state.userDetails.error;
    const isLoading = state.userDetails.isLoading;


    const handleSaveChanges = (values) => {
        dispatch(loginAction(values, history));
    }
    return (
        <FlexBox color={'#FFFFFF'}>
            <InnerSection>
                <AuthContainer>
                    <AuthSide width={10}>
                        <LoginTitle style={{marginBottom: 16}}>Login</LoginTitle>
                        <Typography fontsize={32} color={'#707070'} fontWeight={400}
                                    style={{marginBottom: 32, width: 300}}>Login with your data that you entered during
                            registration</Typography>

                        <Formik
                            initialValues={{email: '', password: ''}}
                            validationSchema={LoginSchema()}
                            onSubmit={handleSaveChanges}
                        >
                            {({errors, touched}) => {
                                return (
                                    <Form>
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
                                        {error? <ErrorMessage>{error}</ErrorMessage>: null}

                                            <Button isLoading={isLoading} text={'Login'} width={398} height={40} borderRadius={6}
                                                    isGray={false} style={{margin: '20px 0px'}}/>
                                    </Form>
                                );
                            }}
                        </Formik>

                        <Typography fontsize={22} color={'#242424'} fontWeight={300}
                                    style={{marginBottom: 16, width: 300}}>Forgot your password?</Typography>
                        <Divider dividerWidth={398} dividerHeight={2} styled={{marginBottom: 64}}/>
                        <Button link={"/register"} text={'Sign up now'} width={220} height={56} borderRadius={20} onClick={() => {
                        }} style={{
                            border: '3px solid #FCDD06',
                            margin: '20px 0px'
                        }}/>
                    </AuthSide>
                    <AuthSide width={70}>
                        <AuthImg src={loginImage} alt='Login image'/>
                    </AuthSide>
                </AuthContainer>
            </InnerSection>
        </FlexBox>
    );
}

export default Login;