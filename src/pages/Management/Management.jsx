import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

import { getAllUser } from '../../utils/adminAPI';

import { columns } from './Management.data';
import * as Styled from './Management.styled';

import 'tippy.js/dist/tippy.css';

const Management = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        document.title = 'Management | F-Code Shorten URL';
    }, []);

    useEffect(() => {
        const getAllUserData = async () => {
            const { data } = await getAllUser();
            const newList = data.data.map((item) => ({
                ...item,
                key: item._id,
                status: item.status[0].toUpperCase() + item.status.slice(1),
                role: item.role == 0 ? 'User' : 'Admin',
            }));
            setAllUsers(newList);
        };
        getAllUserData();
    }, [allUsers]);

    return (
        <Styled.Wrapper>
            <Table columns={columns} dataSource={allUsers} />
        </Styled.Wrapper>
    );
};

Management.propTypes = {};

export default Management;
