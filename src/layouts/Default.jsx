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
        setOriginalURL('');
        toast.success('Shorten successfully');
        dispatch(add({ name: 'a', shorten_url: 'https://f-link/123', original_url: originalURL }));
        inputRef.current.focus();
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
                        <div style={{ margin: 'calc(100vh/2 - var(--header-height) - 16px) 0' }}>
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
                        </div>
                    </Styled.Banner>
                </>
            )}
        </>
    );
};

Default.propTypes = {};

export default Default;
