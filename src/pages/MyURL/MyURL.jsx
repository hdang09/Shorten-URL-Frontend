import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LinkItem } from '../../components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    padding: 0 120px;

    @media only screen and (max-width: 992px) {
        padding: 0 60px;
    }

    @media only screen and (max-width: 500px) {
        padding: 0 8px;
    }
`;

const MyURL = (props) => {
    const MY_LINKS = useSelector((state) => state.urls);
    return (
        <Wrapper>
            {MY_LINKS.map((link) => (
                <LinkItem key={link.name} data={link} />
            ))}
        </Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
