import Skeleton from 'react-loading-skeleton';
import { Col } from 'styled-bootstrap-grid';
import { useTheme } from 'styled-components';

import * as Styled from './Statistics.styled';

const Statistics = () => {
    const STATISTICS_LIST = [...Array(2).keys()];

    // Theme styled-components
    const theme = useTheme();

    return (
        <>
            {STATISTICS_LIST.map((item) => (
                <Col as={Styled.ColStat} col={6} key={item}>
                    <Styled.LinksIcon>
                        <Skeleton circle width={46} height={46} baseColor={theme.background} />
                    </Styled.LinksIcon>
                    <Styled.InfoStat>
                        <h2>
                            <Skeleton width={35} baseColor={theme.background} />
                        </h2>
                        <span>
                            <Skeleton width={70} baseColor={theme.background} />
                        </span>
                    </Styled.InfoStat>
                </Col>
            ))}
        </>
    );
};

export default Statistics;
