import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Input } from '../../components';

const Management = (props) => {
    const columns = [
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
    const data = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Hai Dang ${i}`,
            links: 32,
            clicks: 124,
            ctr: '72.7%',
            times: '5.25s',
            address: `London, Park Lane no. ${i}`,
        });
    }

    const handleClickRow = (record) => {
        window.location = `/admin/management/user-url?id=${record.key}`;
    };

    return (
        <Container>
            <Row>
                <Col col={4} />
                <Col col={4}>
                    <Input />
                </Col>
            </Row>
            <Col col={4} />

            <Table
                columns={columns}
                dataSource={data}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => handleClickRow(record),
                    };
                }}
            />
        </Container>
    );
};

Management.propTypes = {};

export default Management;
