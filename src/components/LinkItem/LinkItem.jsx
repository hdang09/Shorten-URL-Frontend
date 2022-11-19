import { useState, useRef } from 'react';
import { MdOutlineContentCopy, MdUpdate } from 'react-icons/md';
import { IoCreateOutline, IoQrCodeOutline } from 'react-icons/io5';
import { BsLink45Deg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import moment from 'moment';
import { SocialIcon } from 'react-social-icons';

import * as Styled from './LinkItem.styled';
import { Button, QR } from '..';

import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { HiCursorClick } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useLocalStorage } from '../../hooks';

const LinkItem = ({ data }) => {
    const [theme, setTheme] = useLocalStorage('data-theme', '');

    const [openEditBox, setOpenEditBox] = useState(false);
    const handleCopy = (url) => {
        navigator.clipboard.writeText(url);
        toast.success(`Copied to clipboard`);
    };

    const handleDoneEdit = async () => {
        setOpenEditBox(!openEditBox);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const EditBox = () => {
        return (
            <Styled.EditBox>
                <Styled.Item>
                    <BsLink45Deg />
                    Original link:
                    <Styled.Link wrap>{data.origin_link}</Styled.Link>
                </Styled.Item>
                <Styled.Item>
                    <IoCreateOutline />
                    Created at:{' '}
                    <Styled.HighLight>
                        {moment(data.createdAt).format('MMMM Do YYYY, HH:mm')}
                    </Styled.HighLight>
                </Styled.Item>
                <Styled.Item>
                    <MdUpdate />
                    Updated <Styled.HighLight>{moment(data.updatedAt).fromNow()}</Styled.HighLight>
                </Styled.Item>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ padding: '0 4px' }}></p>
                    <Button shine="true" onClick={handleDoneEdit}>
                        Close
                    </Button>
                </div>
            </Styled.EditBox>
        );
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Icon>
                    {data.origin_link.includes('localhost') ? (
                        <BsLink45Deg />
                    ) : (
                        <SocialIcon
                            url={data.origin_link}
                            bgColor="transparent"
                            style={{ width: '36px', height: '36px', scale: '1.5' }}
                        />
                    )}
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>{data.name || 'Shorten URL'}</Styled.Title>
                    <Styled.Subtitle href={data.shorten_link}>{data.shorten_link}</Styled.Subtitle>
                </Styled.Main>
                <div style={{ minWidth: '160px' }}>
                    <Tippy content="Copy">
                        <span>
                            <Styled.Button
                                as={MdOutlineContentCopy}
                                onClick={() => handleCopy(data.shorten_link)}
                            />
                        </span>
                    </Tippy>
                    <Tippy content="Info">
                        <span>
                            <Styled.Button
                                as={AiOutlineInfoCircle}
                                onClick={() => setOpenEditBox(!openEditBox)}
                            />
                        </span>
                    </Tippy>
                    <Tippy content="Generate QR Code">
                        <span>
                            <Styled.Button as={IoQrCodeOutline} ref={btnRef} onClick={onOpen} />
                        </span>
                    </Tippy>
                    <Tippy content={`${data.clicks} clicks`}>
                        <span>
                            <Styled.Button as={HiCursorClick} />
                        </span>
                    </Tippy>
                </div>
            </Styled.Wrapper>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Styled.QRDrawer>
                        <QR url={data.shorten_link} />
                    </Styled.QRDrawer>
                </DrawerContent>
            </Drawer>

            {openEditBox && <EditBox />}
        </>
    );
};

export default LinkItem;
