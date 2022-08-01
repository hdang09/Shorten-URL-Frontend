import { NavLink } from 'react-router-dom';

import { Button } from '..';
import { Wrapper } from './Sidebar.styled';

const SIDEBAR_LIST = [
    {
        id: 1,
        to: '/',
        title: 'Home',
    },
    {
        id: 2,
        to: '/qrcode',
        title: 'QR Code',
    },
    {
        id: 3,
        to: '/url',
        title: 'My URLs',
    },
    {
        id: 4,
        to: '/settings',
        title: 'Settings',
    },
    {
        id: 5,
        to: '/help',
        title: 'Help',
    },
];

function Sidebar() {
    return (
        <Wrapper>
            {SIDEBAR_LIST.map((item) => (
                <Button as={NavLink} key={item.id} to={item.to} menu>
                    {item.title}
                </Button>
            ))}
        </Wrapper>
    );
}

export default Sidebar;
