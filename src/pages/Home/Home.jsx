import { Link } from 'react-router-dom';
import { Card, LinkItem, QR, Input, Button } from '../../components';
import { Col, Row } from 'styled-bootstrap-grid';
import { useEffect, useState, createRef } from 'react';
import { getReport, shortenUrl } from '../../utils/productApi';
import { AiOutlineRight } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { urlSelector, add } from '../../components/LinkItem/urlSlice';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import * as Styled from './Home.styled';
import { useDebounce, useLocalStorage } from '../../hooks';

import { nanoid } from 'nanoid';

let counter = 0;

const Home = () => {
    const dispatch = useDispatch();

    const [allLinks, setAllLinks] = useState([]);
    const MY_LINKS = useSelector(urlSelector) || [];
    const [reRender, setReRender] = useState(false);
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';
    const [id] = useLocalStorage('id', '');

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(id);
            setAllLinks(data.data.links.reverse());
            console.count('a');
        };
        getAllLinks();
    }, [id, reRender]);

    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');

    console.count('re-render');

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
                        shorten_link: data.data.shorten_link,
                        origin_link: originalURL.toLowerCase(),
                        // created_at: `${today.getDate()}/${
                        //     today.getMonth() + 1
                        // }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
                        created_at: today,
                        updated_at: today,
                    }),
                );
                setReRender(!reRender);
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
        <Row>
            <Col md={12} lg={8}>
                <Card title="URL Shortener">
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

                <Card
                    title="Recent URLs"
                    subtitle={
                        <Link to={role === 'user' ? '/url' : '/admin/shorten-url/admin-url'}>
                            View All <AiOutlineRight />
                        </Link>
                    }
                >
                    {allLinks.slice(0, 5).map((link) => (
                        <LinkItem key={link._id} data={link} />
                    ))}
                </Card>
            </Col>
            <Col md={12} lg={4}>
                <Card noTitle>
                    <QR />
                </Card>
            </Col>
        </Row>
    );
};

export default Home;
