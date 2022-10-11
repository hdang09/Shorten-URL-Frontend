const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (_, record) => (
            <Link to={`/admin/management/user-url?id=${record.key}`}>
                <Avatar src={record.avatar} />
                <Styled.Name>
                    <span>{record.first_name} </span>
                    <span
                        style={{
                            marginRight: '4px',
                        }}
                    >
                        {record.last_name}
                    </span>
                    {record.role === 'Admin' && (
                        <Tippy content="Admin">
                            <div>
                                <AiTwotoneCrown color="orange" size="1.6rem" />
                            </div>
                        </Tippy>
                    )}
                </Styled.Name>
            </Link>
        ),
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: {
            compare: (a, b) => a.email - b.email,
            multiple: 2,
        },
    },
    {
        title: 'Role',
        dataIndex: 'role',
        sorter: {
            compare: (a, b) => a.role - b.role,
            multiple: 1,
        },
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, record) => <Styled.Tag type={record.status}>{record.status}</Styled.Tag>,
        sorter: {
            compare: (a, b) => a.status - b.status,
            multiple: 1,
        },
    },
];

export const data = [
    {
        key: '1',
        name: 'John Brown',
        links: 98,
        clicks: 60,
        ctr: 70,
        times: 45,
    },
    {
        key: '2',
        name: 'Jim Green',
        links: 98,
        clicks: 66,
        ctr: 89,
        times: 50,
    },
    {
        key: '3',
        name: 'Joe Black',
        links: 98,
        clicks: 90,
        ctr: 70,
        times: 35,
    },
    {
        key: '4',
        name: 'Jim Red',
        links: 88,
        clicks: 99,
        ctr: 89,
        times: 70,
    },
    {
        key: '5',
        name: 'Andy Circle',
        links: 98,
        clicks: 60,
        ctr: 70,
        times: 45,
    },
];
