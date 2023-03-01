import { useRef, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdOutlineContentCopy } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';

import { add } from '../../app/reducers/urlReducer';
import { QR } from '..';

import InfoURL from './InfoURL';
import * as Styled from './URLItem.styled';

import 'tippy.js/dist/tippy.css';

const URLItem = ({ data }) => {
    const [openEditBox, setOpenEditBox] = useState(false);

    const dispatch = useDispatch();

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url);
        toast.success(`Copied to clipboard`);
    };

    // Drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    const showDrawer = () => {
        setOpenDrawer(true);
    };
    const onClose = () => {
        setOpenDrawer(false);
    };

    const btnRef = useRef();

    const generateQR =
        window.location.pathname === '/' || window.location.pathname === '/admin/shorten-url'
            ? () =>
                  dispatch(
                      add({
                          original: data.origin_link,
                          shorten: data.shorten_link,
                      }),
                  )
            : showDrawer;

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
                    <Styled.Subtitle target="_blank" href={data.shorten_link}>
                        {data.shorten_link.split('https://')[1] ||
                            data.shorten_link.split('http://')[1]}
                    </Styled.Subtitle>
                </Styled.Main>
                <div style={{ minWidth: '160px' }}>
                    {BUTTON_LIST.map((button) => (
                        <Tippy content={button.content} key={button.content}>
                            <span>
                                <Styled.Button
                                    as={button.icon}
                                    onClick={button.handleClick}
                                    innerref={button.ref}
                                />
                            </span>
                        </Tippy>
                    ))}
                </div>
            </Styled.Wrapper>

            <Drawer title="Generate QR Code" placement="right" onClose={onClose} open={openDrawer}>
                <Styled.QRDrawer>
                    <QR url={data.shorten_link} />
                </Styled.QRDrawer>
            </Drawer>

            {openEditBox && (
                <InfoURL data={data} handleClose={() => setOpenEditBox(!openEditBox)} />
            )}
        </>
    );
};

URLItem.propTypes = {
    data: PropTypes.object,
};

export default URLItem;
