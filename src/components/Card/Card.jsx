import * as Styled from './Card.styled';

function Card({ title, children, subtitle, noItem }) {
    return (
        <Styled.Wrapper noItem={noItem}>
            <Styled.Header>
                <Styled.Title noItem={noItem}>{title}</Styled.Title>
                <Styled.Subtitle>{subtitle}</Styled.Subtitle>
            </Styled.Header>
            <div>{children}</div>
        </Styled.Wrapper>
    );
}

export default Card;
