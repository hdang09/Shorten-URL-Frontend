import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, URLList } from '../../components';
import { urlSelector } from '../../components/URLItem/urlSlice';
import config from '../../config';
import { useLocalStorage } from '../../hooks';
import { getReport } from '../../utils/urlAPI';

import * as Styled from './MyURL.styled';

const MyURL = () => {
    const currentURL = useSelector(urlSelector).shorten;
    const [, userId] = window.location.search.split('?id=');
    const [id] = useLocalStorage(config.localStorage.idUser);
    const [links, setLinks] = useState({
        all: null,
        filtered: null,
    });
    const [inputValue, setInputValue] = useState('');

    // Set document title
    useEffect(() => {
        document.title = 'My URL | F-Code Shorten URL';
    }, []);

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(userId || id);
            data.data.links.reverse();
            setLinks({
                ...links,
                all: data.data.links,
                filtered: data.data.links,
            });
        };
        getAllLinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentURL]);

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
            <Styled.SearchInput
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

export default MyURL;
