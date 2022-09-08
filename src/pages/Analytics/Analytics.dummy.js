import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChartData = {
    data: {
        labels: ['1 - 5/9', '6 - 10/9', '11 - 15/9', '16 - 20/9', '21 - 25/9', '26 - 30/9'],
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
    },
};

export const LineChartData = {
    options: {
        responsive: true,
    },
    data: {
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
                borderColor: '#FF6384',
                lineTension: 0.4,
            },
            {
                id: 2,
                label: 'Clicks',
                data: [3, 2, 6, 8, 4, 5, 6, 4, 1, 9, 3, 2],
                borderColor: '#36A2EB',
                lineTension: 0.4,
            },
        ],
    },
};
