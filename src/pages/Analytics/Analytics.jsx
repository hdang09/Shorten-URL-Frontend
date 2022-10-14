import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line } from 'react-chartjs-2';
import { Row, Col } from 'styled-bootstrap-grid';

import { Report, Card, Statistics } from '../../components';
import { getReport } from '../../utils/productApi';

import { BarChartData, LineChartData } from './Analytics.dummy';
import { useLocalStorage } from '../../hooks';

const Analytics = (props) => {
    const [id, setId] = useLocalStorage('id', '');
    // const [clicksYearly, setClicksYearly] = useState([]);
    // const [linksYearly, setLinksYearly] = useState([]);
    // useEffect(() => {
    //     const getAllMonth = async () => {
    //         for (let i = 1; i <= 12; i++) {
    //             try {
    //                 const { data } = await getReport(id, 2022, i);
    //                 setLinksYearly((prev) => [...prev, data.data.links.length]);
    //             } catch (error) {
    //                 setLinksYearly((prev) => [...prev, 0]);
    //             }
    //         }
    //         // const newList = data.data.forEach((item) => {
    //         //     console.log(item);
    //         // });
    //         // setAllUserData(newList.reverse().slice(0, 5));
    //     };
    //     getAllMonth();
    // }, [id]);

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
