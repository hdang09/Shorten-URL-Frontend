import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, LinkItem } from '../../components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    padding: 0 150px;

    @media only screen and (max-width: 992px) {
        padding: 0;
    }
`;

const MyURL = (props) => {
    const MY_LINKS = useSelector((state) => state.urls);
    return (
        <Wrapper>
            <Card title="My URLs">
                {MY_LINKS.map((link) => (
                    <LinkItem key={link.name} data={link} />
                ))}
            </Card>
        </Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
