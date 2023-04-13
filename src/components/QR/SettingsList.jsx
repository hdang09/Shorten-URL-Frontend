import React, { useState } from 'react';
import { AiFillFileAdd, AiOutlineDown } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { primaryColorSelector } from '../../app/reducers/customizationReducer.js';
import { changeGradientColor, changeSingleColor, handleSetLogoSize } from '../../utils/customQR.js';
import { Input } from '../';

import { CORNERS_DOTS, CORNERS_SQUARES, FRAMES } from './QR.images';
import * as Styled from './QR.styled';

const SettingsList = ({ qrCode, currentUrl }) => {
    let primaryColor = useSelector(primaryColorSelector);

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
                            onClick={() =>
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
                                    changeSingleColor(e.target.value, 'dotsOptions', qrCode)
                                }
                            />
                        </Styled.ColorsInput>

                        <Styled.ColorsInput>
                            <label htmlFor="gradient">Gradient color</label>
                            <input
                                type="color"
                                onChange={(e) =>
                                    changeGradientColor(0, e.target.value, 'dotsOptions', qrCode)
                                }
                            />
                            <input
                                type="color"
                                onChange={(e) =>
                                    changeGradientColor(1, e.target.value, 'dotsOptions', qrCode)
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
                                    changeSingleColor(
                                        e.target.value,
                                        'cornersSquareOptions',
                                        qrCode,
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
                                        qrCode,
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
                                        qrCode,
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
                                    changeSingleColor(e.target.value, 'cornersDotOptions', qrCode)
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
                                        qrCode,
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
                                        qrCode,
                                    )
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
                            onChange={(e) => handleSetLogoSize(e, qrCode)}
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
    );
};

SettingsList.propTypes = {
    qrCode: PropTypes.object,
    currentUrl: PropTypes.string,
};

export default SettingsList;
