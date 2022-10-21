import { Bar, Line } from 'react-chartjs-2';
import { Row, Col } from 'styled-bootstrap-grid';

import { Report, Card, Statistics } from '../../components';
import { getReport } from '../../utils/productApi';

import { BarChartData, LineChartData } from './Analytics.dummy';

const Analytics = () => {
    const BarChart = () => <Bar data={BarChartData.data} />;

    const LineChart = () => <Line data={LineChartData.data} options={LineChartData.options} />;

    return (
        <>
            <Row>
                <Col sm={12} md={12} lg={4} />
                <Col sm={12} md={12} lg={4}>
                    <Row>
                        <Col sm={12} md={6} lg={12}>
                            <Card title="Statistics">
                                <Statistics />
                            </Card>
                        </Col>

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
            {/* <Row>
                <Col sm={12}>
                    <Card title="Annual Report">
                        <LineChart />
                    </Card>
                </Col>
            </Row> */}
        </>
    );
};

export default Analytics;

{
    /* <Row>
                <Col sm={12} md={12} lg={4}>
                    <Row>
                        <Col sm={12} md={6} lg={12}>
                            <Card title="Statistics">
                                <Statistics />
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={12}>
                            <Card title="Analytics" subtitle="5 days recently">
                                <Report />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={8}>
                    <Card title="Annual Report">
                        <BarChart />
                    </Card>
                </Col>
            </Row> */
}
