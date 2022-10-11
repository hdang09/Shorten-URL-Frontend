import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as Styled from './MyURL.styled';
import { Card, Input, LinkItem } from '../../components';
import { getReport } from '../../utils/productApi';
import { useLocalStorage } from '../../hooks';

const MyURL = (props) => {
    const [, userId] = window.location.search.split('?id=');
    const [id] = useLocalStorage('id');
    const [allLinks, setAllLinks] = useState([]);

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(userId || id);
            setAllLinks(data.data.links.reverse());
        };
        getAllLinks();
    }, [id, userId]);

    return (
        <Styled.Wrapper>
            <Input style={{ margin: '1rem auto' }} placeholder="Type here to search my URL..." />
            <Card title="My URLs">
                {allLinks.map((link) => (
                    <LinkItem key={link.name} data={link} />
                ))}
            </Card>
        </Styled.Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
