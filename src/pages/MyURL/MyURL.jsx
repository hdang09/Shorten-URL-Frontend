import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Input, LinkItem } from '../../components';
import { useSelector } from 'react-redux';

const MyURL = (props) => {
    const MY_LINKS = useSelector((state) => state.urls) || [];
    return (
        <Wrapper>
            <Input style={{ margin: '1rem auto' }} placeholder="Type here to search my URL..." />
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 200px;

    @media only screen and (max-width: 992px) {
        padding: 0;
    }
`;
