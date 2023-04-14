import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { urlSelector } from '../../app/reducers/urlReducer';
import { Card, Input, URLList } from '../../components';
import { getReport } from '../../utils/urlAPI';

import * as Styled from './MyURL.styled';

const MyURL = () => {
    const currentURL = useSelector(urlSelector).shorten;
    const [userId] = window.location.search.split('?id=');
    const [links, setLinks] = useState({
        all: null,
        filtered: null,
    });
    const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     const getLinksByDate = async () => {
    //         console.log(date);
    //         const { data } = await getReport(userId, date.year, date.month);
    //         console.log(date);
    //     };
    //     getLinksByDate();
    // }, [date, links, userId]);

    // Set document title
    useEffect(() => {
        document.title = 'My URL | F-Code Shorten URL';
    }, []);

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(userId);
            console.log(data.data.links);
            setLinks({
                ...links,
                all: data.data.links,
                filtered: data.data.links,
            });
        };
        getAllLinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentURL, userId]);

    const handleSearch = (e) => {
        setInputValue(e.target.value);
        const filteredData = links.all.filter((item) =>
            item.shorten_link.toLowerCase().includes(e.target.value.toLowerCase()),
        );
        setLinks({
            ...links,
            filtered: filteredData,
        });
    };

    return (
        <Styled.Wrapper>
            <Input
                value={inputValue}
                onChange={handleSearch}
                placeholder="Type here to search my URL..."
            />
            <Card title="My URLs">
                <URLList list={links.filtered} />
            </Card>
        </Styled.Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
