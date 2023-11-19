import { AiTwotoneCrown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import { Avatar } from '../../components';
import config from '../../config';

import * as Styled from './Admin.styled';

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
