import React, { useState } from 'react';
import { FaUserTag } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io5';
import { MdEmail, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Button, Input } from '../../components';
import { createAccount } from '../../utils/adminAPI';

import * as Styled from './Admin.styled';

const CreateAccount = () => {
    const [account, setAccount] = useState({
        email: '',
        first_name: '',
        last_name: '',
        role: '0',
    });

    const handleCreateAccount = async () => {
        toast.promise(createAccount(account), {
            pending: 'Creating an account...',
            success: {
                render({ data }) {
                    setAccount({
                        email: '',
                        first_name: '',
                        last_name: '',
                        role: '',
                    });

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
                    id="role"
                    name="role"
                    value="0"
                    onChange={(e) => e.target.checked && setAccount({ ...account, role: '0' })}
                    checked
                />{' '}
                <label htmlFor="role"> User</label>
                <input
                    type="radio"
                    id="role"
                    name="role"
                    value="1"
                    onChange={(e) => e.target.checked && setAccount({ ...account, role: '1' })}
                    style={{ marginLeft: '1.5rem' }}
                />{' '}
                <label htmlFor="role"> Admin</label>
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
