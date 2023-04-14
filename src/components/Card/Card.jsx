import PropTypes from 'prop-types';

import * as Styled from './Card.styled';

const Card = ({ title, children, subtitle, ...props }) => {
    return (
        <Styled.Wrapper {...props}>
            {title && (
                <Styled.Header>
                    <Styled.Title>{title}</Styled.Title>
                    {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
                </Styled.Header>
            )}
            <div>{children}</div>
        </Styled.Wrapper>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
};

export default Card;
