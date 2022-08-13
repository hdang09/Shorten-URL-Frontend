import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

const Report = (props) => {
    const data = {
        labels: ['14/8', '15/8', '16/8', '17/8', '18/8'],
        datasets: [
            {
                id: 1,
                label: 'Links',
                data: [5, 6, 4, 1, 9],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                id: 2,
                label: 'Clicks',
                data: [3, 2, 6, 8, 4],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Line datasetIdKey="id" data={data} />;
};

Report.propTypes = {};

export default Report;
