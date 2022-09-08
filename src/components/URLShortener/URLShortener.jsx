import { useState, createRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useDebounce } from '../../hooks';
import { Card, Input, Button } from '../../components';
import { add } from '../../components/LinkItem/urlSlice';

const Wrapper = styled.div`
    @media only screen and (min-width: 600px) {
        display: flex;
    }
`;

let counter = 0;

const URLShortener = ({ noItem }) => {
    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const dispatch = useDispatch();

    const debouncedOriginalURL = useDebounce(originalURL, 750);

    useEffect(() => {
        // Call API
    }, [debouncedOriginalURL]);

    const handleShortenURL = (e) => {
        if (
            (originalURL.trim() && originalURL.toLowerCase().includes('https://')) ||
            originalURL.toLowerCase().includes('www.') ||
            originalURL.toLowerCase().includes('http://')
        ) {
            ++counter;
            setOriginalURL('');
            toast.success('Shorten successfully');
            let today = new Date();
            dispatch(
                add({
                    id: counter,
                    name: `Shorten URL ${counter}`,
                    shorten_url: `https://f-link.io/${Math.random().toString(36).substring(2, 7)}`,
                    origin_url: originalURL.toLowerCase(),
                    created_at: `${today.getDate()}/${
                        today.getMonth() + 1
                    }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
                }),
            );
            if (window.location.pathname.split('/')[1] === 'landing') {
                window.location = '/';
            }
        } else {
            toast.error('Your link is wrong. Please try again!');
        }

        inputRef.current.focus();
    };

    return (
        <Card noItem={noItem} title="URL Shortener">
            <Wrapper>
                <Input
                    ref={inputRef}
                    value={originalURL}
                    onChange={(e) => setOriginalURL(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 && handleShortenURL()}
                    large
                    background
                    placeholder="Paste a link to shorten it"
                />
                <Button shine onClick={() => handleShortenURL()}>
                    Shorten
                </Button>
            </Wrapper>
        </Card>
    );
};

URLShortener.propTypes = {};

export default URLShortener;
