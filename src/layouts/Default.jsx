import { createRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add } from '../components/LinkItem/urlSlice';
import * as Styled from './Default.styled';

import { Header, Sidebar, Input, Button, Card } from '../components';

const Default = ({ children }) => {
    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const MY_LINKS = useSelector((state) => state.urls);
    const dispatch = useDispatch();

    const handleShortenURL = () => {
        if (
            (originalURL.trim() && originalURL.toLowerCase().includes('https://')) ||
            originalURL.toLowerCase().includes('www.') ||
            originalURL.toLowerCase().includes('http://')
        ) {
            setOriginalURL('');
            toast.success('Shorten successfully');
            let today = new Date();
            dispatch(
                add({
                    name: 'Shorten URL 1',
                    shorten_url: 'https://f-link/123',
                    original_url: originalURL,
                    created_at: `${today.getDate()}/${
                        today.getMonth() + 1
                    }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
                }),
            );
            inputRef.current.focus();
        } else {
            toast.error('Your link is wrong. Please try again!');
        }
    };
    return (
        <>
            {MY_LINKS.length > 0 ? (
                <>
                    <Header />
                    <Styled.Container>
                        <Sidebar />
                        <Styled.Content className="container">{children}</Styled.Content>
                    </Styled.Container>
                </>
            ) : (
                <>
                    <Header transparent />
                    <Styled.Banner>
                        <Styled.Heading>Create Short Links!</Styled.Heading>
                        <Styled.Subheading>
                            A URL shortener built with powerful tools to help you grow and protect
                            your brand.
                        </Styled.Subheading>
                        <Card noItem title="URL Shortener">
                            <Styled.URLShortener>
                                <Input
                                    ref={inputRef}
                                    value={originalURL}
                                    onChange={(e) => setOriginalURL(e.target.value)}
                                    large
                                    transparent
                                    placeholder="Paste a link to shorten it"
                                />
                                <Button onClick={() => handleShortenURL()}>Shorten</Button>
                            </Styled.URLShortener>
                        </Card>
                    </Styled.Banner>
                </>
            )}
        </>
    );
};

Default.propTypes = {};

export default Default;
