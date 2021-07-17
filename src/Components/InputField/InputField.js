import React from 'react';
import {Input} from "./InputField.Styles";

function InputField({width, style={}, name, type, placeholder, Required, color}) {
    return (
        <Input name={name} type={type} placeholder={placeholder} isRequired={Required} width={width} color={color} style={style} />
    );
}

export default InputField;