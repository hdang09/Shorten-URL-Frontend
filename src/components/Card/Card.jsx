import { Wrapper, Title } from './Card.styled';

function Card({ title, children }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <div>{children}</div>
        </Wrapper>
    );
}

export default Card;
