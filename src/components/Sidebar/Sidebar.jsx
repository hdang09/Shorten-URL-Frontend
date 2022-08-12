import { AiFillHome, AiOutlineQrcode } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import { BsFillGearFill } from 'react-icons/bs';
import * as Styled from './Sidebar.styled';

const SIDEBAR_LIST = [
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
        to: '/statistics',
        title: 'Statistics',
    },
    {
        id: 4,
        icon: <BsFillGearFill />,
        to: '/settings',
        title: 'Settings',
    },
];

function Sidebar() {
    return (
        <Styled.Wrapper>
            {SIDEBAR_LIST.map((item) => (
                <Styled.SidebarItem key={item.id} to={item.to}>
                    <Styled.Icon>{item.icon}</Styled.Icon>
                    {item.title}
                </Styled.SidebarItem>
            ))}
        </Styled.Wrapper>
    );
}

export default Sidebar;
