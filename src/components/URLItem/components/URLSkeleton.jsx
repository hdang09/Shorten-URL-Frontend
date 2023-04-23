import Skeleton from 'react-loading-skeleton';
import { useTheme } from 'styled-components';

import * as Styled from '../URLItem.styled';

const URLSkeleton = () => {
    const BUTTON_LIST = [...Array(4).keys()];

    // Theme styled-components
    const theme = useTheme();

    return (
        <>
            <Styled.SkeletonWrapper>
                <Styled.Icon>
                    <Skeleton circle width={35} height={35} baseColor={theme.background} />
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>
                        <Skeleton width={150} baseColor={theme.background} />
                    </Styled.Title>
                    <Styled.SubtitleSkel>
                        <Skeleton baseColor={theme.background} />
                    </Styled.SubtitleSkel>
                </Styled.Main>
                {BUTTON_LIST.map((button) => (
                    <Styled.Icon key={button}>
                        <Skeleton width={30} height={30} circle baseColor={theme.background} />
                    </Styled.Icon>
                ))}
            </Styled.SkeletonWrapper>
        </>
    );
};

export default URLSkeleton;
