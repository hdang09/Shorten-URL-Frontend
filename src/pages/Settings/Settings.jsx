import React from 'react';
import PropTypes from 'prop-types';
import { BsMoon } from 'react-icons/bs';
import { RiLayout2Fill } from 'react-icons/ri';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { MdInvertColorsOff } from 'react-icons/md';

import * as Styled from './Settings.styled';
import { Card, Input } from '../../components';
import { useLocalStorage } from '../../hooks';
import { ThemeContext } from '../../App';
import { LayoutContext } from '../../routers';
import { useContext } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import newLayout from '../../assets/images/screenshots.png';
import basicLayout from '../../assets/images/basic-layout.png';

const Settings = (props) => {
    const theme = JSON.parse(localStorage.getItem('data-theme'));
    const setThemeInLocal = useContext(ThemeContext);
    const layout = JSON.parse(localStorage.getItem('layout'));
    const setLayoutInLocal = useContext(LayoutContext);

    const [color, setColor] = useLocalStorage('primary-color', '#45ce7b');
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    const ThemeSettings = () => (
        <Styled.SettingsItem>
            <Styled.SettingsLabel style={{ marginRight: '6px' }} htmlFor="theme">
                <BsMoon />
                {'  '}
                Dark Mode
            </Styled.SettingsLabel>
            <Styled.Toggle theme={theme} onClick={setThemeInLocal}>
                <Styled.Circle theme={theme} />
            </Styled.Toggle>
        </Styled.SettingsItem>
    );

    const LayoutSettings = () => (
        <Styled.SettingsItem>
            <Styled.SettingsLabel>
                <RiLayout2Fill />
                {'  '}
                Layout:
            </Styled.SettingsLabel>
            <Row>
                <Col col={6}>
                    <Styled.LayoutSelect
                        active={layout === 'default'}
                        onClick={() => setLayoutInLocal('default')}
                    >
                        <Styled.LayoutName htmlFor="default">Basic Layout</Styled.LayoutName>
                        <Styled.LayoutImg src={basicLayout} />
                    </Styled.LayoutSelect>
                </Col>
                <Col col={6}>
                    <Styled.LayoutSelect
                        active={layout === 'new'}
                        onClick={() => setLayoutInLocal('new')}
                    >
                        <Styled.LayoutName htmlFor="new">Modern Layout (Default)</Styled.LayoutName>
                        <Styled.LayoutImg src={newLayout} />
                    </Styled.LayoutSelect>
                </Col>
            </Row>
        </Styled.SettingsItem>
    );

    return (
        <>
            <div className="row gx-5">
                <div className="col-lg-3 hidden-md" />
                <div className="col-lg-6 col-md-12">
                    <Card title="Settings">
                        <ThemeSettings />

                        {/* PrimaryColorSettings */}
                        <Styled.SettingsItem>
                            <Styled.SettingsLabel>
                                <IoColorPaletteOutline /> Change primary color:
                            </Styled.SettingsLabel>
                            <div style={{ display: 'flex' }}>
                                <Styled.ColorInput
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
                        </Styled.SettingsItem>

                        <LayoutSettings />
                    </Card>
                    <div className="col-lg-3 hidden-md" />
                </div>
            </div>
        </>
    );
};

Settings.propTypes = {};

export default Settings;
