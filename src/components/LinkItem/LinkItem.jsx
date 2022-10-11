import { useState, useRef } from 'react';
import * as Styled from './LinkItem.styled';
import { MdOutlineContentCopy } from 'react-icons/md';
import { IoQrCodeOutline } from 'react-icons/io5';
import { BsLink45Deg, BsPencilSquare } from 'react-icons/bs';
import { Button, QR, Input } from '..';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import moment from 'moment';

import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    Input as ChakraInput,
    Box,
} from '@chakra-ui/react';
import { shortenUrl } from '../../utils/productApi';
import { useLocalStorage } from '../../hooks';

const LinkItem = ({ data, key }) => {
    const [urlInput, setURLInput] = useState('');
    const [openEditBox, setOpenEditBox] = useState(false);
    const [id, setId] = useLocalStorage('id', '');
    const handleCopy = (url) => {
        navigator.clipboard.writeText(url);
        toast.success(`Copied to clipboard`);
    };

    const handleDoneEdit = async () => {
        try {
            await shortenUrl(data.origin_link, id, urlInput);
            toast.success('Changed successfully');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const EditBox = () => {
        return (
            <Styled.EditBox>
                <Box>
                    <FormLabel htmlFor="url">Url</FormLabel>
                    <div style={{ height: '50px' }}>
                        <InputGroup size="lg">
                            <InputLeftAddon>`${import.meta.env.VITE_API_URL}/`</InputLeftAddon>
                            <ChakraInput
                                type="url"
                                id="url"
                                placeholder="Please enter domain"
                                value={urlInput}
                                onChange={(e) => setURLInput(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </Box>
                {/* <Input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    large
                    background
                    placeholder={data.name}
                /> */}
                {/* <label>Shorten URL: </label>
            <Input
                value={urlInput}
                onChange={(e) => setURLInput(e.target.value)}
                large
                background
                placeholder={data.shorten_link}
            /> */}
                <p>
                    Original link: <Styled.HighLight>{data.origin_link}</Styled.HighLight>
                </p>
                <p>
                    Created at:{' '}
                    <Styled.HighLight>
                        {moment(data.createdAt).format('MMMM Do YYYY, hh:mm')}
                    </Styled.HighLight>
                </p>
                <p>
                    Updated at:{' '}
                    <Styled.HighLight>
                        {moment(data.createdAt).startOf('day').fromNow()}
                    </Styled.HighLight>
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ padding: '0 4px' }}></p>
                    <Button shine="true" onClick={handleDoneEdit}>
                        Save
                    </Button>
                </div>
            </Styled.EditBox>
        );
    };

    return (
        <>
            <Styled.Wrapper key={key}>
                <Styled.Icon>
                    <BsLink45Deg />
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>{data.name || 'Shorten URL'}</Styled.Title>
                    <Styled.Subtitle href={data.shorten_link}>{data.shorten_link}</Styled.Subtitle>
                </Styled.Main>
                <div>
                    <Tippy content="Copy">
                        <span>
                            <Styled.Button
                                as={MdOutlineContentCopy}
                                onClick={() => handleCopy(data.shorten_link)}
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
                    <Tippy content="Generate QR Code">
                        <span>
                            <Styled.Button as={IoQrCodeOutline} ref={btnRef} onClick={onOpen} />
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
                        <QR />
                    </Styled.QRDrawer>
                </DrawerContent>
            </Drawer>

            {openEditBox && <EditBox />}
        </>
    );
};

LinkItem.propTypes = {};

export default LinkItem;
