import React from 'react';
import styled from 'styled-components';

const BreadWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    font-size: 0.85rem;
    margin: 0.5rem 0.5rem 0;
    padding: 7px;
`;

const BreadLink = styled.li`
    &:after {
        margin: 0 2px;
        content: '/';
    }
`;
const ActiveBreadLink = styled.li`
    &:after {
        margin: 0 2px;
        font-weight: 700;
    }
`;

export default function BreadCrumbs(){
    return (
        <BreadWrapper>
            <BreadLink>Home</BreadLink>
            <BreadLink>Clothing</BreadLink>
            <BreadLink>Mens Clothing</BreadLink>
            <ActiveBreadLink><b>All Mens Clothing</b></ActiveBreadLink>
        </BreadWrapper>
    )
}