import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
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

export const data = {
    labels: ['14/9', '15/9', '16/9', '17/9', '18/9'],
    datasets: [
        {
            id: 1,
            label: 'Links',
            data: [5, 6, 4, 1, 9],
            borderColor: 'rgb(234, 84, 85)',
            backgroundColor: 'rgba(234, 84, 85, 0.5)',
        },
        {
            id: 2,
            label: 'Clicks',
            data: [3, 2, 6, 8, 4],
            borderColor: 'rgb(0, 207, 232)',
            backgroundColor: 'rgba(0, 207, 232, 0.5)',
        },
    ],
};
