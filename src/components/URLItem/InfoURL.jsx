import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { HiLink } from 'react-icons/hi';
import { IoCreateOutline } from 'react-icons/io5';
import { MdUpdate } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Col, Row } from 'styled-bootstrap-grid';

import { add } from '../../app/reducers/urlReducer';
import config from '../../config';
import removeHttps from '../../utils/removeHttps';
import { updateLink } from '../../utils/urlAPI';
import { Button } from '..';

import * as Styled from './URLItem.styled';

const InfoURL = ({ data, handleClose }) => {
    const [path, setPath] = useState('');

    const dispatch = useDispatch();
    const handleDoneEdit = async () => {
        try {
            await updateLink(data.shorten_link, path);
            toast.success('Update URL successfully!');
            dispatch(
                add({
                    original: data.origin_link,
                    shorten: `${removeHttps(config.publicRuntime.API_URL)}/${path}`,
                }),
            );
        } catch (e) {
            console.error(e);
        }
        handleClose();
    };

    return (
        <Styled.EditBox>
            <Styled.Item>
                <Row>
                    <Col xs={12} lg={8}>
                        {/* <Styled.Label> */}
                        <HiLink />
                        <label htmlFor="">Customize your link</label>
                        {/* </Styled.Label> */}

                        <Styled.WrapperInput>
                            <input
                                type="text"
                                value={`${removeHttps(config.publicRuntime.API_URL)}/`}
                                readOnly
                            />
                            <Styled.CustomInput
                                type="text"
                                value={path}
                                onChange={(e) => setPath(e.target.value)}
                                onKeyDown={(e) => e.keyCode === 13 && handleDoneEdit()}
                                placeholder={data.shorten_link.split('/')[3]}
                            />
                        </Styled.WrapperInput>
                    </Col>
                </Row>
            </Styled.Item>
            <Styled.Item>
                <BsLink45Deg />
                Original link:
                <Styled.Link as="a" target="_blank" wrap href={data.origin_link}>
                    {data.origin_link}
                </Styled.Link>
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
                    {path ? 'Update URL' : 'Close'}
                </Button>
            </div>
        </Styled.EditBox>
    );
};

InfoURL.propTypes = {
    data: PropTypes.object,
    handleClose: PropTypes.func,
};

export default InfoURL;
