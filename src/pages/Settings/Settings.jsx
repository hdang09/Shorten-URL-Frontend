import { useEffect, useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ImBrightnessContrast } from 'react-icons/im';
import { IoColorPaletteOutline, IoContrast } from 'react-icons/io5';

import * as Styled from './Settings.styled';
import { Card, Input } from '../../components';
import { useLocalStorage } from '../../hooks';
import { ThemeContext } from '../../App';
import { LayoutContext } from '../../routers';

import { Col, Container, Row } from 'styled-bootstrap-grid';
import { RiContrastLine, RiLayout2Fill } from 'react-icons/ri';
import COLORS_LIST from '../../assets/styles/presets';
import { TbContrast } from 'react-icons/tb';

const Settings = () => {
    const theme = JSON.parse(localStorage.getItem('data-theme')) || 'light';
    const isContrast = JSON.parse(localStorage.getItem('is-contrast')) || false;
    const { toggleTheme, toggleContrast } = useContext(ThemeContext);
    const layout = JSON.parse(localStorage.getItem('layout')) || 'new';
    const setLayoutInLocal = useContext(LayoutContext);

    useEffect(() => {
        document.title = 'Settings | F-Code Shorten URL';
    }, []);

    const [color, setColor] = useLocalStorage('primary-color', '#45ce7b');
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    const SETTINGS_LIST = [
        {
            icon: <ImBrightnessContrast />,
            label: 'Mode',
            children: (
                <>
                    <Styled.SettingsBox onClick={toggleTheme}>
                        <BsSunFill size={25} color={theme === 'light' ? color : '#C6CACE'} />
                    </Styled.SettingsBox>
                    <Styled.SettingsBox onClick={toggleTheme}>
                        <BsMoonFill size={25} color={theme === 'dark' ? color : '#C6CACE'} />
                    </Styled.SettingsBox>
                </>
            ),
        },
        {
            icon: <IoContrast />,
            label: 'Contrast',
            children: (
                <>
                    <Styled.SettingsBox onClick={toggleContrast}>
                        <RiContrastLine
                            size={25}
                            color={isContrast === false ? color : '#C6CACE'}
                        />
                    </Styled.SettingsBox>
                    <Styled.SettingsBox onClick={toggleContrast}>
                        <TbContrast size={25} color={isContrast === true ? color : '#C6CACE'} />
                    </Styled.SettingsBox>
                </>
            ),
        },
        {
            icon: <IoColorPaletteOutline />,
            label: 'Presets',
            children: (
                <>
                    {COLORS_LIST.map((colorItem) => (
                        <Styled.SmallSettingsBox
                            key={colorItem}
                            onClick={() => setColor(colorItem)}
                            active={color === colorItem}
                            primaryColor={color}
                        >
                            <Styled.Preset color={colorItem} />
                        </Styled.SmallSettingsBox>
                    ))}
                    <div style={{ display: 'flex', paddingRight: '15px' }}>
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
                </>
            ),
        },
        {
            icon: <RiLayout2Fill />,
            label: 'Layout',
            children: (
                <>
                    <div style={{ display: 'flex' }}>
                        <Styled.SettingsBox>
                            <Styled.ModernLayout
                                active={layout === 'new'}
                                onClick={() => setLayoutInLocal('new')}
                                primaryColor={color}
                            >
                                <div />
                                <div />
                            </Styled.ModernLayout>
                        </Styled.SettingsBox>
                        <Styled.SettingsBox>
                            <Styled.BasicLayout
                                active={layout === 'default'}
                                onClick={() => setLayoutInLocal('default')}
                                primaryColor={color}
                            >
                                <div />
                                <div />
                            </Styled.BasicLayout>
                        </Styled.SettingsBox>
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <Container>
                <div className="row gx-5">
                    <div className="col-lg-3 hidden-md" />
                    <div className="col-lg-6 col-md-12">
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
                        <div className="col-lg-3 hidden-md" />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Settings;
