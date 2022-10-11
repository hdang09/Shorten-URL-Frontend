import * as Styled from './Card.styled';
import { AiOutlineRight } from 'react-icons/ai';

function Card({ title, children, subtitle, noItem, ...props }) {
    return (
        <Styled.Wrapper noItem={noItem} {...props}>
            {title && (
                <Styled.Header>
                    <Styled.Title noItem={noItem}>{title}</Styled.Title>
                    {subtitle && (
                        <Styled.Subtitle>
                            {subtitle} <AiOutlineRight />
                        </Styled.Subtitle>
                    )}
                </Styled.Header>
            )}
            <div>{children}</div>
        </Styled.Wrapper>
    );
}

export default Card;
