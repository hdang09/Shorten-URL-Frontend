import { createRef, useState } from 'react';
import { HiLink } from 'react-icons/hi';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import isUrl from 'is-url';
import { nanoid } from 'nanoid';
import { Col, Row } from 'styled-bootstrap-grid';

import { add } from '../../app/reducers/urlReducer';
import { Button, Input } from '../../components';
import config from '../../config';
import handleCopy from '../../utils/handleCopy';
import removeHttps from '../../utils/removeHttps';
import { shortenUrl } from '../../utils/urlAPI';

import * as Styled from './URLShortener.styled';

const URLShortener = ({ isNotLogin = false }) => {
    const dispatch = useDispatch();

    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const [customPath, setCustomPath] = useState('');

    const handleShortenURL = async () => {
        if (!isUrl(originalURL)) {
            toast.error('Your link is wrong. Please try again!');
            inputRef.current.focus();
            return;
        }

        toast.promise(shortenUrl(originalURL, customPath || nanoid(10), isNotLogin), {
            pending: 'The link is shortening...',
            success: {
                render({ data }) {
                    if (data.data.code === 201) {
                        dispatch(
                            add({
                                original: originalURL,
                                shorten: removeHttps(data.data.data.shortenLink),
                            }),
                        );

                        setOriginalURL('');
                        setCustomPath('');
                    }

                    if (data.data.code === 201 && isNotLogin) {
                        const shortenLink = `${removeHttps(config.publicRuntime.API_URL)}/${
                            data.data.data.shortenLink
                        }`;
                        Modal.success({
                            title: <strong>{shortenLink}</strong>,
                            okText: 'Copy URL',
                            content: (
                                <p>
                                    Your link will be expired in <strong>7 days</strong>. Please
                                    login to save this link forever.
                                </p>
                            ),
                            onOk() {
                                handleCopy(shortenLink);
                            },
                        });
                    }

                    return data.data.message;
                },
            },
            error: {
                render({ data }) {
                    return data.response?.data?.message;
                },
            },
        });

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
                        <Styled.Domain>{removeHttps(config.publicRuntime.API_URL)}/</Styled.Domain>

                        <Styled.Input
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
                leftIcon={<RxOpenInNewWindow />}
            >
                Shorten
            </Button>
        </div>
    );
};

URLShortener.propTypes = {};

export default URLShortener;
