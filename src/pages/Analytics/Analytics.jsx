import React from 'react';
import PropTypes from 'prop-types';
import { Report, Card, Statistics } from '../../components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Container, Row, Col } from 'styled-bootstrap-grid';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = (props) => {
    const BarChart = () => {
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Chart.js Bar Chart',
                },
            },
        };

        const labels = ['1 - 5/9', '6 - 10/9', '11 - 15/9', '16 - 20/9', '21 - 25/9', '26 - 30/9'];

        const data = {
            labels,
            datasets: [
                {
                    label: 'Links',
                    data: [1, 7, 6, 10, 2, 1, 6],
                    backgroundColor: 'rgba(0, 0, 255, 0.25)',
                },
                {
                    label: 'Clicks',
                    data: [4, 2, 3, 4, 5, 6, 7],
                    backgroundColor: 'rgba(0, 255, 0, 0.25)',
                },
                {
                    label: 'AVG CTR.',
                    data: [6, 2, 4, 5, 6, 9, 3],
                    backgroundColor: 'rgba(255, 0, 0, 0.25)',
                },
                {
                    label: 'AVG Times',
                    data: [9, 5, 2, 1, 6, 4, 8, 7],
                    backgroundColor: 'rgba(255, 255, 0, 0.25)',
                },
            ],
        };
        return <Bar options={options} data={data} />;
    };

    const LineChart = () => {
        const data = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            datasets: [
                {
                    fill: true,
                    id: 1,
                    label: 'Links',
                    data: [5, 6, 4, 1, 9, 3, 2, 6, 8, 4, 5, 6],
                    borderColor: 'rgb(0, 0, 255, 0.5)',
                    backgroundColor: 'rgba(0, 0, 255, 0.25)',
                },
                {
                    fill: true,
                    id: 2,
                    label: 'Clicks',
                    data: [3, 2, 6, 8, 4, 5, 6, 4, 1, 9, 3, 2],
                    borderColor: 'rgb(0, 255, 0, 0.5)',
                    backgroundColor: 'rgba(0, 255, 0, 0.25)',
                },
                {
                    fill: true,
                    id: 3,
                    label: 'AVG CTR',
                    data: [8, 6, 2, 5, 4, 7, 8, 2, 0, 1, 2, 5],
                    borderColor: 'rgb(255, 0, 0, 0.5)',
                    backgroundColor: 'rgba(255, 0, 0, 0.25)',
                },
                {
                    fill: true,
                    id: 4,
                    label: 'AVG Times',
                    data: [9, 1, 2, 5, 4, 12, 1, 4, 7, 8, 3],
                    borderColor: 'rgb(255, 255, 0, 0.5)',
                    backgroundColor: 'rgba(255, 255, 0, 0.25)',
                },
            ],
        };

        return <Line data={data} />;
    };

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
