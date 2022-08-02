import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, Sidebar } from '../components';

const Container = styled.div`
    display: flex;
    height: 100%;
    margin-top: var(--header-height);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 16px;
`;

const Default = (children) => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Content className="container">{children.children}</Content>
            </Container>
        </>
    );
};

Default.propTypes = {};

export default Default;
