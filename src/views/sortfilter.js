import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const FilterSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #c4c4c4;
`;

const FilterWrapper = styled.div`
    margin: 0.5rem 0
`;

const FilterText = styled.span`
    color: #000;
    font-weight: 700;
`

const FilterButton = styled.button`
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 52px;
    margin: 0 1rem;
    color: #8c8c8c;
    padding: 0.5rem;
    background: #fff;
    cursor: pointer;
    height: 42px;
`;

const ActiveFilterButton = styled.button`
    border: 1px solid #000;
    box-sizing: border-box;
    border-radius: 52px;
    margin: 0 1rem;
    font-weight: 700;
    color: #000;
    padding: 0.5rem;
    background: #fff;
    cursor: pointer;
    height: 42px;
`;


const SortSelect = styled.select`
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 32px;
    height: 42px;
    background: #fff;
    padding: 0.5rem;
`;

const SortOption = styled.option`
    padding: 0.5rem;
    color: #000;
`

export default function SortFilter() {
    const dispatch = useDispatch();
    const filterData = useSelector(state => state.reducer);
    const handleFilterClick = category => {
        dispatch({
            type: 'FILTER_DATA',
            category: category
        })
    }

    const handleSortClick = category => {
        dispatch({
            type: 'SORT_DATA',
            category: category
        })
    }

    return (
        <FilterSection>
            <FilterWrapper>
                <FilterText>FILTERS : </FilterText>
                {filterData.category === 'All Products' ?
                    <ActiveFilterButton>All Products</ActiveFilterButton>
                    : <FilterButton onClick={() => handleFilterClick('All Products')}>All Products</FilterButton>
                }
                {filterData.category === 'Tee Shirt' ?
                    <ActiveFilterButton>Tee Shirt</ActiveFilterButton>
                    : <FilterButton onClick={() => handleFilterClick('Tee Shirt')}>Tee Shirt</FilterButton>
                }
                {filterData.category === 'Denim' ?
                    <ActiveFilterButton>Denim</ActiveFilterButton>
                    : <FilterButton onClick={() => handleFilterClick('Denim')}>Denim</FilterButton>
                }
                {filterData.category === 'Sweatshirts' ?
                    <ActiveFilterButton>Sweatshirts</ActiveFilterButton>
                    : <FilterButton onClick={() => handleFilterClick('Sweatshirts')}>Sweatshirts</FilterButton>
                }
                {filterData.category === 'Polo Tee Shirts' ?
                    <ActiveFilterButton>Polo Tee Shirts</ActiveFilterButton>
                    : <FilterButton onClick={() => handleFilterClick('Polo Tee Shirts')}>Polo Tee Shirts</FilterButton>
                }
                {filterData.category === 'Shirt' ?
                    <ActiveFilterButton style>Shirt</ActiveFilterButton>
                    : <FilterButton onClick={() => handleFilterClick('Shirt')}>Shirt</FilterButton>
                }
            </FilterWrapper>
            <SortSelect value={filterData.sort}>
                <SortOption value="low" onClick={() => handleSortClick('low')}>
                    Sort By : Low to High
                </SortOption>
                <SortOption value="high" onClick={() => handleSortClick('high')}>
                    Sort By : High to Low
                </SortOption>
            </SortSelect>
        </FilterSection>
    )
}