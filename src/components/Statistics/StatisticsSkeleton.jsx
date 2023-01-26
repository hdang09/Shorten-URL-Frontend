import { Col } from 'styled-bootstrap-grid';
import Skeleton from 'react-loading-skeleton';

import * as Styled from './Statistics.styled';

const Statistics = () => {
    const STATISTICS_LIST = [...Array(2).keys()];

    return (
        <>
            {STATISTICS_LIST.map((item) => (
                <Col as={Styled.ColStat} col={6} key={item}>
                    <Styled.LinksIcon>
                        <Skeleton circle width={35} height={35} />
                    </Styled.LinksIcon>
                    <Styled.InfoStat>
                        <h2>
                            <Skeleton width={35} />
                        </h2>
                        <span>
                            <Skeleton width={70} />
                        </span>
                    </Styled.InfoStat>
                </Col>
            ))}
        </>
    );
};

export default Statistics;
