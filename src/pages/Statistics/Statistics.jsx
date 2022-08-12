import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../components';

const Statistics = (props) => {
    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-6 col-md-12">
                    <Card title="Statistics"></Card>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Card title="Analytics"></Card>
                </div>
            </div>
        </>
    );
};

Statistics.propTypes = {};

export default Statistics;
