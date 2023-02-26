import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Col } from 'styled-bootstrap-grid';

import { modeSelector } from '../../app/reducers/customizationReducer';

import * as Styled from './Statistics.styled';

const Statistics = () => {
    const STATISTICS_LIST = [...Array(2).keys()];
    const isDarkMode = useSelector(modeSelector);

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
