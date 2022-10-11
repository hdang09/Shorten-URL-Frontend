import { Link } from 'react-router-dom';
import { Card, LinkItem, URLShortener, QR } from '../../components';
import { Col, Row } from 'styled-bootstrap-grid';

import { useEffect, useState } from 'react';
import { getReport } from '../../utils/productApi';
import { useLocalStorage } from '../../hooks';

function Home() {
    const [allLinks, setAllLinks] = useState([]);
    // const MY_LINKS = useSelector(urlSelector) || [];
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';
    const [id, setId] = useLocalStorage('id', '');

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(id);
            setAllLinks(data.data.links.reverse());
        };
        getAllLinks();
    }, [id]);

    return (
        <Row>
            <Col md={12} lg={8}>
                <URLShortener />
                <Card
                    title="Recent URLs"
                    subtitle={
                        <Link to={role === 'user' ? '/url' : '/admin/shorten-url/admin-url'}>
                            View All
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
}

export default Home;
