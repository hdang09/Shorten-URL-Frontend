import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './LinkItem.styled';
import { MdOutlineContentCopy } from 'react-icons/md';
import { IoQrCodeOutline } from 'react-icons/io5';
import { BsPencilSquare, BsLink45Deg } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { Input, Button, QRModal } from '..';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { add, deleteItem, edit } from './urlSlice';
import { useDispatch } from 'react-redux';

const LinkItem = ({ data }) => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState('');
    const [urlInput, setURLInput] = useState('');
    const [openEditBox, setOpenEditBox] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);

    const handleDoneEdit = () => {
        setOpenEditBox(false);
        console.log(nameInput);
        console.log(nameInput && data.name);
        console.log(urlInput);
        dispatch(
            edit({
                name: nameInput || data.name,
                shorten_url: urlInput || data.shorten_url,
                original_url: data.original_url,
            }),
        );
    };

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url);
        toast.success(`Copied to clipboard`);
    };

    const handleDelete = () => {
        dispatch(deleteItem(data.original_url));
        toast.success(`Deleted successfully`);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Icon>
                    <BsLink45Deg />
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>{data.name}</Styled.Title>
                    <Styled.Subtitle href={data.shorten_url}>{data.shorten_url}</Styled.Subtitle>
                </Styled.Main>
                <div>
                    <Tippy content="Copy">
                        <span>
                            <Styled.Button
                                as={MdOutlineContentCopy}
                                onClick={() => handleCopy(data.shorten_url)}
                            />
                        </span>
                    </Tippy>
                    <Tippy content="Generate QR Code">
                        <span>
                            <Styled.Button
                                as={IoQrCodeOutline}
                                onClick={() => setShowQRModal(!showQRModal)}
                            />
                        </span>
                    </Tippy>
                    <Tippy content="Edit">
                        <span>
                            <Styled.Button
                                as={BsPencilSquare}
                                onClick={() => setOpenEditBox(!openEditBox)}
                            />
                        </span>
                    </Tippy>
                    <Tippy content="Delete">
                        <span>
                            <Styled.Button as={ImBin} onClick={() => handleDelete()} />
                        </span>
                    </Tippy>
                </div>
            </Styled.Wrapper>
            {openEditBox && (
                <Styled.EditBox>
                    Name:{' '}
                    <Input
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        outline
                        placeholder={data.name}
                    />
                    Shorten URL:{' '}
                    <Input
                        value={urlInput}
                        onChange={(e) => setURLInput(e.target.value)}
                        outline
                        placeholder={data.shorten_url}
                    />
                    <p>Original link: {data.original_url}</p>
                    <Button onClick={handleDoneEdit}>Done</Button>
                </Styled.EditBox>
            )}
            {showQRModal && <QRModal setCloseQRModal={() => setShowQRModal(false)} />}
        </>
    );
};

LinkItem.propTypes = {};

export default LinkItem;
