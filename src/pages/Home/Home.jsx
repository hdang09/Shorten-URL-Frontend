import { Link } from 'react-router-dom';
import { Report, Card, LinkItem, URLShortener, Statistics, QR } from '../../components';
import { Col, Row } from 'styled-bootstrap-grid';

import { useSelector } from 'react-redux';
import { AiOutlineRight } from 'react-icons/ai';
import { urlSelector } from '../../components/LinkItem/urlSlice';
import * as Styled from './Home.styled';
import { useEffect, useState } from 'react';
import { getReport } from '../../utils/productApi';

function Home() {
    const [allLinks, setAllLinks] = useState([]);
    const MY_LINKS = useSelector(urlSelector) || [];
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport();
            setAllLinks(data.data.links);
        };
        getAllLinks();
    }, []);

    return (
        <Row>
            <Col md={12} lg={8}>
                <URLShortener />
                <Card
                    title="Recent URLs"
                    subtitle={
                        <Link to={role === 'user' ? '/url' : '/admin/shorten-url/admin-url'}>
                            View All <AiOutlineRight />
                        </Link>
                    }
                >
                    {allLinks.slice(0, 5).map((link) => (
                        <LinkItem key={link.id} data={link} />
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
}

export default Home;
