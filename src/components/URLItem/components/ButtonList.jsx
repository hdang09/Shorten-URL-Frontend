import { useRef } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { HiCursorClick } from 'react-icons/hi';
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdOutlineContentCopy } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import { add } from '../../../app/reducers/urlReducer';
import config from '../../../config';
import handleCopy from '../../../utils/handleCopy';
import * as Styled from '../URLItem.styled';

const ButtonList = ({ showDrawer, data, toggleEditBox }) => {
    const dispatch = useDispatch();

    const btnRef = useRef();

    const dispatchAddUrl = () =>
        dispatch(
            add({
                original: data.origin_link,
                shorten: data.shorten_link,
            }),
        );
    const generateQR =
        window.location.pathname === config.routes.home ||
        window.location.pathname === config.routes.adminShortenURL
            ? dispatchAddUrl
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
            handleClick: toggleEditBox,
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
    );
};

ButtonList.propTypes = {
    showDrawer: PropTypes.func,
    data: PropTypes.object,
    toggleEditBox: PropTypes.func,
};

export default ButtonList;
