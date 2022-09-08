import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Line } from 'react-chartjs-2';
import { Row, Col } from 'styled-bootstrap-grid';

import { Report, Card, Statistics } from '../../components';
import { BarChartData, LineChartData } from './Analytics.dummy';

const Analytics = (props) => {
    const BarChart = () => <Bar data={BarChartData.data} />;

    const LineChart = () => <Line data={LineChartData.data} options={LineChartData.options} />;

    return (
        <>
            <Row>
                <Col sm={12} md={4}>
                    <Card title="Statistics">
                        <Statistics />
                    </Card>
                    <Card title="Statistics">
                        <Report />
                    </Card>
                </Col>
                <Col sm={12} md={8}>
                    <Card title="Monthly Report">
                        <BarChart />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Card title="Annual Report">
                        <LineChart />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

Analytics.propTypes = {};

export default Analytics;
