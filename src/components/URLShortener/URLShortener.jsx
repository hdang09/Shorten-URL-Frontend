import { useState, createRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import * as Styled from './URLShortener.styled';
import { useLocalStorage } from '../../hooks';
import { Input, Button } from '../../components';
import { add } from '../URLItem/urlSlice';
import { shortenUrl } from '../../utils/urlAPI';
import config from '../../config';

import isUrl from 'is-url';
import { Col, Row } from 'styled-bootstrap-grid';

import { HiLink } from 'react-icons/hi';

const URLShortener = () => {
    const dispatch = useDispatch();
    const [id, _] = useLocalStorage('id');

    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const [customPath, setCustomPath] = useState('');

    const handleShortenURL = async () => {
        if (!isUrl(originalURL)) {
            toast.error('Your link is wrong. Please try again!');
            inputRef.current.focus();
            return;
        }

        try {
            const { data } = await shortenUrl(originalURL, id, customPath || nanoid(10));
            if (data.message) {
                toast.warn(data.message);
            } else {
                setOriginalURL('');
                setCustomPath('');
                toast.success('Shorten successfully');
            }
            dispatch(
                add({
                    original: originalURL,
                    shorten: data.data.shorten_link,
                }),
            );
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }

        // if (window.location.pathname.split('/')[1] === 'landing') {
        //     window.location = '/';
        // } else {
        //     toast.error('Your link is wrong. Please try again!');
        // }

        inputRef.current.focus();
    };

    return (
        <div>
            <Row>
                <Col xs={12} lg={6}>
                    <Styled.Label>
                        <HiLink />
                        <HiLink />
                        <label htmlFor="">Enter your long URL here</label>
                    </Styled.Label>
                    <Input
                        ref={inputRef}
                        value={originalURL}
                        onChange={(e) => setOriginalURL(e.target.value)}
                        onKeyDown={(e) => e.keyCode === 13 && handleShortenURL()}
                        large
                        background
                        placeholder="Paste a link to shorten it"
                    />
                </Col>
                <Col xs={12} lg={6}>
                    <Styled.Label>
                        <HiLink />
                        <label htmlFor="">Customize your link</label>
                    </Styled.Label>

                    <Styled.WrapperInput>
                        <input type="text" value={`${config.publicRuntime.API_URL}/`} readOnly />
                        <Styled.CustomInput
                            type="text"
                            value={customPath}
                            onChange={(e) => setCustomPath(e.target.value)}
                            onKeyDown={(e) => e.keyCode === 13 && handleShortenURL()}
                        />
                    </Styled.WrapperInput>
                </Col>
            </Row>

            <Button
                shine="true"
                onClick={() => handleShortenURL()}
                style={{ margin: '12px auto 0 auto' }}
            >
                Shorten
            </Button>
        </div>
    );
};

export default URLShortener;
