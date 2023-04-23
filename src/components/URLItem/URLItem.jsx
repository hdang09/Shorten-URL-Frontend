import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { SocialIcon } from 'react-social-icons';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

import removeHttps from '../../utils/removeHttps';
import { QR } from '..';

import ButtonList from './components/ButtonList';
import InfoURL from './components/InfoURL';
import * as Styled from './URLItem.styled';

import 'tippy.js/dist/tippy.css';

const URLItem = ({ data, scollToQr }) => {
    const [openEditBox, setOpenEditBox] = useState(false);
    const toggleEditBox = () => setOpenEditBox(!openEditBox);

    // Drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    const onClose = () => {
        setOpenDrawer(false);
    };
    const showDrawer = () => {
        setOpenDrawer(true);
    };

    // Theme styled-components
    const theme = useTheme();

    return (
        <>
            <Styled.Wrapper>
                <Styled.Icon>
                    {data.origin_link.includes('localhost') ? (
                        <BsLink45Deg />
                    ) : (
                        <SocialIcon
                            url={data.origin_link}
                            style={{ width: '36px', height: '36px', scale: '1.5' }}
                        />
                    )}
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>{data.name || 'Shorten URL'}</Styled.Title>
                    <Styled.Subtitle target="_blank" href={data.shorten_link}>
                        {removeHttps(data.shorten_link)}
                    </Styled.Subtitle>
                </Styled.Main>
                <ButtonList
                    showDrawer={showDrawer}
                    data={data}
                    toggleEditBox={toggleEditBox}
                    scollToQr={scollToQr}
                />
            </Styled.Wrapper>

            <Drawer
                title={<Styled.DrawerTitle>Generate QR Code</Styled.DrawerTitle>}
                placement="right"
                colo
                onClose={onClose}
                open={openDrawer}
                bodyStyle={{ background: theme.cardBackground }}
                headerStyle={{ background: theme.cardBackground }}
                closeIcon={<AiOutlineClose color={theme.black} />}
            >
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
