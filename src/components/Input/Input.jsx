import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState, forwardRef } from 'react';
import * as Styled from './Input.styled';

const Input = forwardRef(
    (
        {
            placeholder = 'Type here to search',
            type = 'text',
            large = false,
            transparent = false,
            password = false,
            onClick,
            submitBtn,
            icon,
            ...props
        },
        ref,
    ) => {
        const [showPass, setShowPass] = useState(false);
        const handleShowPassword = () => setShowPass(!showPass);

        if (password) {
            placeholder = 'Enter your password';
            type = showPass ? 'text' : 'password';
            onClick = handleShowPassword;
        }

        const propsClassName = [transparent && 'transparent', large && 'large'];
        const Inputprops = { placeholder, type, large, transparent, ...props };
        return (
            <Styled.Wrapper className={propsClassName}>
                {icon && <Styled.Icon>{icon}</Styled.Icon>}
                <Styled.InputTag
                    className={propsClassName}
                    ref={ref}
                    {...Inputprops}
                    spellCheck={false}
                />
                {password && (
                    <Styled.Eye onClick={onClick}>
                        {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Styled.Eye>
                )}
                {submitBtn && <Styled.SubmitBtn>{submitBtn}</Styled.SubmitBtn>}
            </Styled.Wrapper>
        );
    },
);

export default Input;
