import { Link } from 'react-router-dom';
import { Report, Card, LinkItem, URLShortener, Statistics } from '../../components';
import { Col, Row } from 'styled-bootstrap-grid';

import { useSelector } from 'react-redux';
import { AiOutlineRight } from 'react-icons/ai';
import { urlSelector } from '../../components/LinkItem/urlSlice';

function Home() {
    const MY_LINKS = useSelector(urlSelector) || [];

    return (
        <Row>
            <Col md={12} lg={8}>
                <URLShortener />
                <Card
                    title="Recent URLs"
                    subtitle={
                        <Link to="/url">
                            View All <AiOutlineRight />
                        </Link>
                    }
                >
                    {MY_LINKS.slice(0, 5).map((link) => (
                        <LinkItem key={link.original_url} data={link} />
                    ))}
                </Card>
            </Col>
            <Col md={12} lg={4}>
                <Card title="Statistics">
                    <Statistics />
                </Card>
                <Card title="Report" subtitle="Last 5 days">
                    <Report />
                </Card>
            </Col>
        </Row>
    );
}

export default Home;
