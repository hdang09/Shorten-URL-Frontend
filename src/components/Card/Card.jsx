import * as Styled from './Card.styled';

function Card({ title, children, subtitle, noItem }) {
    return (
        <Styled.Wrapper noItem={noItem}>
            <Styled.Header>
                <Styled.Title>{title}</Styled.Title>
                <h3>{subtitle}</h3>
            </Styled.Header>
            <div>{children}</div>
        </Styled.Wrapper>
    );
}

export default Card;
