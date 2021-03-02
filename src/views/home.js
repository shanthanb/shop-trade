import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import SortFilter from './sortfilter';
import ProductList from './productlist';

const ContentWrapper = styled.section`
    text-align: left;
    margin: 0 0.5rem 0.5rem;
`;

const Heading = styled.h4`
`;


export default function Home() {
    const title = useSelector(state => state.reducer.title);
    const dispatch = useDispatch();

    const getProductList = async () => {
        let productlist = await axios.get('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (productlist.status === 200) {
            let data = productlist.data.replace(/\\n/g, "\\n")
                .replace(/\\'/g, "\\'")
                .replace(/\\"/g, '\\"')
                .replace(/\\&/g, "\\&")
                .replace(/\\r/g, "\\r")
                .replace(/\\t/g, "\\t")
                .replace(/\\b/g, "\\b")
                .replace(/\\f/g, "\\f")
                .replace(/[\u0000-\u0019]+/g, "")
                .replace(/(^,)|(,$)/g, "")
                .replace(',]', ']');
            dispatch({
                type: 'SET_DATA',
                data: JSON.parse(data)
            })
        }
        else {
            console.log(productlist);
        }
    }

    React.useEffect(() => {
        getProductList();
    })

    return (
        <ContentWrapper>
            <Heading>{title}</Heading>
            <SortFilter />
            <ProductList />
        </ContentWrapper>
    )
}