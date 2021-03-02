import React from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const BannerWrapper = styled.section`
    background: linear-gradient(90.06deg, #181716 0%, #ED4E08 99.97%);
    padding: 0.5rem 0;
    width: 100%;
`;

const Text = styled.span`
    color : #fff;
`

const Button = styled.button`
    background: #fff;
    color : #000;
    margin-left: 1rem;
    height: 30px;
    border-radius: 20px;
    padding: 0 0.5rem;
    cursor: pointer;
    border: 1px solid #fff;
    font-size: 0.8rem;
`;

export default function Banner(){
    const text = useSelector(state => state.reducer.bannerText);
    return (
        <BannerWrapper>
            <Text>
                {text}
            </Text>
            <Button>
                Invite Now
            </Button>
        </BannerWrapper>
    )
}