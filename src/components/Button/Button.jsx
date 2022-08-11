import { Link } from 'react-router-dom';
import * as Styled from './Button.styled';

function Button({
    href,
    to,
    leftIcon,
    rightIcon,
    children,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    menu = false,
    onClick,
}) {
    const className = [
        outline && 'outline',
        small && 'small',
        large && 'large',
        disabled && 'disabled',
        menu && 'menu',
    ];

    const handleButtonType = () => {
        if (to) {
            return {
                as: Link,
                to: to,
            };
        } else if (href) {
            return {
                as: 'a',
                href: href.startsWith('https://') ? href : `https://${href}`,
            };
        }
    };

    return (
        <Styled.Button {...handleButtonType()} onClick={onClick} className={className}>
            {leftIcon && <Styled.LeftIcon>{leftIcon}</Styled.LeftIcon>}
            {children}
            {rightIcon && <Styled.LeftIcon>{rightIcon}</Styled.LeftIcon>}
        </Styled.Button>
    );
}

export default Button;
