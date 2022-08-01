import { Link } from 'react-router-dom';
import MyButton from './Button.styled.js';

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
        <MyButton {...handleButtonType()} className={[...className]}>
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </MyButton>
    );
}

export default Button;
