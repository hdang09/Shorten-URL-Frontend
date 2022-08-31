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
    const data = [
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
        {
            key: '6',
            name: 'Morp Blue',
            links: 98,
            clicks: 66,
            ctr: 89,
            times: 50,
        },
        {
            key: '7',
            name: 'Gaga Pink',
            links: 98,
            clicks: 90,
            ctr: 70,
            times: 35,
        },
        {
            key: '8',
            name: 'Morp Yellow',
            links: 88,
            clicks: 99,
            ctr: 89,
            times: 70,
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
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

            <Table columns={columns} dataSource={data} onChange={onChange} />
        </Container>
    );
};

Management.propTypes = {};

export default Management;
