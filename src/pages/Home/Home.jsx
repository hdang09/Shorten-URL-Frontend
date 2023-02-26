import { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import { urlSelector } from '../../app/reducers/urlReducer';
import { Card, QR, URLList, URLShortener } from '../../components';
import config from '../../config';
import { useLocalStorage } from '../../hooks';
import { getReport } from '../../utils/urlAPI';

const Home = () => {
    const currentURL = useSelector(urlSelector).shorten;

    const [links, setLinks] = useState(null);
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';
    const [id] = useLocalStorage(config.localStorage.idUser, '');

    useEffect(() => {
        document.title = 'F-Code Shorten URL';
    }, []);

    useEffect(() => {
        const getLinks = async () => {
            const { data } = await getReport(id);
            setLinks(data.data.links.reverse());
        };
        getLinks();
    }, [id, currentURL]);

    return (
        <Container>
            <Row>
                <Col md={12} lg={8}>
                    <Card title="URL Shortener">
                        <URLShortener />
                    </Card>

                    <Card
                        title="Recent URLs"
                        subtitle={
                            <Link to={role === 'user' ? config.routes.url : config.routes.adminURL}>
                                View All <AiOutlineRight />
                            </Link>
                        }
                    >
                        <URLList list={links} isRecent />
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
