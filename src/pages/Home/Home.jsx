import { Link } from 'react-router-dom';
import { Card, LinkItem, URLShortener } from '../../components';
import * as Styled from './Home.styled';
import { RiLinksLine } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { AiOutlineClockCircle, AiOutlineRight } from 'react-icons/ai';

const DATA = {
    total_links: 36,
    total_clicks: 146,
    avg_ctr: 0.727,
    avg_times: 5.21,
};

function Home() {
    const MY_LINKS = useSelector((state) => state.urls);

    return (
        <>
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
                        <div className="row">
                            <div className="col col-6">
                                <Styled.LinksIcon>
                                    <RiLinksLine color="blue" />
                                </Styled.LinksIcon>
                                <Styled.InfoStat>
                                    <h2>{DATA.total_links}</h2>
                                    <span>Links</span>
                                </Styled.InfoStat>
                            </div>

                            <div className="col col-6">
                                <Styled.ClickIcon>
                                    <HiCursorClick color="green" />
                                </Styled.ClickIcon>
                                <Styled.InfoStat>
                                    <h2>{DATA.total_clicks}</h2>
                                    <span>Clicks</span>
                                </Styled.InfoStat>
                            </div>
                            <div className="col col-6">
                                <Styled.AvgCTRIcon>
                                    <ImStatsDots color="red" />
                                </Styled.AvgCTRIcon>
                                <Styled.InfoStat>
                                    <h2>{DATA.avg_ctr}</h2>
                                    <span>AVG CTR</span>
                                </Styled.InfoStat>
                            </div>
                            <div className="col col-6">
                                <Styled.AvgTimesIcon>
                                    <AiOutlineClockCircle color="yellow" />
                                </Styled.AvgTimesIcon>
                                <Styled.InfoStat>
                                    <h2>{DATA.avg_times}</h2>
                                    <span>AVG Times</span>
                                </Styled.InfoStat>
                            </div>
                        </div>
                    </Card>
                    <Card title="Analytics"></Card>
                </div>
            </div>
        </>
    );
}

export default Home;
