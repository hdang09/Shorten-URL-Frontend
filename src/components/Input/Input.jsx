import { useState } from 'react';
import { InputTag, Eye, Wrapper } from './Input.styled';

function Input({
    placeholder = 'Type here to search',
    type = 'text',
    large = false,
    transparent,
    password = false,
    onClick,
}) {
    const [showPass, setShowPass] = useState(false);
    const handleShowPassword = () => setShowPass(!showPass);

    if (password) {
        placeholder = 'Enter your password';
        type = showPass ? 'text' : 'password';
        onClick = handleShowPassword;
    }

    const props = { placeholder, type, large, transparent };
    return (
        <Wrapper>
            <InputTag {...props} spellCheck={false} />
            {password && <Eye onClick={onClick}>eye</Eye>}
        </Wrapper>
    );
}

export default Input;
