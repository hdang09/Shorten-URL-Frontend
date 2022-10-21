import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { useSelector } from 'react-redux';
import { AiOutlineDown, AiOutlineDownload } from 'react-icons/ai';

import * as Styled from './QR.styled';
import { Button, Input } from '../';
import { urlSelector } from '../LinkItem/urlSlice';

import logo from '../../assets/images/logo.png';
import { ReactComponent as QRScanningImg } from '../../assets/svg/qr-code.svg';
import { ReactComponent as BorderQR } from '../../assets/svg/border.svg';
import { FRAMES, CORNERS_SQUARES, CORNERS_DOTS } from './QR.images';

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
        hideBackgroundDots: true,
    },
    cornersSquareOptions: {
        type: 'extra-rounded',
    },
    cornersDotOptions: {
        color: primaryColor,
    },
});

const QR = ({ url }) => {
    const currentUrl = useSelector(urlSelector)[0]?.shorten_link || url || '';
    const qrRef = useRef(null);

    useEffect(() => {
        qrCode.append(qrRef.current);
        qrCode.update({
            data: currentUrl,
        });
    }, [currentUrl]);

    const onDownloadClick = (type) => {
        qrCode.download({
            extension: type,
        });
    };

    const handleSetLogoSize = (e) => {
        qrCode.update({
            imageOptions: {
                ...qrCode.imageOptions,
                imageSize: e.target.value,
            },
        });
    };

    const [openSetingsList, setOpenSettingsList] = useState([
        { id: 1, isOpened: false },
        { id: 2, isOpened: false },
        { id: 3, isOpened: false },
        { id: 4, isOpened: false },
        { id: 5, isOpened: false },
    ]);

    const handleOpenSetingsList = (num) => {
        const newList = openSetingsList.map((item) => ({
            key: item.id,
            id: item.id,
            isOpened: item.id === num ? !openSetingsList[num - 1].isOpened : false,
        }));
        setOpenSettingsList(newList);
    };

    const changeSingleColor = (inputColor, option) => {
        // Remove gradient color
        if (qrCode._options[option].gradient) {
            qrCode.update({
                [option]: {
                    ...qrCode._options[option],
                    gradient: null,
                },
            });
        }

        qrCode.update({
            [option]: {
                ...qrCode._options[option],
                color: inputColor,
            },
        });
    };

    const changeGradientColor = (offset, color, option) => {
        // Remove single color
        if (!qrCode._options[option].gradient) {
            qrCode.update({
                [option]: {
                    ...qrCode._options[option],
                    gradient: {
                        ...qrCode._options[option].gradient,
                        colorStops: [
                            { offset: 0, color: '#000' },
                            { offset: 1, color: '#000' },
                        ],
                    },
                },
            });
        }

        const newArray = qrCode._options[option].gradient.colorStops.map(
            (item) => (item.color = item.offset === offset ? color : item.color),
        );
        qrCode.update(newArray);
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
                <Styled.SettingsItem>
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

                <Styled.SettingsItem>
                    <Styled.Header onClick={() => handleOpenSetingsList(2)}>
                        <Styled.Heading>Dots</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[1].isOpened && (
                        <Styled.Content>
                            {/* <label htmlFor="">Dots Style: </label> */}
                            {FRAMES.map((frame) => (
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
                            <div>
                                <Styled.ColorsInput>
                                    <label htmlFor="single"> Single color </label>
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeSingleColor(e.target.value, 'dotsOptions')
                                        }
                                    />
                                </Styled.ColorsInput>

                                <Styled.ColorsInput>
                                    <label htmlFor="gradient">Gradient color</label>
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeGradientColor(0, e.target.value, 'dotsOptions')
                                        }
                                    />
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeGradientColor(1, e.target.value, 'dotsOptions')
                                        }
                                    />
                                </Styled.ColorsInput>
                            </div>
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>

                <Styled.SettingsItem>
                    <Styled.Header onClick={() => handleOpenSetingsList(3)}>
                        <Styled.Heading>Corners</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {openSetingsList[2].isOpened && (
                        <Styled.Content>
                            <p>Corners Square: </p>
                            {CORNERS_SQUARES.map((frame) => (
                                <Styled.Image
                                    key={frame.type}
                                    src={frame.image}
                                    title={frame.type.toUpperCase()}
                                    onClick={() =>
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
                            <div>
                                <Styled.ColorsInput>
                                    <label htmlFor="single">Single color</label>
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeSingleColor(
                                                e.target.value,
                                                'cornersSquareOptions',
                                            )
                                        }
                                    />
                                </Styled.ColorsInput>

                                <Styled.ColorsInput>
                                    <label htmlFor="gradient">Gradient color</label>
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeGradientColor(
                                                0,
                                                e.target.value,
                                                'cornersSquareOptions',
                                            )
                                        }
                                    />
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeGradientColor(
                                                1,
                                                e.target.value,
                                                'cornersSquareOptions',
                                            )
                                        }
                                    />
                                </Styled.ColorsInput>
                            </div>
                            <p>Corners Dot: </p>
                            {CORNERS_DOTS.map((frame) => (
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
                            <div>
                                <Styled.ColorsInput>
                                    <label htmlFor="single"> Single color </label>
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeSingleColor(e.target.value, 'cornersDotOptions')
                                        }
                                    />
                                </Styled.ColorsInput>

                                <Styled.ColorsInput>
                                    <label htmlFor="gradient">Gradient color</label>
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeGradientColor(
                                                0,
                                                e.target.value,
                                                'cornersDotOptions',
                                            )
                                        }
                                    />
                                    <input
                                        type="color"
                                        onChange={(e) =>
                                            changeGradientColor(
                                                1,
                                                e.target.value,
                                                'cornersDotOptions',
                                            )
                                        }
                                    />
                                </Styled.ColorsInput>
                            </div>
                        </Styled.Content>
                    )}
                </Styled.SettingsItem>

                <Styled.SettingsItem>
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
                                    min="0.1"
                                    max="1"
                                    step="0.1"
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

                <Styled.SettingsItem>
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
