import {CustomButton} from "./Button.Styles";


const Button = ({
                    text,
                    onClick = () => {
                    },
                    isGray,
                    width,
                    height,
                    borderRadius,
                    style = {},
                    isLoading,
                    link = ""
                }) => {
    return (
        <CustomButton
            to={link}
            as={link ? "" : "button"}
            disabled={isLoading}
            onClick={onClick}
            isGray={isGray}
            width={width}
            height={height}
            borderRadius={borderRadius}
            style={style}
        >
            {text}
        </CustomButton>
    );
}

export default Button;


// const Button = ({
//                     text,
//                     onClick = () => {},
//                     isGray,
//                     width,
//                     borderRadius,
//                     style={},
//                 }) => {
//
//     return (
//         <CustomButton
//             onClick={onClick}
//             isGray={isGray}
//             width={width}
//             borderRadius={borderRadius}
//             style={style}
//         >
//             {text}
//         </CustomButton>
//     );
// };
//
// export default Button;