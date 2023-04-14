import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

import { modeSelector } from '../../../app/reducers/customizationReducer';
import * as Styled from '../URLItem.styled';

const URLSkeleton = () => {
    const BUTTON_LIST = [...Array(4).keys()];
    const isDarkMode = useSelector(modeSelector) === 'dark';

    return (
        <>
            <Styled.SkeletonWrapper>
                <Styled.Icon>
                    <Skeleton
                        circle
                        width={35}
                        height={35}
                        baseColor={isDarkMode ? '#161D31' : '#ebebeb'}
                    />
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>
                        <Skeleton width={150} baseColor={isDarkMode ? '#161D31' : '#ebebeb'} />
                    </Styled.Title>
                    <Styled.SubtitleSkel>
                        <Skeleton baseColor={isDarkMode ? '#161D31' : '#ebebeb'} />
                    </Styled.SubtitleSkel>
                </Styled.Main>
                {BUTTON_LIST.map((button) => (
                    <Styled.Icon key={button}>
                        <Skeleton
                            width={30}
                            height={30}
                            circle
                            baseColor={isDarkMode ? '#161D31' : '#ebebeb'}
                        />
                    </Styled.Icon>
                ))}
            </Styled.SkeletonWrapper>
        </>
    );
};

export default URLSkeleton;
