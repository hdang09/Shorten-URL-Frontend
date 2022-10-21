import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 200px;

    ${down('lg')} {
        padding: 0;
    }
`;

export const SearchInput = styled.input`
    margin: 1rem auto;
    width: 325px;
    box-shadow: var(--box-shadow);
    background-color: ${(props) => props.theme.white};
    height: 42px;
    border-radius: 32px;
    padding: 20px;
    min-width: ${(props) => (props.large ? '100%' : '325px')};
    display: block;
    font-size: 1.4rem;
    caret-color: var(--primary-color);
    color: ${(props) => props.theme.black};
`;
