import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { data } from './Report.dummy';

const Report = (props) => <Line data={data} />;

Report.propTypes = {};

export default Report;
