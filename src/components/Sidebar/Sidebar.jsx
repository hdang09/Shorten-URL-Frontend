import * as Styled from './Sidebar.styled';

const SIDEBAR_LIST = [
    {
        id: 1,
        icon: null,
        to: '/',
        title: 'Home',
    },
    {
        id: 2,
        icon: null,
        to: '/qrcode',
        title: 'QR Code',
    },
    {
        id: 3,
        icon: null,
        to: '/url',
        title: 'My URLs',
    },
    {
        id: 4,
        icon: null,
        to: '/statistics',
        title: 'Statistics',
    },
    {
        id: 5,
        icon: null,
        to: '/settings',
        title: 'Settings',
    },
];

function Sidebar() {
    return (
        <Styled.Wrapper>
            {SIDEBAR_LIST.map((item) => (
                <Styled.SidebarItem key={item.id} to={item.to}>
                    {item.title}
                </Styled.SidebarItem>
            ))}
        </Styled.Wrapper>
    );
}

export default Sidebar;
