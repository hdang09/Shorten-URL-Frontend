import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Card, Input, Button, LinkItem } from '../../components';
import * as Styled from './Home.styled';
import { RiLinksLine } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../components/LinkItem/urlSlice';
import { AiOutlineClockCircle, AiOutlineRight } from 'react-icons/ai';
import { useState, createRef } from 'react';

const DATA = {
    total_links: 36,
    total_clicks: 146,
    avg_ctr: 0.727,
    avg_times: 5.21,
};

function Home() {
    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const MY_LINKS = useSelector((state) => state.urls);
    const dispatch = useDispatch();

    const handleShortenURL = () => {
        if (
            (originalURL.trim() && originalURL.includes('https://')) ||
            originalURL.includes('www.')
        ) {
            setOriginalURL('');
            toast.success('Shorten successfully');
            dispatch(
                add({
                    name: 'Shorten URL 1',
                    shorten_url: 'https://f-link/123',
                    original_url: originalURL,
                }),
            );
            inputRef.current.focus();
        } else {
            toast.error('Your link is wrong. Please try again!');
        }
    };

    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-8 col-md-12">
                    <Card title="URL Shortener">
                        <Styled.URLShortener>
                            <Input
                                ref={inputRef}
                                value={originalURL}
                                onChange={(e) => setOriginalURL(e.target.value)}
                                large
                                transparent
                                placeholder="Paste a link to shorten it"
                            />
                            <Button onClick={() => handleShortenURL()}>Shorten</Button>
                        </Styled.URLShortener>
                    </Card>
                    <Card
                        title="Recent URLs"
                        subtitle={
                            <Link to="/url">
                                View All <AiOutlineRight />
                            </Link>
                        }
                    >
                        {MY_LINKS.slice(0, 5).map((link) => (
                            <LinkItem key={link.name} data={link} />
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
