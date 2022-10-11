import { Link } from 'react-router-dom';
import * as Styled from './Button.styled';

function Button({
    href,
    to,
    leftIcon,
    rightIcon,
    children,
    text = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    menu = false,
    ...props
}) {
    const className = [
        outline && 'outline',
        small && 'small',
        large && 'large',
        disabled && 'disabled',
        menu && 'menu',
        text && 'text',
    ];

    const handleButtonType = () => {
        // if (!href?.startsWith('http://') || !href?.startsWith('https://')) href = `http://${href}`;

        if (to) {
            return {
                as: Link,
                to,
            };
        } else if (href) {
            return {
                as: 'a',
                href,
            };
        }
    };

    return (
        <Styled.Button {...handleButtonType()} className={className} {...props}>
            {leftIcon && <Styled.LeftIcon>{leftIcon}</Styled.LeftIcon>}
            {children}
            {rightIcon && <Styled.LeftIcon>{rightIcon}</Styled.LeftIcon>}
        </Styled.Button>
    );
}

export default Button;
