import { AiTwotoneCrown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import { Avatar, Button } from '../../components';
import config from '../../config';
import { updateUserRole, updateUserStatus } from '../../utils/adminAPI';

import * as Styled from './Management.styled';

const updateStatus = async (status, accountId) => {
    toast.promise(updateUserStatus(status, accountId), {
        pending: 'Updating status...',
        success: {
            render({ data }) {
                return data.data.message;
            },
        },
        error: {
            render({ data }) {
                return data.response.data.message;
            },
        },
    });
};

const updateRole = async (role, accountId) => {
    toast.promise(updateUserRole(role, accountId), {
        pending: 'Updating role...',
        success: {
            render({ data }) {
                return data.data.message;
            },
        },
        error: {
            render({ data }) {
                return data.response.data.message;
            },
        },
    });
};

export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (_, record) => (
            <Link to={`${config.routes.adminManageUserURL}?id=${record.key}`}>
                <Avatar src={record.avatar} size="4rem" />
                <Styled.Name>
                    <span>
                        {record.firstName} {record.lastName}
                    </span>
                    {record.role === 'Admin' && (
                        <Tippy content="Admin">
                            <Styled.Crown>
                                <AiTwotoneCrown color="orange" size="1.6rem" />
                            </Styled.Crown>
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
                                <Button outline onClick={() => updateRole('0', record.id)}>
                                    User
                                </Button>

                                <Button outline onClick={() => updateRole('1', record.id)}>
                                    Admin
                                </Button>
                            </Styled.TippyBox>
                        </div>
                    )}
                >
                    <Styled.Action>Role</Styled.Action>
                </HeadlessTippy>
                <Styled.Separator />
                <HeadlessTippy
                    interactive
                    render={(attrs) => (
                        <Styled.TippyBox tabIndex="-1" {...attrs}>
                            <Button outline onClick={() => updateStatus('waiting', record.id)}>
                                Waiting
                            </Button>
                            <Button outline onClick={() => updateStatus('reject', record.id)}>
                                Reject
                            </Button>
                            <Button outline onClick={() => updateStatus('accept', record.id)}>
                                Accept
                            </Button>
                        </Styled.TippyBox>
                    )}
                >
                    <Styled.Action>Status</Styled.Action>
                </HeadlessTippy>
            </Styled.Center>
        ),
    },
];
