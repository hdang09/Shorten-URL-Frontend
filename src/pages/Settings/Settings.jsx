import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Input } from '../../components';
import { useLocalStorage } from '../../hooks';
import styled from 'styled-components';
import { BsMoon } from 'react-icons/bs';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { MdInvertColorsOff } from 'react-icons/md';

const Settings = (props) => {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    document.body.setAttribute('data-theme', theme);

    const [color, setColor] = useLocalStorage('primary-color', '#45ce7b');
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    const handleChangeTheme = () => {
        setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
        alert('The entire page will be reloaded!');
        window.location = '/'; // 'settings'
    };

    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-3 hidden-md" />
                <div className="col-lg-6 col-md-12">
                    <Card title="Settings">
                        <div>
                            <label style={{ marginRight: '6px' }} htmlFor="theme">
                                <BsMoon />
                                {'  '}
                                Dark Theme
                            </label>
                            <Toggle theme={theme} onClick={() => handleChangeTheme()}>
                                <Circle theme={theme} />
                            </Toggle>
                        </div>
                        <p>
                            <IoColorPaletteOutline /> Change primary color:
                        </p>
                        <div style={{ display: 'flex' }}>
                            <ColorInput
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <Input
                                large
                                outline
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <a onClick={() => setColor('#45ce7b')}>
                            <MdInvertColorsOff />
                            {'   '}
                            Click here to go back to default color
                        </a>
                    </Card>
                    <div className="col-lg-3 hidden-md" />
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

const ColorInput = styled.input`
    margin-right: 1rem;
    width: 40px;
    height: 40px;
`;
