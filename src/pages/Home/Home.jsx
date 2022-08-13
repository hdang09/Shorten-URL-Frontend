import { Link } from 'react-router-dom';
import { Report, Card, LinkItem, URLShortener, Statistics } from '../../components';

import { useSelector } from 'react-redux';
import { AiOutlineRight } from 'react-icons/ai';

function Home() {
    const MY_LINKS = useSelector((state) => state.urls);

    return (
        <div className="row gx-5">
            <div className="col-lg-8 col-md-12">
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
            </div>
            <div className="col-lg-4 col-md-12">
                <Card title="Statistics">
                    <Statistics />
                </Card>
                <Card title="Report" subtitle="Last 5 days">
                    <Report />
                </Card>
            </div>
        </div>
    );
}

export default Home;
