import { useState } from 'react';

import { Button } from '..';
import { HiLink } from 'react-icons/hi';
import config from '../../config';
import moment from 'moment';

import { MdUpdate } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';
import * as Styled from './URLItem.styled';
import { updateLink } from '../../utils/urlAPI';
import { BsLink45Deg } from 'react-icons/bs';

import { Col, Row } from 'styled-bootstrap-grid';

const InfoURL = ({ data, handleClose }) => {
    const [path, setPath] = useState('');

    const handleDoneEdit = async () => {
        try {
            await updateLink(data.shorten_link, path);
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
                        <Styled.Label>
                            <HiLink />
                            <label htmlFor="">Customize your link</label>
                        </Styled.Label>

                        <Styled.WrapperInput>
                            <input
                                type="text"
                                value={`${config.publicRuntime.API_URL}/`}
                                readOnly
                            />
                            <Styled.CustomInput
                                type="text"
                                value={path}
                                onChange={(e) => setPath(e.target.value)}
                                onKeyDown={(e) => e.keyCode === 13 && handleDoneEdit()}
                            />
                        </Styled.WrapperInput>
                    </Col>
                </Row>
            </Styled.Item>
            <Styled.Item>
                <BsLink45Deg />
                Original link:
                <Styled.Link wrap href={data.origin_link}>
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

export default InfoURL;
