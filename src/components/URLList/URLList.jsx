import React from 'react';
import PropTypes from 'prop-types';

import noLink from '../../assets/images/no-link.png';
import URLSkeleton from '../URLItem/components/URLSkeleton';
import URLItem from '../URLItem/URLItem';

import * as Styled from './URLList.styled';

const URLList = ({ list, isRecent, scollToQr }) => {
    const newList = list !== null && (isRecent && list.length ? list.slice(0, 4) : list);

    return list === null ? (
        [...Array(4).keys()].map((item) => <URLSkeleton key={item} />)
    ) : newList.length > 0 ? (
        newList.map((link) => <URLItem key={link._id} data={link} scollToQr={scollToQr} />)
    ) : (
        <Styled.Wrapper>
            <img src={noLink} alt="No Links" />
            <h1>There are no links</h1>
            <p>
                Go to <strong>URL Shortener</strong> to shorten the link
            </p>
        </Styled.Wrapper>
    );
};

URLList.propTypes = {
    list: PropTypes.array,
    isRecent: PropTypes.bool,
};

export default URLList;
