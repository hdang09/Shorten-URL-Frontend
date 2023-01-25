import { useEffect, useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import isUrl from 'is-url';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import { AiOutlineRight } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';

import { Card, QR, Input, Button, URLList } from '../../components';
import { getReport, shortenUrl } from '../../utils/urlAPI';
import { add, urlSelector } from '../../components/URLItem/urlSlice';
import * as Styled from './Home.styled';
import { useLocalStorage } from '../../hooks';
import config from '../../config';

const Home = () => {
    const dispatch = useDispatch();
    const currentURL = useSelector(urlSelector).shorten;

    const [allLinks, setAllLinks] = useState(null);
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';
    const [id] = useLocalStorage('id', '');

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(id);
            setAllLinks(data.data.links.reverse());
        };
        getAllLinks();
    }, [id]);

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
        <Container>
            <Row>
                <Col md={12} lg={8}>
                    <Card title="URL Shortener">
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
                                            value={`${config.publicRuntime.API_URL}/`}
                                            readOnly
                                        />
                                        <Styled.CustomInput
                                            type="text"
                                            value={customPath}
                                            onChange={(e) => setCustomPath(e.target.value)}
                                            onKeyDown={(e) =>
                                                e.keyCode === 13 && handleShortenURL()
                                            }
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
                    </Card>

                    <Card
                        title="Recent URLs"
                        subtitle={
                            <Link to={role === 'user' ? config.routes.url : config.routes.adminURL}>
                                View All <AiOutlineRight />
                            </Link>
                        }
                    >
                        <URLList list={allLinks} isRecent />
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card noTitle>
                        <QR />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
