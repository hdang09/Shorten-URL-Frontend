import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as Styled from './Button.styled';

const Button = ({
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
}) => {
    const className = [
        outline && 'outline',
        small && 'small',
        large && 'large',
        disabled && 'disabled',
        menu && 'menu',
        text && 'text',
    ];

    const buttonProps = to ? { as: Link, to } : href ? { as: 'a', href } : {};

    return (
        <Styled.Button {...buttonProps} className={className} {...props}>
            {leftIcon && <Styled.LeftIcon>{leftIcon}</Styled.LeftIcon>}
            {children}
            {rightIcon && <Styled.RightIcon>{rightIcon}</Styled.RightIcon>}
        </Styled.Button>
    );
};

Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    children: PropTypes.node.isRequired,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    menu: PropTypes.bool,
};

export default Button;
