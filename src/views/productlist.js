import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const ProductContainer = styled.section`
    margin: 1rem 0;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 240px 240px 240px 240px 240px;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    max-width: 100%;
`;

const ProductWrapper = styled.div`
    margin: 1rem 0;
`;

const ImageContainer = styled.div`
    background: url(${(props => props.src)}) no-repeat;
    background-size: 240px 240px;
    height: 240px;
    width: 240px; 
`;

const ActionContainer = styled.div`
    margin: 1rem 0 0 0.5rem;
`

const BrandContainer = styled.div`
    color: #000;
`;

const DescriptionContainer = styled.div`
    color: #c4c4c4;
    font-size: 0.8rem;
    margin: 0.5rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 210px;
`;

const PriceContainer = styled.div`
    color: #000;
`;

const PriceText = styled.span`
    color: #000;
`;

const StrikedPrice = styled.span`
    color: #c4c4c4;
    font-size: 0.85rem;
    text-decoration: line-through;
    margin-left: 0.5rem;
`;

const AddCartButton = styled.button`
    border: 1px solid #878787;
    box-sizing: border-box;
    border-radius: 3px;
    background: #fff;
    text-transform: uppercase;
    width: 232px;
    height: 36px;
    font-weight: 700;
    cursor: pointer;
`;

const SizeContainer = styled.div`
    color: #878787;
    font-size: 0.8rem;
`;

const SelectSizeLabel = styled.div`
    color :#000;
`;

const SizeCircle = styled.span`
        color :#808080;
        border-radius: 50%;
        border: 1px solid #C4C4C4;
        box-sizing: border-box;
        font-size: 0.7rem;
        margin: 0 0.5rem 0 0;
        cursor: pointer;
        padding: 0.2rem;
    &:hover {
        color :#000;
        border: 1px solid #000;
    }
`;

export default function ProductList() {
    const productlist = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [hovered, setHovered] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const [sizeClicked, setSizeClicked] = React.useState([]);

    const handleCartSelected = item => {
        dispatch({
            type: 'SET_CART',
            cart: item
        })
        setSizeClicked([]);
    }

    return (
        <ProductContainer>
            {
                productlist.filteredData.map((item, idx) => {
                    let sizeList = item.options.map(item => item.value);
                    return (
                        <ProductWrapper
                            key={idx}
                            onMouseOver={() => {
                                setHovered(true)
                                setKey(idx)
                            }}
                            onMouseOut={() => setHovered(false)}
                        >
                            <ImageContainer src={item.image_src[0]} />
                            <ActionContainer>
                                {hovered === false && (
                                    <BrandContainer>{item.vendor}</BrandContainer>
                                )}
                                {hovered === false && (
                                    <DescriptionContainer>{item.name}</DescriptionContainer>
                                )}
                                {hovered === true && key === idx && sizeClicked.indexOf(idx) > -1 && (
                                    <AddCartButton
                                        onClick={() => handleCartSelected(item)}
                                    >
                                        Add to Cart
                                    </AddCartButton>
                                )}
                                {hovered === true && key === idx && sizeClicked.indexOf(idx) > -1 && (
                                    <SizeContainer>
                                        {`Sizes: ${sizeList.toString().toUpperCase()}`}
                                    </SizeContainer>
                                )}
                                {hovered === true && key === idx && sizeClicked.indexOf(idx) === -1 && (
                                    <>
                                        <SelectSizeLabel>
                                            Select Size:
                                        </SelectSizeLabel>
                                        {
                                            sizeList.map((option) => {
                                                return (
                                                    <SizeCircle
                                                        key={Math.random()}
                                                        onClick={() => setSizeClicked([...sizeClicked, idx])}
                                                    >
                                                        {option}
                                                    </SizeCircle>
                                                );

                                            })
                                        }
                                    </>
                                )}
                                <PriceContainer>
                                    <PriceText>{`$${item.price}`}</PriceText>
                                    <StrikedPrice>{`$${item.compare_at_price}`}</StrikedPrice>
                                </PriceContainer>
                            </ActionContainer>
                        </ProductWrapper>
                    )
                })
            }
        </ProductContainer>
    )
}