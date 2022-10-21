import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState, forwardRef } from 'react';
import * as Styled from './Input.styled';

const Input = forwardRef(
    (
        {
            placeholder = 'Type here to search',
            type = 'text',
            large = false,
            background = false,
            password = false,
            confirmPassword = false,
            outline = false,
            onClick,
            submitBtn,
            icon,
            color,
            ...props
        },
        ref,
    ) => {
        const [showPass, setShowPass] = useState(false);
        const handleShowPassword = () => setShowPass(!showPass);

        if (password || confirmPassword) {
            placeholder = password ? 'Enter your password' : 'Confirm your password';
            type = showPass ? 'text' : 'password';
            onClick = handleShowPassword;
        }

        const propsClassName = [background && 'background', large && 'large', outline && 'outline'];
        const Inputprops = { placeholder, type, large, background, ...props };
        return (
            <Styled.Wrapper className={propsClassName}>
                {icon && <Styled.Icon>{icon}</Styled.Icon>}
                <Styled.InputTag
                    className={propsClassName}
                    ref={ref}
                    {...Inputprops}
                    spellCheck={false}
                />
                {(password || confirmPassword) && (
                    <Styled.Eye onClick={onClick}>
                        {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Styled.Eye>
                )}
                {submitBtn && <Styled.SubmitBtn>{submitBtn}</Styled.SubmitBtn>}
                {/* {color && (
                    <Styled.ColorInput
                        type="color"
                        width={50}
                        height={50}
                        value={inputColor}
                        onChange={(e) => setInputColor(e.target.value)}
                    />
                )} */}
            </Styled.Wrapper>
        );
    },
);

export default Input;
