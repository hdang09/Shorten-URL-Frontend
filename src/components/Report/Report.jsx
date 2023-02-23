import React from 'react';
import { Line } from 'react-chartjs-2';

import { data } from './Report.data';

const Report = () => <Line data={data} />;

export default Report;
