import { useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ImBrightnessContrast } from 'react-icons/im';
import { IoColorPaletteOutline, IoContrast } from 'react-icons/io5';
import { RiContrastLine, RiLayout2Fill } from 'react-icons/ri';
import { TbContrast } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import {
    contrastSelector,
    layoutSelector,
    modeSelector,
    primaryColorSelector,
    setContrast,
    setLayout,
    setMode,
    setPrimaryColor,
} from '../../app/reducers/customizationReducer';
import COLORS_LIST from '../../assets/styles/presets';
import { Card, Input } from '../../components';

import * as Styled from './Settings.styled';

const Settings = () => {
    const dispatch = useDispatch();

    // Set document tilte
    useEffect(() => {
        document.title = 'Settings | F-Code Shorten URL';
    }, []);

    // Get state in customization from Redux
    const theme = useSelector(modeSelector);
    const isContrast = useSelector(contrastSelector);
    const layout = useSelector(layoutSelector);
    const primaryColor = useSelector(primaryColorSelector);

    const SETTINGS_LIST = [
        {
            icon: <ImBrightnessContrast />,
            label: 'Mode',
            children: (
                <Row>
                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={() => dispatch(setMode('light'))}>
                            <BsSunFill
                                size={25}
                                color={theme === 'light' ? primaryColor : '#C6CACE'}
                            />
                        </Styled.SettingsBox>
                    </Col>

                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={() => dispatch(setMode('dark'))}>
                            <BsMoonFill
                                size={25}
                                color={theme === 'dark' ? primaryColor : '#C6CACE'}
                            />
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
                        <Styled.SettingsBox onClick={() => dispatch(setContrast(false))}>
                            <RiContrastLine
                                size={25}
                                color={isContrast === false ? primaryColor : '#C6CACE'}
                            />
                        </Styled.SettingsBox>
                    </Col>

                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={() => dispatch(setContrast(true))}>
                            <TbContrast
                                size={25}
                                color={isContrast === true ? primaryColor : '#C6CACE'}
                            />
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
                                    onClick={() => dispatch(setPrimaryColor(colorItem))}
                                    active={primaryColor.toLowerCase() === colorItem.toLowerCase()}
                                    primaryColor={primaryColor}
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
                                    value={primaryColor}
                                    onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
                                />
                                <Input
                                    large
                                    background
                                    value={primaryColor}
                                    onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
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
                        <Styled.SettingsBox onClick={() => dispatch(setLayout('new'))}>
                            <Styled.ModernLayout
                                active={layout === 'new'}
                                primaryColor={primaryColor}
                            >
                                <div />
                                <div />
                            </Styled.ModernLayout>
                        </Styled.SettingsBox>
                    </Col>
                    <Col xs={6} sm={6}>
                        <Styled.SettingsBox onClick={() => dispatch(setLayout('default'))}>
                            <Styled.BasicLayout
                                active={layout === 'default'}
                                primaryColor={primaryColor}
                            >
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
