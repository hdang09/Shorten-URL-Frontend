import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { getAllUser } from '../../utils/adminAPI';
import 'tippy.js/dist/tippy.css';
import * as Styled from './Management.styled';
import { columns } from './Management.data';

const Management = () => {
    const [allUsers, setAllUsers] = useState([]);

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

export default Management;
