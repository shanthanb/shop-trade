import React from 'react';
import TopBar from './topbar';
import Banner from './banner';
import BreadCrumbs from './breadcrumbs';
import styled from 'styled-components';

const Main = styled.section`
    display: flex;
    flex: 1;
    margin: 0;
    padding-left: 10px;
`

export default function Layout({ children }) {
    return (
        <>
            <TopBar />
            <Banner />
            <BreadCrumbs />
            <Main>
                {children}
            </Main>
        </>
    )
}