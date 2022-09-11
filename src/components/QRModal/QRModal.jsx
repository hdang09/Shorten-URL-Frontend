import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { down } from 'styled-breakpoints';
import { BiArrowBack } from 'react-icons/bi';

import { Button, Input } from '..';
import * as Styled from './QRModal.styled';
import Frame1 from '../../assets/qr/frame/qrcg-scan-me-arrow-frame.png';
import Frame2 from '../../assets/qr/frame/qrcg-scan-me-bar-frame.png';
import Frame3 from '../../assets/qr/frame/qrcg-scan-me-basic-frame.png';
import Frame4 from '../../assets/qr/frame/qrcg-scan-me-beer-frame.png';
import Frame5 from '../../assets/qr/frame/qrcg-scan-me-bottom-frame.png';
import Frame6 from '../../assets/qr/frame/qrcg-scan-me-bottom-header-frame.png';

const FramesArray = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6];

const QRModal = ({ setCloseQRModal, url }) => {
    const [frame, setFrame] = useState(Frame1);
    const isTablet = useBreakpoint(down('md'));
    const [clickedCustomize, setClickedCustomize] = useState(false);

    return (
        <>
            <Styled.Wrapper>
                <Styled.CloseBTN
                    as={AiOutlineClose}
                    onClick={() => setCloseQRModal()}
                ></Styled.CloseBTN>
                {(!clickedCustomize || !isTablet) && (
                    <Styled.Preview>
                        <Styled.PreviewImage src={frame} alt="" />
                        <div style={{ marginBottom: '12px' }}>
                            <Button shine="true" leftIcon={<AiOutlineDownload />}>
                                Download
                            </Button>
                        </div>
                        {isTablet && (
                            <div>
                                <Button
                                    outline
                                    leftIcon={<MdOutlineDashboardCustomize />}
                                    onClick={() => setClickedCustomize(true)}
                                >
                                    Customize
                                </Button>
                            </div>
                        )}
                    </Styled.Preview>
                )}
                {((clickedCustomize && isTablet) || !isTablet) && (
                    <Styled.Customize>
                        <Styled.List>
                            <h2>FRAME</h2>
                            <Styled.Item>
                                {FramesArray.map((frame) => (
                                    <Styled.Image
                                        key={frame}
                                        src={frame}
                                        alt="Frame"
                                        onClick={() => setFrame(frame)}
                                    />
                                ))}
                            </Styled.Item>
                            <h2>QR CODE</h2>
                            <Styled.Item>
                                {FramesArray.map((frame) => (
                                    <Styled.Image
                                        key={frame}
                                        src={frame}
                                        alt="Frame"
                                        onClick={() => setFrame(frame)}
                                    />
                                ))}
                            </Styled.Item>
                            <h2>LOGO</h2>
                            <Styled.Item>
                                {FramesArray.map((frame) => (
                                    <Styled.Image
                                        key={frame}
                                        src={frame}
                                        alt="Frame"
                                        onClick={() => setFrame(frame)}
                                    />
                                ))}
                            </Styled.Item>
                            <h2>COLOR</h2>
                            <Styled.Item>
                                <Input outline placeholder="#000000" />
                            </Styled.Item>
                            <div style={{ marginBottom: '12px' }}>
                                <Button
                                    outline
                                    leftIcon={<BiArrowBack />}
                                    onClick={() => setClickedCustomize(false)}
                                >
                                    Preview QR Code
                                </Button>
                            </div>
                        </Styled.List>
                    </Styled.Customize>
                )}
            </Styled.Wrapper>
            <Styled.Overlay></Styled.Overlay>
        </>
    );
};

QRModal.propTypes = {};

export default QRModal;
