import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Container } from 'styled-bootstrap-grid';
import { getAllUser, updateUserRole, updateUserStatus } from '../../utils/productApi';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import * as Styled from './Management.styled';
import { toast } from 'react-toastify';
import { Avatar, Button } from '../../components';
import { Link } from 'react-router-dom';
import { AiTwotoneCrown } from 'react-icons/ai';
import Tippy from '@tippyjs/react';

const Management = (props) => {
    const [render, setRender] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    const handleErrorAvatar = (ev) => {
        ev.onerror = null;
        // ev.src = defaultAvatar;
    };

    const updateStatus = async (status, accountId) => {
        try {
            const res = await updateUserStatus(status, accountId);
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.message);
        }
        window.location.reload(true);
    };

    const updateRole = async (role, accountId) => {
        try {
            const res = await updateUserRole(role, accountId);
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.message);
        }
        window.location.reload(true);
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
                        <span style={{ margin: '0 4px' }}>{record.last_name}</span>
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
            title: 'Email',
            dataIndex: 'email',
            sorter: {
                compare: (a, b) => a.email - b.email,
                multiple: 2,
            },
        },
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
        {
            title: 'Update',
            key: 'update',
            render: (_, record) => (
                <>
                    <HeadlessTippy
                        interactive
                        render={(attrs) => (
                            <div>
                                <Styled.TippyBox tabIndex="-1" {...attrs}>
                                    <Button outline onClick={() => updateRole('0', record._id)}>
                                        User
                                    </Button>
                                    <Button outline onClick={() => updateRole('1', record._id)}>
                                        Admin
                                    </Button>
                                </Styled.TippyBox>
                            </div>
                        )}
                    >
                        <a href="">Role </a>
                    </HeadlessTippy>
                    <HeadlessTippy
                        interactive
                        render={(attrs) => (
                            <Styled.TippyBox tabIndex="-1" {...attrs}>
                                <Button outline onClick={() => updateStatus('waiting', record._id)}>
                                    Waiting
                                </Button>
                                <Button outline onClick={() => updateStatus('reject', record._id)}>
                                    Reject
                                </Button>
                                <Button outline onClick={() => updateStatus('accept', record._id)}>
                                    Accept
                                </Button>
                            </Styled.TippyBox>
                        )}
                    >
                        <a href="">Status</a>
                    </HeadlessTippy>
                </>
            ),
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
            setAllUsers(newList);
        };
        getAllUserData();
    }, []);

    return (
        <Styled.Wrapper>
            <Table columns={columns} dataSource={allUsers} />
        </Styled.Wrapper>
    );
};

Management.propTypes = {};

export default Management;
