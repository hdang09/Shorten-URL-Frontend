import { useState, useRef } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';
import { IoQrCodeOutline } from 'react-icons/io5';
import { BsLink45Deg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { SocialIcon } from 'react-social-icons';

import * as Styled from './URLItem.styled';
import { QR } from '..';
import { HiCursorClick } from 'react-icons/hi';

import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import InfoURL from './InfoURL';
import { useDispatch } from 'react-redux';
import { add } from './urlSlice';

const URLItem = ({ data }) => {
    const [openEditBox, setOpenEditBox] = useState(false);

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url);
        toast.success(`Copied to clipboard`);
    };

    // Chakra UI
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const dispatch = useDispatch();

    const generateQR =
        window.location.pathname === '/' || window.location.pathname === '/admin/shorten-url'
            ? () =>
                  dispatch(
                      add({
                          original: data.origin_link,
                          shorten: data.shorten_link,
                      }),
                  )
            : onOpen;

    const BUTTON_LIST = [
        {
            content: 'Copy',
            icon: MdOutlineContentCopy,
            handleClick: () => handleCopy(data.shorten_link),
        },
        {
            content: 'Info',
            icon: AiOutlineInfoCircle,
            handleClick: () => setOpenEditBox(!openEditBox),
        },
        {
            content: 'Generate QR Code',
            icon: IoQrCodeOutline,
            handleClick: generateQR,
            ref: btnRef,
        },
        {
            content: `${data.clicks} clicks`,
            icon: HiCursorClick,
        },
    ];

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
                    {BUTTON_LIST.map((button) => (
                        <Tippy content={button.content} key={button.content}>
                            <span>
                                <Styled.Button
                                    as={button.icon}
                                    onClick={button.handleClick}
                                    ref={button.ref}
                                />
                            </span>
                        </Tippy>
                    ))}
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

            {openEditBox && (
                <InfoURL data={data} handleClose={() => setOpenEditBox(!openEditBox)} />
            )}
        </>
    );
};

export default URLItem;
