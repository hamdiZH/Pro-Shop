import * as yup from 'yup';

export const LoginSchema = () => {
    return yup.object({
        email: yup.string().email('Please Enter a valid Email').required('Please Enter Email'),
        password: yup.string().min(6).required('Please Enter a password')

    })}

export const RegisterSchema = () => {
    return yup.object({
        name: yup.string().required("Please enter a name"),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Please enter an email"),
        password: yup.string().min(6).required("Please enter a password"),
        passwordConfirmation: yup
            .string()
            .min(6)
            .required("Please enter password confirmation")
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });
}

export const updateProfileSchema = () => {
    return yup.object({
        name: yup.string().required("Please enter a name"),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Please enter an email"),
        password: yup.string().min(6),
        passwordConfirmation: yup
            .string()
            .min(6)
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });
};

export const ReviewOrderSchema = () => {
    return yup.object({
        country:yup.string().required('Please Enter Country Name'),
        city:yup.string().required('Please Enter City Name'),
        address:yup.string().required('Please Enter Street Address'),
        postalCode:yup.number().required('Please Enter Zip Code'),
    });
};