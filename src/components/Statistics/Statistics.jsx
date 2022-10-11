import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RiLinksLine } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { getInfo, getReport } from '../../utils/productApi';
import jwt_decode from 'jwt-decode';
import { useLocalStorage } from '../../hooks';

import * as Styled from './Statistics.styled';

const DATA = {
    total_links: 36,
    total_clicks: 146,
    avg_ctr: '72.7%',
    avg_times: '5.21s',
};

const Statistics = (props) => {
    const [token, setToken] = useLocalStorage('token', '');
    const [id, setId] = useLocalStorage('id', '');
    const [report, setReport] = useState([]);

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(id);
            setReport(data.data);
        };
        getAllLinks();
    }, [id]);

    return (
        <Container>
            <Row>
                <Col as={Styled.ColStat} col={6}>
                    <Styled.LinksIcon>
                        <RiLinksLine />
                    </Styled.LinksIcon>
                    <Styled.InfoStat>
                        <h2>{report.totalLinks}</h2>
                        <span>Links</span>
                    </Styled.InfoStat>
                </Col>

                <Col as={Styled.ColStat} col={6}>
                    <Styled.ClickIcon>
                        <HiCursorClick />
                    </Styled.ClickIcon>
                    <Styled.InfoStat>
                        <h2>{report.totalClicks}</h2>
                        <span>Clicks</span>
                    </Styled.InfoStat>
                </Col>
                {/* <Col as={Styled.ColStat} col={6}>
                    <Styled.AvgCTRIcon>
                        <ImStatsDots />
                    </Styled.AvgCTRIcon>
                    <Styled.InfoStat>
                        <h2>{DATA.avg_ctr}</h2>
                        <span>AVG CTR</span>
                    </Styled.InfoStat>
                </Col>
                <Col as={Styled.ColStat} col={6}>
                    <Styled.AvgTimesIcon>
                        <AiOutlineClockCircle />
                    </Styled.AvgTimesIcon>
                    <Styled.InfoStat>
                        <h2>{DATA.avg_times}</h2>
                        <span>AVG Times</span>
                    </Styled.InfoStat>
                </Col> */}
            </Row>
        </Container>
    );
};

Statistics.propTypes = {};

export default Statistics;
