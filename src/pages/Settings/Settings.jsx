import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../components';

const Settings = (props) => {
    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-6 col-md-12">
                    <Card title="Settings"></Card>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Card title="Settings"></Card>
                </div>
            </div>
        </>
    );
};

Settings.propTypes = {};

export default Settings;
