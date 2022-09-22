import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as Styled from './MyURL.styled';
import { Card, Input, LinkItem } from '../../components';
import { getReport } from '../../utils/productApi';

const MyURL = (props) => {
    const userId = window.location.search.split('?id=')[1];
    const [allLinks, setAllLinks] = useState([]);

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(userId);
            setAllLinks(data.data.links.reverse());
        };
        getAllLinks();
    }, []);

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
