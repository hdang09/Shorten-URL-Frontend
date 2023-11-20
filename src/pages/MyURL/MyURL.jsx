import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { urlSelector } from '../../app/reducers/urlReducer';
import { Card, Input, URLList } from '../../components';
import { getReport, getReportForCurrentUser } from '../../utils/urlAPI';

import * as Styled from './MyURL.styled';

const MyURL = () => {
    const currentURL = useSelector(urlSelector).shorten;
    const [_, userId] = window.location.search.split('?id=');
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
            const { data } = userId ? await getReport(userId) : await getReportForCurrentUser();

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
        const keyword = e.target.value.toLowerCase().trim();

        setInputValue(keyword);

        const filteredData = links.all.filter(
            (item) =>
                item.shortenLink.toLowerCase().includes(keyword) ||
                item.title.toLowerCase().includes(keyword),
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
                <Styled.Body>
                    <URLList list={links.filtered} />
                </Styled.Body>
            </Card>
        </Styled.Wrapper>
    );
};

MyURL.propTypes = {};

export default MyURL;
