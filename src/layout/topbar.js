import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import cart from './cart.svg';
import search from './search.svg';
import profile from './profile.svg';
import arrow from './arrow.svg';
import { useSelector } from 'react-redux';

const Header = styled.header`
    background: #fff;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const ImgSection = styled.img`
    height: 25px;
    width: 25px;
    padding: 1rem;
`;

const NavWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
`;

const FirstNavLink = styled.li`
    margin: 0 1rem;
    background: url(${arrow}) no-repeat;
    background-position: 55px 10px;
    padding: 0 1rem;
    cursor: pointer;
`;

const NavLinks = styled.li`
    margin: 0 1rem;
    cursor: pointer;
`;

const ActionWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    margin-right: 0.5rem;
`

const ActionItems = styled.li`
    margin: 0 0;
    cursor: pointer;
`;

const CartLength = styled.span`
    position: absolute;
    top: 5px;
    right: 15px;
    border-radius: 50%;
    background: #E64C09;
    width: 15px;
    font-size: 0.75rem;
    color: #fff;
`


export default function TopBar() {
    const cartLength = useSelector(state => state.reducer.cart).length;

    return (
        <Header>
            <ImgSection src={logo} alt="logo" />
            <NavWrapper>
                <FirstNavLink>
                    Shop
                </FirstNavLink>
                <NavLinks>
                    About Us
                </NavLinks>
                <NavLinks>
                    Our Stores
                </NavLinks>
                <NavLinks>
                    Contact Us
                </NavLinks>
            </NavWrapper>
            <ActionWrapper>
                <ActionItems>
                    <ImgSection src={search} />
                </ActionItems>
                <ActionItems>
                    <ImgSection src={profile} />
                </ActionItems>
                <ActionItems>
                    <ImgSection src={cart} />
                    <CartLength>{cartLength}</CartLength>
                </ActionItems>
            </ActionWrapper>
        </Header>
    )
}