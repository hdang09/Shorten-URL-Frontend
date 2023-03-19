import React, { memo, useEffect, useRef, useState } from 'react';
import { AiFillFileAdd, AiOutlineDown, AiOutlineDownload } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import QRCodeStyling from 'qr-code-styling';

import { primaryColorSelector } from '../../app/reducers/customizationReducer';
import { urlSelector } from '../../app/reducers/urlReducer';
import logo from '../../assets/images/logo.png';
import { ReactComponent as BorderQR } from '../../assets/svg/border.svg';
import { ReactComponent as QRScanningImg } from '../../assets/svg/qr-code.svg';
import { Button, Input } from '../';

import { CORNERS_DOTS, CORNERS_SQUARES, FRAMES } from './QR.images';
import * as Styled from './QR.styled';

let primaryColor = JSON.parse(localStorage.getItem('primary-color')) || '#45ce7b';

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
    primaryColor = useSelector(primaryColorSelector);
    const urlInRedux = useSelector(urlSelector).shorten;
    const currentUrl = url || urlInRedux || '';
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

    const [openSetingsList, setOpenSettingsList] = useState(
        Array.from({ length: 5 }, (_, id) => ({ id, isOpened: false })),
    );

    const handleOpenSetingsList = (id) => {
        setOpenSettingsList((list) =>
            list.map((item) => ({
                ...item,
                isOpened: item.id === id ? !item.isOpened : false,
            })),
        );
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

    const SETTINGS_LIST = [
        {
            header: 'URL',
            content: <Input large value={currentUrl || 'Your QR Code will showing here...'} />,
        },
        {
            header: 'Dots',
            content: (
                <>
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
                                onChange={(e) => changeSingleColor(e.target.value, 'dotsOptions')}
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
                </>
            ),
        },
        {
            header: 'Corners',
            content: (
                <>
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
                                    changeSingleColor(e.target.value, 'cornersSquareOptions')
                                }
                            />
                        </Styled.ColorsInput>

                        <Styled.ColorsInput>
                            <label htmlFor="gradient">Gradient color</label>
                            <input
                                type="color"
                                onChange={(e) =>
                                    changeGradientColor(0, e.target.value, 'cornersSquareOptions')
                                }
                            />
                            <input
                                type="color"
                                onChange={(e) =>
                                    changeGradientColor(1, e.target.value, 'cornersSquareOptions')
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
                                    changeGradientColor(0, e.target.value, 'cornersDotOptions')
                                }
                            />
                            <input
                                type="color"
                                onChange={(e) =>
                                    changeGradientColor(1, e.target.value, 'cornersDotOptions')
                                }
                            />
                        </Styled.ColorsInput>
                    </div>
                </>
            ),
        },
        {
            header: 'Logo',
            content: (
                <>
                    {/* Upload file */}
                    <input
                        id="upload-file"
                        type="file"
                        onChange={(e) =>
                            qrCode.update({ image: URL.createObjectURL(e.target.files[0]) })
                        }
                        hidden
                    />
                    <Styled.UploadFile htmlFor="upload-file">
                        <AiFillFileAdd color={primaryColor} /> <span>Upload file</span>
                    </Styled.UploadFile>

                    <label>URL:</label>
                    <Input
                        placeholder="Input your logo URL"
                        large
                        onChange={(e) => qrCode.update({ image: e.target.value })}
                    />

                    <div>
                        <label>Margin: </label>
                        <Input
                            large
                            placeholder="0"
                            type="number"
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

                    <Styled.HideBgLogo>
                        <label>Transparent</label>
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
                    </Styled.HideBgLogo>

                    <Styled.Slider>
                        <label htmlFor="">Logo size: </label>
                        <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.1"
                            onChange={handleSetLogoSize}
                        />
                    </Styled.Slider>
                </>
            ),
        },
        {
            header: 'Options',
            content: (
                <>
                    Width:{' '}
                    <Input
                        type="number"
                        placeholder="300"
                        large
                        onChange={(e) => qrCode.update({ width: e.target.value })}
                    />
                    Height{' '}
                    <Input
                        type="number"
                        placeholder="300"
                        large
                        onChange={(e) => qrCode.update({ height: e.target.value })}
                    />
                    Padding{' '}
                    <Input
                        type="number"
                        placeholder="0"
                        large
                        onChange={(e) => qrCode.update({ margin: e.target.value })}
                    />
                </>
            ),
        },
    ];

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
                {SETTINGS_LIST.map((item, index) => (
                    <Styled.SettingsItem key={item.header}>
                        <Styled.Header onClick={() => handleOpenSetingsList(index)}>
                            <Styled.Heading>{item.header}</Styled.Heading>
                            <AiOutlineDown />
                        </Styled.Header>
                        {openSetingsList[index].isOpened && (
                            <Styled.Content>{item.content}</Styled.Content>
                        )}
                    </Styled.SettingsItem>
                ))}
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

QR.propTypes = {
    url: PropTypes.string,
};

export default memo(QR);
