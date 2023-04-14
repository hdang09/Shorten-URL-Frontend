import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Bar } from 'react-chartjs-2';
import { Col, Row } from 'styled-bootstrap-grid';

import { Card, Report, Statistics } from '../../components';

// import { BarChartData } from './Analytics.dummy';

const Analytics = () => {
    // const BarChart = () => <Bar data={BarChartData.data} />;

    useEffect(() => {
        document.title = 'Analytics | F-Code Shorten URL';
    }, []);

    return (
        <>
            <Row>
                <Col sm={12} md={12} lg={4} />
                <Col sm={12} md={12} lg={4}>
                    <Row>
                        <Col md={3} />
                        <Col sm={12} md={6} lg={12}>
                            <Card title="Statistics">
                                <Statistics />
                            </Card>
                        </Col>
                        <Col md={3} />

                        {/* <Col sm={12} md={6} lg={12}>
                            <Card title="Analytics" subtitle="5 days recently">
                                <Report />
                            </Card>
                        </Col> */}
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={4} />

                {/* <Col sm={12} md={12} lg={8}>
                    <Card title="Annual Report">
                        <BarChart />
                    </Card>
                </Col> */}
            </Row>
        </>
    );
};

Analytics.propTypes = {};

export default Analytics;
