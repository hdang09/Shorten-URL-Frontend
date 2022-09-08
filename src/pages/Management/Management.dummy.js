export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Total Links',
        dataIndex: 'links',
        sorter: {
            compare: (a, b) => a.links - b.links,
            multiple: 3,
        },
    },
    {
        title: 'Total Clicks',
        dataIndex: 'clicks',
        sorter: {
            compare: (a, b) => a.clicks - b.clicks,
            multiple: 2,
        },
    },
    {
        title: 'AVG CTR.',
        dataIndex: 'ctr',
        sorter: {
            compare: (a, b) => a.ctr - b.ctr,
            multiple: 1,
        },
    },
    {
        title: 'AVG Times',
        dataIndex: 'times',
        sorter: {
            compare: (a, b) => a.times - b.times,
            multiple: 1,
        },
    },
];
