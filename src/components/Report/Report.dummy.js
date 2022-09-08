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

export const data = {
    labels: ['14/9', '15/9', '16/9', '17/9', '18/9'],
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
