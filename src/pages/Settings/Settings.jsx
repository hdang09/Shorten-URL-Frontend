import { useContext, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ImBrightnessContrast } from 'react-icons/im';
import { IoColorPaletteOutline, IoContrast } from 'react-icons/io5';
import { RiContrastLine, RiLayout2Fill } from 'react-icons/ri';
import { TbContrast } from 'react-icons/tb';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import { ThemeContext } from '../../App';
import COLORS_LIST from '../../assets/styles/presets';
import { Card, Input } from '../../components';
import config from '../../config';
import { useLocalStorage } from '../../hooks';
import { LayoutContext } from '../../routers';
import localStorageUtils from '../../utils/localStorageUtils';

import * as Styled from './Settings.styled';

const Settings = () => {
    // config
    const {
        primaryColor,
        layout: layoutConfig,
        theme: themeConfig,
        isConstrast: contrastConfig,
    } = config.localStorage;

    // Set document tilte
    useEffect(() => {
        document.title = 'Settings | F-Code Shorten URL';
    }, []);

    // theme
    const theme = localStorageUtils.getItem(themeConfig) || 'light';
    const { toggleTheme, toggleContrast } = useContext(ThemeContext);

    // contrast
    const isContrast = localStorageUtils.getItem(contrastConfig) || false;

    // layout
    const layout = localStorageUtils.getItem(layoutConfig) || 'new';
    const setLayoutInLocal = useContext(LayoutContext);

    // primary color
    const [color, setColor] = useLocalStorage(primaryColor, '#45ce7b');
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    const SETTINGS_LIST = [
        {
            icon: <ImBrightnessContrast />,
            label: 'Mode',
            children: (
                <Row>
                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={toggleTheme}>
                            <BsSunFill size={25} color={theme === 'light' ? color : '#C6CACE'} />
                        </Styled.SettingsBox>
                    </Col>

                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={toggleTheme}>
                            <BsMoonFill size={25} color={theme === 'dark' ? color : '#C6CACE'} />
                        </Styled.SettingsBox>
                    </Col>
                </Row>
            ),
        },
        {
            icon: <IoContrast />,
            label: 'Contrast',
            children: (
                <Row>
                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={toggleContrast}>
                            <RiContrastLine
                                size={25}
                                color={isContrast === false ? color : '#C6CACE'}
                            />
                        </Styled.SettingsBox>
                    </Col>

                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={toggleContrast}>
                            <TbContrast size={25} color={isContrast === true ? color : '#C6CACE'} />
                        </Styled.SettingsBox>
                    </Col>
                </Row>
            ),
        },
        {
            icon: <IoColorPaletteOutline />,
            label: 'Presets',
            children: (
                <>
                    <Row>
                        {COLORS_LIST.map((colorItem) => (
                            <Col xs={6} sm={6} md={4} key={colorItem}>
                                <Styled.SmallSettingsBox
                                    onClick={() => setColor(colorItem)}
                                    active={color.toLowerCase() === colorItem.toLowerCase()}
                                    primaryColor={color}
                                >
                                    <Styled.Preset color={colorItem} />
                                </Styled.SmallSettingsBox>
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div style={{ display: 'flex' }}>
                                <Styled.ColorInput
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                                <Input
                                    large
                                    background
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                </>
            ),
        },
        {
            icon: <RiLayout2Fill />,
            label: 'Layout',
            children: (
                <Row>
                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={() => setLayoutInLocal('new')}>
                            <Styled.ModernLayout active={layout === 'new'} primaryColor={color}>
                                <div />
                                <div />
                            </Styled.ModernLayout>
                        </Styled.SettingsBox>
                    </Col>
                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={() => setLayoutInLocal('default')}>
                            <Styled.BasicLayout active={layout === 'default'} primaryColor={color}>
                                <div />
                                <div />
                            </Styled.BasicLayout>
                        </Styled.SettingsBox>
                    </Col>
                </Row>
            ),
        },
    ];

    return (
        <>
            <Container>
                <div className="row gx-5">
                    <div className="col-xl-3 col-lg-2 hidden-md" />
                    <div className="col-xl-6 col-lg-8 col-md-12">
                        <Card title="Settings">
                            {SETTINGS_LIST.map((item) => (
                                <Styled.SettingsItem key={item.label}>
                                    <Row>
                                        <Col md={12} lg={4}>
                                            <Styled.SettingsLabel>
                                                {item.icon} <span>{item.label}</span>
                                            </Styled.SettingsLabel>
                                        </Col>
                                        <Col md={12} lg={8}>
                                            {item.children}
                                        </Col>
                                    </Row>
                                </Styled.SettingsItem>
                            ))}
                        </Card>
                        <div className="col-xl-3 col-lg-2 hidden-md" />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Settings;
