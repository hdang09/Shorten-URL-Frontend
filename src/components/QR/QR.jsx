import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import * as Styled from './QR.styled';
import { Input, Button } from '../';
import { AiOutlineDown } from 'react-icons/ai';
import QRCodeStyling from 'qr-code-styling';
import logo from '../../assets/images/logo.png';
import { urlSelector } from '../LinkItem/urlSlice';

import Frame1 from '../../assets/QRCode/frame/qrcg-scan-me-arrow-frame.png';
import Frame2 from '../../assets/QRCode/frame/qrcg-scan-me-bar-frame.png';
import Frame3 from '../../assets/QRCode/frame/qrcg-scan-me-basic-frame.png';
import Frame4 from '../../assets/QRCode/frame/qrcg-scan-me-beer-frame.png';
import Frame5 from '../../assets/QRCode/frame/qrcg-scan-me-bottom-frame.png';
import Frame6 from '../../assets/QRCode/frame/qrcg-scan-me-bottom-header-frame.png';
import { toast } from 'react-toastify';

const FramesArray = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6];

const QR = (props) => {
    const color = JSON.parse(localStorage.getItem('primary-color'));

    const qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        image: logo,
        dotsOptions: {
            type: 'dots',
        },
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
            color,
        },
    });

    const currentUrl = useSelector(urlSelector)[0]?.shorten_url || '';
    console.log(currentUrl);

    // const [url, setUrl] = useState(currentUrl);
    const [fileExt, setFileExt] = useState('png');
    const ref = useRef(null);

    useEffect(() => {
        qrCode.append(ref.current);
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

    return (
        <>
            <Styled.Center>
                <Styled.QR ref={ref} />
            </Styled.Center>
            <Styled.Center>
                <Input
                    large
                    background
                    placeholder={currentUrl || 'Your QR Code will showing here...'}
                />
            </Styled.Center>
            <Styled.SettingsList>
                <Styled.SettingsItem>
                    <Styled.Header>
                        <Styled.Heading>Custom URL</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {/* <Styled.Content>
                        <Input large />
                    </Styled.Content> */}
                </Styled.SettingsItem>

                <Styled.SettingsItem
                    onClick={() => toast.warn('This feature will be updated soon!')}
                >
                    <Styled.Header>
                        <Styled.Heading>Colors</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    <Styled.Content>
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
                </Styled.SettingsItem>

                <Styled.SettingsItem>
                    <Styled.Header>
                        <Styled.Heading>Pattern</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {/* <Styled.Content>
                        {FramesArray.map((frame) => (
                            <Styled.Image
                                key={frame}
                                src={frame}
                                alt="Frame"
                                onClick={() => setFrame(frame)}
                            />
                        ))}
                    </Styled.Content> */}
                </Styled.SettingsItem>

                <Styled.SettingsItem>
                    <Styled.Header>
                        <Styled.Heading>Corners</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {/* <Styled.Content>
                        {FramesArray.map((frame) => (
                            <Styled.Image
                                key={frame}
                                src={frame}
                                alt="Frame"
                                onClick={() => setFrame(frame)}
                            />
                        ))}
                    </Styled.Content> */}
                </Styled.SettingsItem>

                <Styled.SettingsItem>
                    <Styled.Header>
                        <Styled.Heading>Logo</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {/* <Styled.Content>
                        URL:{' '}
                        <Input large onChange={(e) => qrCode.update({ image: e.target.value })} />
                        Upload file:{' '}
                        <Styled.Center>
                            <Button
                                onClick={() => toast.warn('This feature will be updated soon!')}
                            >
                                Upload
                            </Button>
                        </Styled.Center>
                    </Styled.Content> */}
                </Styled.SettingsItem>

                <Styled.SettingsItem>
                    <Styled.Header>
                        <Styled.Heading>Options</Styled.Heading>
                        <AiOutlineDown />
                    </Styled.Header>
                    {/* <Styled.Content>
                        Width:{' '}
                        <Input large onChange={(e) => qrCode.update({ width: e.target.value })} />
                        Height{' '}
                        <Input large onChange={(e) => qrCode.update({ height: e.target.value })} />
                        Margin{' '}
                        <Input large onChange={(e) => qrCode.update({ margin: e.target.value })} />
                    </Styled.Content> */}
                </Styled.SettingsItem>
            </Styled.SettingsList>
            <Styled.Center>
                <Button outline onClick={() => onDownloadClick('png')}>
                    PNG
                </Button>
                <Button outline onClick={() => onDownloadClick('svg')}>
                    SVG
                </Button>
            </Styled.Center>
            {/* <Styled.Center>
                <Button outline onClick={() => onDownloadClick('jpeg')}>
                    JPEG
                </Button>
                <Button outline onClick={() => onDownloadClick('webp')}>
                    WEBP
                </Button>
            </Styled.Center> */}
        </>
    );
};

QR.propTypes = {};

export default QR;
