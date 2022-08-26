import React from 'react';
import PropTypes from 'prop-types';
import { Card, Input } from '../../components';
import { useLocalStorage } from '../../hooks';
import styled from 'styled-components';

const Settings = (props) => {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    document.body.setAttribute('data-theme', theme);
    const handleChangeTheme = () => {
        setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
        alert('The page will be reloaded. This is a small bug =)))))');
        window.location = '/'; // 'settings'
    };

    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-3 hidden-md"></div>
                <div className="col-lg-6 col-md-12">
                    <Card title="Settings">
                        <div>
                            <label style={{ marginRight: '6px' }} htmlFor="theme">
                                Dark Theme
                            </label>
                            <Toggle theme={theme} onClick={() => handleChangeTheme()}>
                                <Circle theme={theme} />
                            </Toggle>
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

const Toggle = styled.div`
    display: inline-block;
    padding: 0.25rem;
    background-color: ${(props) =>
        props.theme === 'dark' ? 'var(--primary-color)' : 'rgba(15, 23, 42, 0.1)'};
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
        transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    pointer-events: auto;
    cursor: pointer;
`;

const Circle = styled.div`
    background-color: #ffffff;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
        transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transform: ${(props) =>
        props.theme === 'dark'
            ? 'translate(1rem, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)'
            : '0'};
`;
