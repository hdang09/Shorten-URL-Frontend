import React from 'react';
import PropTypes from 'prop-types';
import { Table, Calendar } from 'antd';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Card, Report } from '../../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Admin = (props) => {
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
    ];

    return (
        <Container>
            <Row>
                <Col col={8}>
                    <Row>
                        <Col col={3}>
                            <Card style={{ color: 'red' }}>
                                <Links>1024</Links>
                                <h3>Total Links</h3>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card>
                                <Clicks>10235</Clicks>
                                <h3>Total Clicks</h3>
                            </Card>
                        </Col>

                        <Col col={3}>
                            <Card>
                                <CTR>72.7%</CTR>
                                <h3>AVG CTR</h3>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card>
                                <Times>5.2s</Times>
                                <h3>AVG Times</h3>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={12}>
                            <Card
                                title="Recent Users"
                                subtitle={<Link to="/admin/management">View All {'>'}</Link>}
                            >
                                <Table columns={columns} dataSource={data} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col col={4}>
                    <Col col={12}>
                        <Card title="Calendar">
                            <DashboardCalandar>
                                <Calendar fullscreen={false} headerRender={() => <></>} />
                            </DashboardCalandar>
                        </Card>
                        <Card title="Line Chart">
                            <Report />
                        </Card>
                    </Col>
                </Col>
            </Row>
            {/* <Row>
                <Col col={4}>
                    <Card title="Bar Chart"></Card>
                </Col>
                <Col col={4}>
                    <Card title="Line Chart"></Card>
                </Col>
                <Col col={4}>
                    <Card title="Hightest Report"></Card>
                </Col>
            </Row> */}
        </Container>
    );
};

Admin.propTypes = {};

export default Admin;

const Title = styled.h1`
    font-weight: 700;
`;

const Links = styled(Title)`
    color: red;
`;

const Clicks = styled(Title)`
    color: blue;
`;

const CTR = styled(Title)`
    color: green;
`;

const Times = styled(Title)`
    color: yellow;
`;

const DashboardCalandar = styled.div`
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
`;
