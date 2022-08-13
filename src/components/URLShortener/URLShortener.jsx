import { useState, createRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

    const handleShortenURL = () => {
        if (
            (originalURL.trim() && originalURL.includes('https://')) ||
            originalURL.includes('www.') ||
            originalURL.includes('http://')
        ) {
            ++counter;
            setOriginalURL('');
            toast.success('Shorten successfully');
            let today = new Date();
            dispatch(
                add({
                    name: `Shorten URL ${counter}`,
                    shorten_url: `https://f-link.io/${counter}${counter}${counter}`,
                    original_url: originalURL,
                    created_at: `${today.getDate()}/${
                        today.getMonth() + 1
                    }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
                }),
            );
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
                    transparent
                    placeholder="Paste a link to shorten it"
                />
                <Button onClick={() => handleShortenURL()}>Shorten</Button>
            </Wrapper>
        </Card>
    );
};

URLShortener.propTypes = {};

export default URLShortener;
