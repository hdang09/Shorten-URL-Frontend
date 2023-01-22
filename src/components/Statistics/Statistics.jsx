import React, { useState, useEffect } from 'react';
import { RiLinksLine } from 'react-icons/ri';
import { HiCursorClick } from 'react-icons/hi';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { getReport } from '../../utils/urlAPI';
import { useLocalStorage } from '../../hooks';

import * as Styled from './Statistics.styled';

const Statistics = () => {
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
            </Row>
        </Container>
    );
};

export default Statistics;
