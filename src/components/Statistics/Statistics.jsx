import React, { useState, useEffect } from 'react';
import { RiLinksLine } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { getReport } from '../../utils/urlAPI';
import { useLocalStorage } from '../../hooks';
import Skeleton from './StatisticsSkeleton';

import * as Styled from './Statistics.styled';
import config from '../../config';

const Statistics = () => {
    const [id, _] = useLocalStorage(config.localStorage.idUser, '');
    const [report, setReport] = useState({});

    useEffect(() => {
        const getAllLinks = async () => {
            const { data } = await getReport(id);
            setReport(data.data);
        };
        getAllLinks();
    }, [id]);

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
