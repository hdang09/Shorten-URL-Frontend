import React from 'react';
import PropTypes from 'prop-types';
import { Report, Card, Statistics } from '../../components';

const Analytics = (props) => {
    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-6 col-md-12">
                    <Card title="Statistics">
                        <Statistics />
                    </Card>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Card title="Report">
                        <Report />
                    </Card>
                </div>
            </div>
        </>
    );
};

Analytics.propTypes = {};

export default Analytics;
