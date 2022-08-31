import { AiFillHome } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import { BsFillGearFill } from 'react-icons/bs';
import * as Styled from './Sidebar.styled';

const USER_SIDEBAR_LIST = [
    {
        id: 1,
        icon: <AiFillHome />,
        to: '/',
        title: 'Home',
    },
    {
        id: 2,
        icon: <BiLink />,
        to: '/url',
        title: 'My URLs',
    },
    {
        id: 3,
        icon: <ImStatsDots />,
        to: '/analytics',
        title: 'Analytics',
    },
    {
        id: 4,
        icon: <BsFillGearFill />,
        to: '/settings',
        title: 'Settings',
    },
];

const ADMIN_SIDEBAR_LIST = [
    {
        id: 5,
        icon: <AiFillHome />,
        to: '/admin',
        title: 'Dashboard',
    },
    {
        id: 6,
        icon: <BiLink />,
        to: '/admin/management',
        title: 'Management',
    },
    {
        id: 7,
        icon: <ImStatsDots />,
        to: '/admin/shorten-url',
        title: 'Shorten URL',
    },
    {
        id: 8,
        icon: <BsFillGearFill />,
        to: '/admin/settings',
        title: 'Settings',
    },
];

function Sidebar({ admin }) {
    const sidebarList = admin ? ADMIN_SIDEBAR_LIST : USER_SIDEBAR_LIST;
    return (
        <Styled.Wrapper>
            {sidebarList.map((item) => (
                <Styled.SidebarItem key={item.id} to={item.to}>
                    <Styled.Icon>{item.icon}</Styled.Icon>
                    {item.title}
                </Styled.SidebarItem>
            ))}
        </Styled.Wrapper>
    );
}

export default Sidebar;
