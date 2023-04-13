import React, { memo, useEffect, useRef } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import QRCodeStyling from 'qr-code-styling';

import { urlSelector } from '../../app/reducers/urlReducer';
import logo from '../../assets/images/logo.png';
import { ReactComponent as BorderQR } from '../../assets/svg/border.svg';
import { ReactComponent as QRScanningImg } from '../../assets/svg/qr-code.svg';
import { onDownloadClick } from '../../utils/customQR.js';
import { Button } from '../';

import * as Styled from './QR.styled';
import SettingsList from './SettingsList';

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
    const urlInRedux = useSelector(urlSelector).shorten;
    const currentUrl = url || urlInRedux || '';
    const qrRef = useRef(null);
    const TYPES = ['png', 'svg'];
    // const TYPES = ['png', 'svg', 'jpeg', 'webp']

    useEffect(() => {
        qrCode.append(qrRef.current);
        qrCode.update({
            data: currentUrl,
        });
    }, [currentUrl]);

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

            <SettingsList qrCode={qrCode} currentUrl={currentUrl} />

            <Styled.Center>
                {TYPES.map((type) => {
                    return (
                        <Button
                            key={type}
                            leftIcon={<AiOutlineDownload />}
                            outline
                            onClick={() => onDownloadClick(type, qrCode)}
                        >
                            {type.toUpperCase()}
                        </Button>
                    );
                })}
            </Styled.Center>
        </>
    );
};

QR.propTypes = {
    url: PropTypes.string,
};

export default memo(QR);
