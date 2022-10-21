import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import * as Styled from './QR.styled';
import { Button, Input } from '../';
import { AiOutlineDown, AiOutlineDownload } from 'react-icons/ai';
import logo from '../../assets/images/logo.png';
import QRCodeStyling from 'qr-code-styling';

import { urlSelector } from '../LinkItem/urlSlice';

import classyRoundedPattern from '../../assets/qr/pattern/classy-rounded.png';
import classyPattern from '../../assets/qr/pattern/classy.png';
import dotsPattern from '../../assets/qr/pattern/dots.png';
import defaultPattern from '../../assets/qr/pattern/default.png';
import extraRoundedPattern from '../../assets/qr/pattern/extra-rounded.png';
import roundedPattern from '../../assets/qr/pattern/rounded.png';
import squareCornerSquare from '../../assets/qr/corners/corner-square/square.png';

import dotCornerSquare from '../../assets/qr/corners/corner-square/dot.png';
import extraRoundedCornerSquare from '../../assets/qr/corners/corner-square/extra-rounded.png';
import SquareCornerDot from '../../assets/qr/corners/corner-dot/square.png';
import DotCornerDot from '../../assets/qr/corners/corner-dot/dot.png';

import { ReactComponent as QRScanningImg } from '../../assets/svg/qr-code.svg';
import { ReactComponent as BorderQR } from '../../assets/svg/border.svg';

const framesArray = [
    { image: defaultPattern, type: '' },
    { image: classyRoundedPattern, type: 'classy-rounded' },
    { image: classyPattern, type: 'classy' },
    { image: dotsPattern, type: 'dots' },
    { image: extraRoundedPattern, type: 'extra-rounded' },
    { image: roundedPattern, type: 'rounded' },
];

const cornerSquareArray = [
    { image: squareCornerSquare, type: 'square' },
    { image: dotCornerSquare, type: 'dots' },
    { image: extraRoundedCornerSquare, type: 'extra-rounded' },
];
const cornerDotArray = [
    { image: SquareCornerDot, type: 'square' },
    { image: DotCornerDot, type: 'dots' },
];

let primaryColor = JSON.parse(localStorage.getItem('primary-color')) || '#000';

const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    image: logo,
    backgroundOptions: {
        color: 'transparent',
    },
    imageOptions: {
        crossOrigin: 'anonymous',
        margin: 10,
    },
    cornersSquareOptions: {
        type: 'extra-rounded',
    },
    cornersDotOptions: {
        color: primaryColor,
    },
});

const QR = ({ url }) => {
    // const [gradientArray, setGradientArray] = useState([{}, {}]);

    // const handleSetGradient = (value) => {
    //     console.log(value);
    //     qrCode.update({
    //         dotsOptions: {
    //             ...qrCode._options.dotsOptions,
    //             gradient: {
    //                 ...qrCode._options.dotsOptions.gradient,
    //                 colorStops: gradientArray,
    //             },
    //         },
    //     });
    // };

    // const color = JSON.parse(localStorage.getItem('primary-color'));

    const currentUrl = useSelector(urlSelector)[0]?.shorten_link || url || '';
    // const currentUrl = url || '';

    // const [url, setUrl] = useState(currentUrl);
    const qrRef = useRef(null);

    useEffect(() => {
        qrCode.append(qrRef.current);
    }, [currentUrl]);

    useEffect(() => {
        qrCode.update({
            data: currentUrl,
        });
    }, [currentUrl]);

    const onDownloadClick = (type) => {
        qrCode.download({
            extension: type,
        });
    };

    const [logoSize, setLogoSize] = useState(0.5);
    const handleSetLogoSize = (e) => {
        qrCode.update({
            imageOptions: {
                ...qrCode.imageOptions,
                imageSize: e.target.value,
            },
        });
        setLogoSize(e.target.value);
    };

    const customUrlRef = useRef(null);
    const dotsRef = useRef(null);
    const cornersRef = useRef(null);
    const logoRef = useRef(null);
    const optionsRef = useRef(null);
    const [openSetingsList, setOpenSettingsList] = useState([
        { id: 1, isOpened: false },
        { id: 2, isOpened: false },
        { id: 3, isOpened: false },
        { id: 4, isOpened: false },
        { id: 5, isOpened: false },
    ]);

    const arrayRefs = [customUrlRef, dotsRef, cornersRef, logoRef, optionsRef];

    const handleOpenSetingsList = (num) => {
        const newList = openSetingsList.map((item) => ({
            key: item.id,
            id: item.id,
            isOpened: item.id === num ? !openSetingsList[num - 1].isOpened : false,
        }));
        setOpenSettingsList(newList);
        // arrayRefs[num - 1].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Styled.Center>
                {!currentUrl ? (
                    <Styled.QRScanningGroup>
                        <Styled.QrScanningBg as={QRScanningImg} />
                        <Styled.QrScanning as={QRScanningImg} />
                        <Styled.BorderQr as={BorderQR} />
                    </Styled.QRScanningGroup>
                ) : (
                    <Styled.QR ref={qrRef} />
                )}
            </Styled.Center>
            <Styled.SettingsList>
                <Styled.SettingsItem ref={customUrlRef}>
                    <Styled.Header onClick={() => handleOpenSetingsList(1)}>
                        <Styled.Heading>URL</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[0].isOpened && (
                        <Styled.Content>
                            <Input
                                large
                                value={currentUrl || 'Your QR Code will showing here...'}
                            />
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>

                <Styled.SettingsItem ref={dotsRef}>
                    <Styled.Header onClick={() => handleOpenSetingsList(2)}>
                        <Styled.Heading>Dots</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[1].isOpened && (
                        <Styled.Content>
                            {/* <label htmlFor="">Dots Style: </label> */}
                            {framesArray.map((frame) => (
                                <Styled.Image
                                    key={frame.type}
                                    src={frame.image}
                                    title={frame.type.toUpperCase()}
                                    onClick={(e) =>
                                        qrCode.update({
                                            dotsOptions: {
                                                ...qrCode._options.dotsOptions,
                                                type: frame.type,
                                            },
                                        })
                                    }
                                    alt="Frame"
                                    // onClick={() => setFrame(frame)}
                                />
                            ))}
                            <form action="">
                                {/* <input id="single" type="radio" name="pattern-color" /> */}
                                <label htmlFor="single">Single color</label>
                                <input
                                    type="color"
                                    onChange={(e) =>
                                        qrCode.update({
                                            dotsOptions: {
                                                ...qrCode._options.dotsOptions,
                                                color: e.target.value,
                                            },
                                        })
                                    }
                                />

                                {/* <Input
                                    color
                                    large
                                    onChange={(e) =>
                                        qrCode.update({
                                            dotsOptions: {
                                                ...qrCode._options.dotsOptions,
                                                color: e.target.value,
                                            },
                                        })
                                    }
                                /> */}

                                {/* <input id="gradient" type="radio" name="pattern-color" />
                            <label htmlFor="gradient">Gradient color</label>
                            <Input
                                color
                                large
                                onChange={(e) =>
                                    qrCode.update({
                                        dotsOptions: {
                                            ...qrCode._options.dotsOptions,
                                            gradient: {
                                                ...qrCode._options.dotsOptions.gradient,
                                                colorStops: [
                                                    ...qrCode._options.dotsOptions.gradient
                                                        ?.colorStops,
                                                    { offset: 0, color: e.target.value },
                                                ],
                                            },
                                        },
                                    })
                                }
                            />
                            <Input
                                color
                                large
                                onChange={(e) =>
                                    qrCode.update({
                                        dotsOptions: {
                                            ...qrCode._options.dotsOptions,
                                            gradient: {
                                                ...qrCode._options.dotsOptions.gradient,
                                                colorStops: [
                                                    ...qrCode._options.dotsOptions.gradient
                                                        ?.colorStops,
                                                    { offset: 1, color: e.target.value },
                                                ],
                                            },
                                        },
                                    })
                                }
                            /> */}
                            </form>
                            {/* Background Color
                        <form action="">
                            <input id="single" type="radio" name="background-color" />
                            <label htmlFor="single">Single color</label>
                            <input id="gradient" type="radio" name="background-color" />
                            <label htmlFor="gradient">Gradient color</label>
                        </form>
                        <Input color large />
                        <Input color large />
                        <Input color large />
                        Pattern Color
                        <form action="">
                            <input id="single" type="radio" name="pattern-color" />
                            <label htmlFor="single">Single color</label>
                            <input id="gradient" type="radio" name="pattern-color" />
                            <label htmlFor="gradient">Gradient color</label>
                        </form>
                        Corners Square Color:
                        <form action="">
                            <input id="single" type="radio" name="corner-square-color" />
                            <label htmlFor="single">Single color</label>
                            <input id="gradient" type="radio" name="corner-square-color" />
                            <label htmlFor="gradient">Gradient color</label>
                        </form>
                        Corners Dot Color:
                        <form action="">
                            <input id="single" type="radio" name="corner-dot-color" />
                            <label htmlFor="single">Single color</label>
                            <input id="gradient" type="radio" name="corner-dot-color" />
                            <label htmlFor="gradient">Gradient color</label>
                        </form> */}
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>

                <Styled.SettingsItem ref={cornersRef}>
                    <Styled.Header onClick={() => handleOpenSetingsList(3)}>
                        <Styled.Heading>Corners</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[2].isOpened && (
                        <Styled.Content>
                            <p>Corners Square: </p>
                            {cornerSquareArray.map((frame) => (
                                <Styled.Image
                                    key={frame.type}
                                    src={frame.image}
                                    title={frame.type.toUpperCase()}
                                    onClick={(e) =>
                                        qrCode.update({
                                            cornersSquareOptions: {
                                                ...qrCode._options.cornersSquareOptions,
                                                type: frame.type,
                                            },
                                        })
                                    }
                                    alt="Corner Square"
                                    // onClick={() => setFrame(frame)}
                                />
                            ))}
                            <form>
                                <label htmlFor="single">Single color</label>
                                <input
                                    type="color"
                                    onChange={(e) =>
                                        qrCode.update({
                                            cornersSquareOptions: {
                                                ...qrCode._options.cornersSquareOptions,
                                                color: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </form>
                            <p htmlFor="">Corners Dot: </p>
                            {cornerDotArray.map((frame) => (
                                <Styled.Image
                                    key={frame.type}
                                    src={frame.image}
                                    title={frame.type.toUpperCase()}
                                    onClick={(e) =>
                                        qrCode.update({
                                            cornersDotOptions: {
                                                ...qrCode.cornersDotOptions,
                                                type: frame.type,
                                            },
                                        })
                                    }
                                    alt="Corner Dot"
                                    // onClick={() => setFrame(frame)}
                                />
                            ))}
                            <form>
                                <label htmlFor="single">Single color</label>
                                <input
                                    type="color"
                                    onChange={(e) =>
                                        qrCode.update({
                                            cornersDotOptions: {
                                                ...qrCode._options.cornersDotOptions,
                                                color: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </form>
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>

                <Styled.SettingsItem ref={logoRef}>
                    <Styled.Header onClick={() => handleOpenSetingsList(4)}>
                        <Styled.Heading>Logo</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[3].isOpened && (
                        <Styled.Content>
                            <label>URL:</label>

                            <Input
                                large
                                onChange={(e) => qrCode.update({ image: e.target.value })}
                            />
                            <label>Upload file:</label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    qrCode.update({ image: URL.createObjectURL(e.target.files[0]) })
                                }
                            />
                            <div>
                                <label>Hide background logo: </label>
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        qrCode.update({
                                            imageOptions: {
                                                ...qrCode.imageOptions,
                                                hideBackgroundDots: e.target.checked,
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="">Logo size: </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={logoSize}
                                    onChange={handleSetLogoSize}
                                />
                            </div>
                            <div>
                                <label>Margin: </label>
                                <Input
                                    large
                                    onChange={(e) =>
                                        qrCode.update({
                                            imageOptions: {
                                                ...qrCode.imageOptions,
                                                margin: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>

                <Styled.SettingsItem ref={optionsRef}>
                    <Styled.Header onClick={() => handleOpenSetingsList(5)}>
                        <Styled.Heading>Options</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[4].isOpened && (
                        <Styled.Content>
                            Width:{' '}
                            <Input
                                large
                                onChange={(e) => qrCode.update({ width: e.target.value })}
                            />
                            Height{' '}
                            <Input
                                large
                                onChange={(e) => qrCode.update({ height: e.target.value })}
                            />
                            Padding{' '}
                            <Input
                                large
                                onChange={(e) => qrCode.update({ margin: e.target.value })}
                            />
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>
            </Styled.SettingsList>
            <Styled.Center>
                <Button
                    leftIcon={<AiOutlineDownload />}
                    outline
                    onClick={() => onDownloadClick('png')}
                >
                    PNG
                </Button>
                <Button
                    leftIcon={<AiOutlineDownload />}
                    outline
                    onClick={() => onDownloadClick('svg')}
                >
                    SVG
                </Button>
            </Styled.Center>
            {/* <Styled.Center>
                <Button leftIcon={<AiOutlineDownload />} outline onClick={() => onDownloadClick('jpeg')}>
                    JPEG
                </Button>
                <Button leftIcon={<AiOutlineDownload />} outline onClick={() => onDownloadClick('webp')}>
                    WEBP
                </Button>
            </Styled.Center> */}
        </>
    );
};

export default QR;
