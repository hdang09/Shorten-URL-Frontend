import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Statistics.styled';
import { RiLinksLine } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { AiOutlineClockCircle } from 'react-icons/ai';

const DATA = {
    total_links: 36,
    total_clicks: 146,
    avg_ctr: '72.7%',
    avg_times: '5.21s',
};

const Statistics = (props) => {
    return (
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
    );
};

Statistics.propTypes = {};

export default Statistics;
