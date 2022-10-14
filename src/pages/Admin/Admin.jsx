import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import * as Styled from './Admin.styled';
import { Button, Card, Input, Avatar } from '../../components';
import { Link } from 'react-router-dom';
import { createAccount, getAllUser } from '../../utils/productApi';
import { toast } from 'react-toastify';
import {
    AiTwotoneCrown,
    AiOutlineRight,
    AiOutlineClockCircle,
    AiOutlineMail,
} from 'react-icons/ai';
import Tippy from '@tippyjs/react';

import { RiLinksLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { IoMdDownload } from 'react-icons/io';
import { MdUpload, MdEmail, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { IoPersonAddSharp } from 'react-icons/io5';
import { FaUserTag } from 'react-icons/fa';

const Admin = (props) => {
    const [allUserData, setAllUserData] = useState([]);
    const [account, setAccount] = useState({
        email: '',
        first_name: '',
        last_name: '',
        role: '',
    });

    const handleCreateAccount = async () => {
        try {
            await createAccount(account);
            setAccount({
                email: '',
                first_name: '',
                last_name: '',
                role: '',
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (_, record) => (
                <Link to={`/admin/management/user-url?id=${record.key}`}>
                    <Avatar src={record.avatar} />
                    <Styled.Name>
                        <span>
                            {record.first_name} {record.last_name}
                        </span>
                        {record.role === 'Admin' && (
                            <Tippy content="Admin">
                                <div>
                                    <AiTwotoneCrown color="orange" size="1.6rem" />
                                </div>
                            </Tippy>
                        )}
                    </Styled.Name>
                </Link>
            ),
        },
        // {
        //     title: 'Email',
        //     dataIndex: 'email',
        //     sorter: {
        //         compare: (a, b) => a.email - b.email,
        //         multiple: 2,
        //     },
        // },
        {
            title: 'Role',
            dataIndex: 'role',
            sorter: {
                compare: (a, b) => a.role - b.role,
                multiple: 1,
            },
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, record) => <Styled.Tag type={record.status}>{record.status}</Styled.Tag>,
            sorter: {
                compare: (a, b) => a.status - b.status,
                multiple: 1,
            },
        },
    ];

    useEffect(() => {
        const getAllUserData = async () => {
            const { data } = await getAllUser();
            const newList = data.data.map((item) => ({
                ...item,
                key: item._id,
                status: item.status[0].toUpperCase() + item.status.slice(1),
                role: item.role === '0' ? 'User' : 'Admin',
            }));
            setAllUserData(newList);
        };
        getAllUserData();
    }, []);

    const showComingSoon = () => {
        toast.warn('This feature will be upgraded soon!');
    };

    return (
        <Container>
            <Row>
                <Col col={12} lg={8}>
                    <Row>
                        <Col col={12} md={4}>
                            <Card>
                                <Styled.CardWrapper>
                                    <Styled.LinksIcon>
                                        <RiLinksLine />
                                    </Styled.LinksIcon>
                                    <Styled.InfoStat>
                                        <h2>{allUserData.length}</h2>
                                        <span>Total Users</span>
                                    </Styled.InfoStat>
                                </Styled.CardWrapper>
                            </Card>
                        </Col>

                        <Col col={12} md={4}>
                            <Card>
                                <Styled.CardWrapper>
                                    <Styled.AvgCTRIcon>
                                        <ImStatsDots />
                                    </Styled.AvgCTRIcon>
                                    <Styled.InfoStat>
                                        <h2>
                                            {
                                                allUserData.filter(
                                                    (item) => item.status === 'Reject',
                                                ).length
                                            }
                                        </h2>
                                        <span>Rejected Users</span>
                                    </Styled.InfoStat>
                                </Styled.CardWrapper>
                            </Card>
                        </Col>
                        <Col col={12} md={4}>
                            <Card>
                                <Styled.CardWrapper>
                                    <Styled.AvgTimesIcon>
                                        <AiOutlineClockCircle />
                                    </Styled.AvgTimesIcon>
                                    <Styled.InfoStat>
                                        <h2>
                                            {
                                                allUserData.filter(
                                                    (item) => item.status === 'Waiting',
                                                ).length
                                            }
                                        </h2>
                                        <span>Pending Users</span>
                                    </Styled.InfoStat>
                                </Styled.CardWrapper>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={12}>
                            <Card
                                title="Recent Users"
                                subtitle={
                                    <Link to="/admin/management">
                                        View All <AiOutlineRight />
                                    </Link>
                                }
                            >
                                <Styled.TableWrapper>
                                    <Table
                                        columns={columns}
                                        dataSource={allUserData.reverse().slice(0, 5)}
                                    />
                                </Styled.TableWrapper>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col col={12} lg={4}>
                    <Row>
                        <Col col={12}>
                            <Card title="Add with template">
                                <Styled.Center>
                                    <Button
                                        outline
                                        onClick={showComingSoon}
                                        leftIcon={<IoMdDownload />}
                                    >
                                        Download template
                                    </Button>
                                </Styled.Center>
                                <Styled.Center>
                                    <Button
                                        disabled
                                        onClick={showComingSoon}
                                        leftIcon={<MdUpload />}
                                    >
                                        Upload file to add
                                    </Button>
                                </Styled.Center>
                            </Card>
                            <Card title="Create Account">
                                <div>
                                    <label htmlFor="">
                                        <MdEmail /> Email
                                    </label>
                                    <Input
                                        large
                                        background
                                        value={account.email}
                                        onChange={(e) =>
                                            setAccount({ ...account, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">
                                        <MdOutlineDriveFileRenameOutline /> First Name
                                    </label>
                                    <Input
                                        large
                                        background
                                        value={account.first_name}
                                        onChange={(e) =>
                                            setAccount({ ...account, first_name: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">
                                        <MdOutlineDriveFileRenameOutline /> Last Name
                                    </label>
                                    <Input
                                        large
                                        background
                                        value={account.last_name}
                                        onChange={(e) =>
                                            setAccount({ ...account, last_name: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <p htmlFor="role">
                                        <FaUserTag /> Role
                                    </p>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="0"
                                        onChange={(e) =>
                                            e.target.checked &&
                                            setAccount({ ...account, role: '0' })
                                        }
                                    />
                                    <label htmlFor="0"> User</label>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="1"
                                        style={{ marginLeft: '1.5rem' }}
                                        onChange={(e) =>
                                            e.target.checked &&
                                            setAccount({ ...account, role: '1' })
                                        }
                                    />
                                    <label htmlFor="0"> Admin</label>
                                </div>
                                <Styled.Center>
                                    <Button
                                        onClick={handleCreateAccount}
                                        leftIcon={<IoPersonAddSharp />}
                                    >
                                        Add account
                                    </Button>
                                </Styled.Center>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

Admin.propTypes = {};

export default Admin;
