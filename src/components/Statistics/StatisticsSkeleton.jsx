import Skeleton from 'react-loading-skeleton';
import { Col } from 'styled-bootstrap-grid';

import config from '../../config';
import { useLocalStorage } from '../../hooks';

import * as Styled from './Statistics.styled';

const Statistics = () => {
    const STATISTICS_LIST = [...Array(2).keys()];
    // eslint-disable-next-line prefer-destructuring
    const isDarkMode = useLocalStorage(config.localStorage.theme)[0] === 'dark';

    return (
        <>
            {STATISTICS_LIST.map((item) => (
                <Col as={Styled.ColStat} col={6} key={item}>
                    <Styled.LinksIcon>
                        <Skeleton
                            circle
                            width={35}
                            height={35}
                            baseColor={isDarkMode ? '#161D31' : '#ebebeb'}
                        />
                    </Styled.LinksIcon>
                    <Styled.InfoStat>
                        <h2>
                            <Skeleton width={35} baseColor={isDarkMode ? '#161D31' : '#ebebeb'} />
                        </h2>
                        <span>
                            <Skeleton width={70} baseColor={isDarkMode ? '#161D31' : '#ebebeb'} />
                        </span>
                    </Styled.InfoStat>
                </Col>
            ))}
        </>
    );
};

export default Statistics;
