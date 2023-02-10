import * as Styled from './URLItem.styled';
import Skeleton from 'react-loading-skeleton';
import { useLocalStorage } from '../../hooks';

const URLSkeleton = () => {
    const BUTTON_LIST = [...Array(4).keys()];
    // eslint-disable-next-line prefer-destructuring
    const isDarkMode = useLocalStorage('data-theme')[0] === 'dark';

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
                    <Styled.Subtitle>
                        <Skeleton baseColor={isDarkMode ? '#161D31' : '#ebebeb'} />
                    </Styled.Subtitle>
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
