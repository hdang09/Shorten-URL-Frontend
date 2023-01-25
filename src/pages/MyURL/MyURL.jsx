import { useState, useEffect } from 'react';

import * as Styled from './MyURL.styled';
import { Card, URLList } from '../../components';
import { getReport } from '../../utils/urlAPI';
import { useLocalStorage } from '../../hooks';

const MyURL = () => {
    const [, userId] = window.location.search.split('?id=');
    const [id] = useLocalStorage('id');
    const [links, setLinks] = useState({
        all: null,
        filtered: null,
    });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(userId || id);
            setLinks({
                ...links,
                all: data.data.links.reverse(),
                filtered: data.data.links.reverse(),
            });
        };
        getAllLinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
