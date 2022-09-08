import React from 'react';
import PropTypes from 'prop-types';
import { Table, Calendar } from 'antd';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import * as Styled from './Admin.styled';
import { Card, Report } from '../../components';
import { Link } from 'react-router-dom';
import { columns, data } from './Admin.dummy';

const Admin = (props) => {
    return (
        <Container>
            <Row>
                <Col col={8}>
                    <Row>
                        <Col col={3}>
                            <Card>
                                <Styled.Links>1024</Styled.Links>
                                <Styled.Label>Total Links</Styled.Label>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card>
                                <Styled.Clicks>10235</Styled.Clicks>
                                <Styled.Label>Total Clicks</Styled.Label>
                            </Card>
                        </Col>

                        <Col col={3}>
                            <Card>
                                <Styled.CTR>72.7%</Styled.CTR>
                                <Styled.Label>AVG CTR</Styled.Label>
                            </Card>
                        </Col>
                        <Col col={3}>
                            <Card>
                                <Styled.Times>5.2s</Styled.Times>
                                <Styled.Label>AVG Times</Styled.Label>
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
                            <Styled.DashboardCalandar>
                                <Calendar fullscreen={false} headerRender={() => <></>} />
                            </Styled.DashboardCalandar>
                        </Card>
                        <Card title="Line Chart">
                            <Report />
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

Admin.propTypes = {};

export default Admin;
