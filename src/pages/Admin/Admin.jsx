import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Calendar } from 'antd';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import * as Styled from './Admin.styled';
import { Button, Card, Input, Report, Avatar } from '../../components';
import { Link } from 'react-router-dom';
import { createAccount, getAllUser } from '../../utils/productApi';
import { toast } from 'react-toastify';
import { AiTwotoneCrown } from 'react-icons/ai';
import Tippy from '@tippyjs/react';

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
            const res = await createAccount(account);
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
                        <span>{record.first_name} </span>
                        <span style={{ marginRight: '4px' }}>{record.last_name}</span>
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

    return (
        <Container>
            <Row>
                <Col col={8}>
                    <Row>
                        <Col col={3}>
                            <Card>
                                <Styled.Links>0</Styled.Links>
                                <Styled.Label>Total Links</Styled.Label>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card>
                                <Styled.Clicks>0</Styled.Clicks>
                                <Styled.Label>Total Clicks</Styled.Label>
                            </Card>
                        </Col>

                        <Col col={3}>
                            <Card>
                                <Styled.CTR>{allUserData.length}</Styled.CTR>
                                <Styled.Label>Total Users</Styled.Label>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card>
                                <Styled.Times>
                                    {allUserData.filter((item) => item.status === 'Waiting').length}
                                </Styled.Times>
                                <Styled.Label>Pending Users</Styled.Label>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={12}>
                            <Card
                                title="Recent Users"
                                subtitle={<Link to="/admin/management">View All {'>'}</Link>}
                            >
                                <Table columns={columns} dataSource={allUserData} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col col={4}>
                    <Col col={12}>
                        <Card title="Add with template">
                            <Styled.Center>
                                <Button outline>Download template</Button>
                            </Styled.Center>
                            <Styled.Center>
                                <Button disabled>Upload file to add</Button>
                            </Styled.Center>
                        </Card>
                        <Card title="Create Account">
                            <div>
                                <label htmlFor="">Email</label>
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
                                <label htmlFor="">First Name</label>
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
                                <label htmlFor="">Last Name</label>
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
                                <p htmlFor="role">Role</p>
                                <input
                                    type="radio"
                                    name="role"
                                    value="0"
                                    onChange={(e) =>
                                        e.target.checked && setAccount({ ...account, role: '0' })
                                    }
                                />
                                <label htmlFor="0"> User</label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="1"
                                    style={{ marginLeft: '1.5rem' }}
                                    onChange={(e) =>
                                        e.target.checked && setAccount({ ...account, role: '1' })
                                    }
                                />
                                <label htmlFor="0"> Admin</label>
                            </div>
                            <Styled.Center>
                                <Button onClick={handleCreateAccount}>Add account</Button>
                            </Styled.Center>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

Admin.propTypes = {};

export default Admin;
