import { useState, createRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as Styled from './URLShortener.styled';
import { useDebounce, useLocalStorage } from '../../hooks';
import { Card, Input, Button } from '../../components';
import { add } from '../../components/LinkItem/urlSlice';
import { shortenUrl } from '../../utils/productApi';
import { nanoid } from 'nanoid';

let counter = 0;

const URLShortener = ({ noItem }) => {
    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const dispatch = useDispatch();
    const [id, setId] = useLocalStorage('id');

    const debouncedOriginalURL = useDebounce(originalURL, 750);

    useEffect(() => {
        // Call API
    }, [debouncedOriginalURL]);

    const handleShortenURL = async (e) => {
        if (
            (originalURL.trim() && originalURL.toLowerCase().includes('https://')) ||
            originalURL.toLowerCase().includes('www.') ||
            originalURL.toLowerCase().includes('http://')
        ) {
            try {
                const { data } = await shortenUrl(originalURL, id, nanoid(11));
                ++counter;
                setOriginalURL('');
                toast.success('Shorten successfully');
                let today = new Date();
                dispatch(
                    add({
                        id: counter,
                        name: `Shorten URL ${counter}`,
                        shorten_url: data.data.shorten_link,
                        origin_url: originalURL.toLowerCase(),
                        created_at: `${today.getDate()}/${
                            today.getMonth() + 1
                        }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
                    }),
                );
            } catch (error) {
                toast.error(error.message);
            }

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
            <Styled.Wrapper>
                <Input
                    ref={inputRef}
                    value={originalURL}
                    onChange={(e) => setOriginalURL(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 && handleShortenURL()}
                    large
                    background
                    placeholder="Paste a link to shorten it"
                />
                <Button shine="true" onClick={() => handleShortenURL()}>
                    Shorten
                </Button>
            </Styled.Wrapper>
        </Card>
    );
};

URLShortener.propTypes = {};

export default URLShortener;
