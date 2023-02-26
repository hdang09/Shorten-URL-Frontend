import { createRef, useState } from 'react';
import { HiLink } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import isUrl from 'is-url';
import { nanoid } from 'nanoid';
import { Col, Row } from 'styled-bootstrap-grid';

import { add } from '../../app/reducers/urlReducer';
import { Button, Input } from '../../components';
import config from '../../config';
import { useLocalStorage } from '../../hooks';
import removeHttps from '../../utils/removeHttps';
import { shortenUrl } from '../../utils/urlAPI';

import * as Styled from './URLShortener.styled';

const URLShortener = () => {
    const dispatch = useDispatch();
    const [id, _] = useLocalStorage(config.localStorage.idUser);

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
            dispatch(
                add({
                    original: originalURL,
                    shorten: removeHttps(data.data.shorten_link),
                }),
            );

            if (data.message) {
                toast.warn(data.message);
                return;
            }

            setOriginalURL('');
            setCustomPath('');
            toast.success('Shorten successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }

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
                        <input
                            type="text"
                            value={`${removeHttps(config.publicRuntime.API_URL)}/`}
                            readOnly
                        />
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
