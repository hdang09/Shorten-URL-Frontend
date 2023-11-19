import { useEffect, useRef, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import { urlSelector } from '../../app/reducers/urlReducer';
import { Card, QR, URLList, URLShortener } from '../../components';
import config from '../../config';
import { getReport } from '../../utils/urlAPI';

const Home = () => {
    const currentURL = useSelector(urlSelector).shorten;

    const qrRef = useRef(null);
    const scollToQr = () => {
        qrRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [links, setLinks] = useState(null);
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';

    useEffect(() => {
        document.title = 'F-Code Shorten URL';
    }, []);

    useEffect(() => {
        const getLinks = async () => {
            const { data } = await getReport();
            setLinks(data.data.links);
        };
        getLinks();
    }, [currentURL]);

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
                        <URLList list={links} isRecent scollToQr={scollToQr} />
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card noTitle>
                        <QR ref={qrRef} />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

Home.propTypes = {};

export default Home;
