import React, { useState } from 'react';
import { FaUserTag } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io5';
import { MdEmail, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Button, Input } from '../../components';
import { createAccount } from '../../utils/adminAPI';

import * as Styled from './Admin.styled';

const CreateAccount = () => {
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
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <div>
                <label htmlFor="">
                    <MdEmail /> Email
                </label>
                <Input
                    large
                    background
                    value={account.email}
                    onChange={(e) => setAccount({ ...account, email: e.target.value })}
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
                    onChange={(e) => setAccount({ ...account, first_name: e.target.value })}
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
                    onChange={(e) => setAccount({ ...account, last_name: e.target.value })}
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
                    onChange={(e) => e.target.checked && setAccount({ ...account, role: '0' })}
                />{' '}
                <label htmlFor="0"> User</label>
                <input
                    type="radio"
                    name="role"
                    value="1"
                    style={{ marginLeft: '1.5rem' }}
                    onChange={(e) => e.target.checked && setAccount({ ...account, role: '1' })}
                />{' '}
                <label htmlFor="0"> Admin</label>
            </div>
            <Styled.Center>
                <Button onClick={handleCreateAccount} leftIcon={<IoPersonAddSharp />}>
                    Add account
                </Button>
            </Styled.Center>
        </>
    );
};

CreateAccount.propTypes = {};

export default CreateAccount;
