import React, { useEffect, useState } from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { RiLinksLine } from 'react-icons/ri';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import { getReportForCurrentUser } from '../../utils/urlAPI';

import * as Styled from './Statistics.styled';
import Skeleton from './StatisticsSkeleton';

const Statistics = () => {
    const [report, setReport] = useState({});

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReportForCurrentUser();
            setReport(data.data);
        };
        getAllLinks();
    }, []);

    const STATISTICS_LIST = [
        {
            icon: (
                <Styled.LinksIcon>
                    <RiLinksLine />
                </Styled.LinksIcon>
            ),
            count: report.totalLinks,
            title: 'Links',
        },
        {
            icon: (
                <Styled.ClicksIcon>
                    <HiCursorClick />
                </Styled.ClicksIcon>
            ),
            count: report.totalClicks,
            title: 'Clicks',
        },
    ];

    return (
        <Container>
            <Row>
                {Object.keys(report).length ? (
                    STATISTICS_LIST.map((item) => (
                        <Col as={Styled.ColStat} col={6} key={item.title}>
                            {item.icon}
                            <Styled.InfoStat>
                                <h2>{item.count}</h2>
                                <span>{item.title}</span>
                            </Styled.InfoStat>
                        </Col>
                    ))
                ) : (
                    <Skeleton />
                )}
            </Row>
        </Container>
    );
};

export default Statistics;
