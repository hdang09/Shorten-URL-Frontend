import React from 'react';
import URLItem from '../URLItem/URLItem';
import noLink from '../../assets/images/no-link.png';
import * as Styled from './URLList.styled';

const URLList = ({ list, isRecent }) => {
    const newList = isRecent && list.length ? list.slice(0, 4) : list;

    console.log(newList);

    return newList.length > 0 ? (
        newList.map((link) => <URLItem key={link._id} data={link} />)
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

export default URLList;
