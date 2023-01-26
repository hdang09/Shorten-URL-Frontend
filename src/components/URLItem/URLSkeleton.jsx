import * as Styled from './URLItem.styled';
import Skeleton from 'react-loading-skeleton';

const URLSkeleton = () => {
    const BUTTON_LIST = [...Array(4).keys()];

    return (
        <>
            <Styled.SkeletonWrapper>
                <Styled.Icon>
                    <Skeleton circle width={35} height={35} />
                </Styled.Icon>
                <Styled.Main>
                    <Styled.Title>
                        <Skeleton width={150} />
                    </Styled.Title>
                    <Styled.Subtitle>
                        <Skeleton />
                    </Styled.Subtitle>
                </Styled.Main>
                {BUTTON_LIST.map((button) => (
                    <Styled.Icon key={button}>
                        <Skeleton width={30} height={30} circle />
                    </Styled.Icon>
                ))}
            </Styled.SkeletonWrapper>
        </>
    );
};

export default URLSkeleton;
