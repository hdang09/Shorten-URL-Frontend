import { useState, createRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import * as Styled from './URLShortener.styled';
import { useLocalStorage } from '../../hooks';
import { Card, Input, Button } from '../../components';
import { add } from '../../components/LinkItem/urlSlice';
import { shortenUrl } from '../../utils/productApi';

let counter = 0;
const regex =
    // eslint-disable-next-line no-useless-escape
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const URLShortener = ({ noItem }) => {
    const inputRef = createRef();
    const [originalURL, setOriginalURL] = useState('');
    const dispatch = useDispatch();
    const [id, setId] = useLocalStorage('id');

    const handleShortenURL = async (e) => {
        if (regex.test(originalURL)) {
            try {
                const res = await shortenUrl(originalURL, id, nanoid(11));

                ++counter;
                setOriginalURL('');
                toast.success('Shorten successfully');
                let today = new Date();
                dispatch(
                    add({
                        id: counter,
                        name: `Shorten URL ${counter}`,
                        shorten_link: res.data.data.shorten_link,
                        origin_link: originalURL.toLowerCase(),
                        // created_at: `${today.getDate()}/${
                        //     today.getMonth() + 1
                        // }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
                        created_at: today,
                        updated_at: today,
                    }),
                );
            } catch (error) {
                toast.error(error.message);
            }

            if (window.location.pathname.split('/')[1] === 'landing') {
                window.location = '/';
            }
        } else {
            toast.error('Your link is wrong. Please try again!');
        }

        inputRef.current.focus();
    };

    return (
        <Card noItem={noItem} title="URL Shortener">
            <Styled.Wrapper>
                <Input
                    ref={inputRef}
                    value={originalURL}
                    onChange={(e) => setOriginalURL(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 && handleShortenURL()}
                    large
                    background
                    placeholder="Paste a link to shorten it"
                />
                <Button shine="true" onClick={() => handleShortenURL()}>
                    Shorten
                </Button>
            </Styled.Wrapper>
        </Card>
    );
};

export default URLShortener;
