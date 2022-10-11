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
    const [filteredLinks, setFilteredLinks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(userId || id);
            setAllLinks(data.data.links.reverse());
        };
        getAllLinks();
    }, [id, userId]);

    const handleSearch = (e) => {
        setInputValue(e.target.value);
        const filteredData = allLinks.filter((item) => item.shorten_link.includes(e.target.value));
        setFilteredLinks(filteredData);
    };

    let links = filteredLinks.length ? filteredLinks : allLinks;

    return (
        <Styled.Wrapper>
            <Styled.SearchInput
                value={inputValue}
                onChange={handleSearch}
                placeholder="Type here to search my URL..."
            />
            <Card title="My URLs">
                {links.map((link) => (
                    <LinkItem key={link.name} data={link} />
                ))}
            </Card>
        </Styled.Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
