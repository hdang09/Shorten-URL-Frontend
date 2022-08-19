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

        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        const data = {
            labels,
            datasets: [
                {
                    label: 'Links',
                    data: [1, 7, 6, 10, 2, 1, 6],
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                },
                {
                    label: 'Clicks',
                    data: [4, 2, 3, 4, 5, 6, 7],
                    backgroundColor: 'rgba(0, 255, 0, 0.2)',
                },
                {
                    label: 'AVG CTR.',
                    data: [6, 2, 4, 5, 6, 9, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'AVG Times',
                    data: [9, 5, 2, 1, 6, 4, 8, 7],
                    backgroundColor: 'rgba(255, 255, 0, 0.2)',
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
                    id: 1,
                    label: 'Links',
                    data: [5, 6, 4, 1, 9, 3, 2, 6, 8, 4, 5, 6],
                    borderColor: 'rgb(0, 0, 255)',
                },
                {
                    id: 2,
                    label: 'Clicks',
                    data: [3, 2, 6, 8, 4, 5, 6, 4, 1, 9, 3, 2],
                    borderColor: 'rgb(0, 255, 0)',
                },
                {
                    id: 3,
                    label: 'AVG CTR',
                    data: [8, 6, 2, 5, 4, 7, 8, 2, 0, 1, 2, 5],
                    borderColor: 'rgb(255, 99, 132)',
                },
                {
                    id: 4,
                    label: 'AVG Times',
                    data: [9, 1, 2, 5, 4, 12, 1, 4, 7, 8, 3],
                    borderColor: 'rgb(255, 255, 0)',
                },
            ],
        };

        return <Line data={data} />;
    };

    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-4 col-md-12">
                    <Card title="Statistics">
                        <Statistics />
                    </Card>
                    <Card title="Statistics">
                        <Report />
                    </Card>
                </div>
                <div className="col-lg-8 col-md-12">
                    <Card title="Monthly Report">
                        <BarChart />
                    </Card>
                </div>
            </div>
            <div className="row gx-5">
                <Card title="Annual Report">
                    <LineChart />
                </Card>
            </div>
        </>
    );
};

Analytics.propTypes = {};

export default Analytics;
