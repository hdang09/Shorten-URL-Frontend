import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import * as Styled from './Admin.styled';
import { Button, Card, Avatar } from '../../components';
import { Link } from 'react-router-dom';
import { getAllUser } from '../../utils/productApi';
import { toast } from 'react-toastify';
import { AiTwotoneCrown, AiOutlineRight, AiOutlineClockCircle } from 'react-icons/ai';
import Tippy from '@tippyjs/react';

import { IoMdDownload } from 'react-icons/io';
import { MdUpload } from 'react-icons/md';
import { FiUserX, FiUsers } from 'react-icons/fi';
import CreateAccount from './CreateAccount';

const Admin = () => {
    const [allUserData, setAllUserData] = useState([]);

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
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, record) => <Styled.Tag type={record.status}>{record.status}</Styled.Tag>,
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
                                        <FiUsers />
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
                                        <FiUserX />
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
                                        <span>Waiting Users</span>
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
                                <Styled.CenterOnTablet>
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
                                </Styled.CenterOnTablet>
                            </Card>
                            <Card title="Create Account">
                                <CreateAccount />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;
