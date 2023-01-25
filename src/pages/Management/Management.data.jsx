import { Avatar, Button } from '../../components';
import { Link } from 'react-router-dom';
import { AiTwotoneCrown } from 'react-icons/ai';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import * as Styled from './Management.styled';
import { toast } from 'react-toastify';
import { updateUserRole, updateUserStatus } from '../../utils/adminAPI';
import config from '../../config';

const updateStatus = async (status, accountId) => {
    try {
        const { data } = await updateUserStatus(status, accountId);
        toast.success(data.message);
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

const updateRole = async (role, accountId) => {
    try {
        const { data } = await updateUserRole(role, accountId);
        toast.success(data.message);
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (_, record) => (
            <Link to={`${config.routes.adminManageUserURL}?id=${record.key}`}>
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
    {
        title: 'Update',
        key: 'update',
        render: (_, record) => (
            <Styled.Center>
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
                    <Styled.Name>Role</Styled.Name>
                </HeadlessTippy>
                <Styled.Separator />
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
                    <Styled.Name>Status</Styled.Name>
                </HeadlessTippy>
            </Styled.Center>
        ),
    },
];
