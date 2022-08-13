import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';

import { Button, Input } from '..';
import * as Styled from './QRModal.styled';
import Frame1 from '../../assets/QRCode/frame/qrcg-scan-me-arrow-frame.png';
import Frame2 from '../../assets/QRCode/frame/qrcg-scan-me-bar-frame.png';
import Frame3 from '../../assets/QRCode/frame/qrcg-scan-me-basic-frame.png';
import Frame4 from '../../assets/QRCode/frame/qrcg-scan-me-beer-frame.png';
import Frame5 from '../../assets/QRCode/frame/qrcg-scan-me-bottom-frame.png';
import Frame6 from '../../assets/QRCode/frame/qrcg-scan-me-bottom-header-frame.png';

const QRModal = ({ setCloseQRModal }) => {
    const [frame, setFrame] = useState(Frame1);

    return (
        <div>
            <Styled.Wrapper>
                <Styled.CloseBTN
                    as={AiOutlineClose}
                    onClick={() => setCloseQRModal()}
                ></Styled.CloseBTN>
                <Styled.Preview>
                    <Styled.PreviewImage src={frame} alt="" />
                    <Button leftIcon={<AiOutlineDownload />}>Download</Button>
                </Styled.Preview>
                <Styled.Customize>
                    <Styled.List>
                        <h2>FRAME</h2>
                        <Styled.Item>
                            <Styled.Image src={Frame1} alt="" onClick={() => setFrame(Frame1)} />
                            <Styled.Image src={Frame2} alt="" onClick={() => setFrame(Frame2)} />
                            <Styled.Image src={Frame3} alt="" onClick={() => setFrame(Frame3)} />
                            <Styled.Image src={Frame4} alt="" onClick={() => setFrame(Frame4)} />
                            <Styled.Image src={Frame5} alt="" onClick={() => setFrame(Frame5)} />
                            <Styled.Image src={Frame6} alt="" onClick={() => setFrame(Frame6)} />
                            <Styled.Image src={Frame4} alt="" onClick={() => setFrame(Frame4)} />
                        </Styled.Item>
                        <h2>QR CODE</h2>
                        <Styled.Item>
                            <Styled.Image src={Frame1} alt="" onClick={() => setFrame(Frame1)} />
                            <Styled.Image src={Frame2} alt="" onClick={() => setFrame(Frame2)} />
                            <Styled.Image src={Frame3} alt="" onClick={() => setFrame(Frame3)} />
                            <Styled.Image src={Frame4} alt="" onClick={() => setFrame(Frame4)} />
                            <Styled.Image src={Frame5} alt="" onClick={() => setFrame(Frame5)} />
                            <Styled.Image src={Frame6} alt="" onClick={() => setFrame(Frame6)} />
                            <Styled.Image src={Frame4} alt="" onClick={() => setFrame(Frame4)} />
                        </Styled.Item>
                        <h2>LOGO</h2>
                        <Styled.Item>
                            <Styled.Image src={Frame1} alt="" onClick={() => setFrame(Frame1)} />
                            <Styled.Image src={Frame2} alt="" onClick={() => setFrame(Frame2)} />
                            <Styled.Image src={Frame3} alt="" onClick={() => setFrame(Frame3)} />
                            <Styled.Image src={Frame4} alt="" onClick={() => setFrame(Frame4)} />
                            <Styled.Image src={Frame5} alt="" onClick={() => setFrame(Frame5)} />
                            <Styled.Image src={Frame6} alt="" onClick={() => setFrame(Frame6)} />
                            <Styled.Image src={Frame4} alt="" onClick={() => setFrame(Frame4)} />
                        </Styled.Item>
                        <h2>COLOR</h2>
                        <Styled.Item>
                            <Input outline placeholder="#000000" />
                        </Styled.Item>
                    </Styled.List>
                </Styled.Customize>
            </Styled.Wrapper>
            <Styled.Overlay></Styled.Overlay>
        </div>
    );
};

QRModal.propTypes = {};

export default QRModal;