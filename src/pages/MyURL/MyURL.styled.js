import styled from 'styled-components';
import { InputTag } from '../../components/Input/Input.styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 200px;

    @media only screen and (max-width: 992px) {
        padding: 0;
    }
`;

export const SearchInput = styled.input`
    /* border: 1px solid ${(props) => props.theme.black}; */
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
