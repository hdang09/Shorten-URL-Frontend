import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as Styled from './MyURL.styled';
import { Card, Input, LinkItem } from '../../components';
import { urlSelector } from '../../components/LinkItem/urlSlice';

const MyURL = (props) => {
    const userId = window.location.search.split('?id=')[1];

    const MY_LINKS = useSelector(urlSelector) || [];
    return (
        <Styled.Wrapper>
            <Input style={{ margin: '1rem auto' }} placeholder="Type here to search my URL..." />
            <Card title="My URLs">
                {MY_LINKS.map((link) => (
                    <LinkItem key={link.name} data={link} />
                ))}
            </Card>
        </Styled.Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
