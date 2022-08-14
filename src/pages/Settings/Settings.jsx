import React from 'react';
import PropTypes from 'prop-types';
import { Card, Input } from '../../components';
import { useLocalStorage } from '../../hooks';

const Settings = (props) => {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    document.body.setAttribute('data-theme', theme);

    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-3 hidden-md"></div>
                <div className="col-lg-6 col-md-12">
                    <Card title="Settings">
                        <div>
                            <label style={{ marginRight: '6px' }} htmlFor="theme">
                                {theme === 'light' ? 'Dark' : 'Light'} Theme
                            </label>
                            <input
                                type="checkbox"
                                id="theme"
                                value={theme}
                                onClick={() =>
                                    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
                                }
                            />
                        </div>
                        <div>
                            <p>Change default color: </p>
                            <Input large outline />
                        </div>
                    </Card>
                    <div className="col-lg-3 hidden-md"></div>
                </div>
            </div>
        </>
    );
};

Settings.propTypes = {};

export default Settings;
