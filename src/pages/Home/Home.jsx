import { Link } from 'react-router-dom';
import { Report, Card, LinkItem, URLShortener, Statistics, QR } from '../../components';
import { Col, Row } from 'styled-bootstrap-grid';

import { useSelector } from 'react-redux';
import { AiOutlineRight } from 'react-icons/ai';
import { urlSelector } from '../../components/LinkItem/urlSlice';
import bg from '../../assets/images/home.png';
import * as Styled from './Home.styled';

function Home() {
    const MY_LINKS = useSelector(urlSelector) || [];
    const role = window.location.pathname.split('/')[1] === '' ? 'user' : 'admin';

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
                    {MY_LINKS.slice(0, 5).map((link) => (
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
