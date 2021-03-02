import {
    SET_BANNER_TEXT,
    SET_DATA,
    FILTER_DATA,
    SET_TITLE,
    SORT_DATA,
    SET_CART,
} from '../actions/actions';

const intialState = {
    bannerText: "Invite friends to Big Fashion Festival & get up to $150 MynCash for every person who visits",
    data: [],
    filteredData: [],
    title: '',
    category: 'All Products',
    cart: [],
    sort: 'low'
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_BANNER_TEXT:
            return { ...state, bannerText: action.data };
        case SET_DATA:
            return {
                ...state,
                data: [...action.data],
                filteredData: [...action.data],
                title: `${state.category} (${action.data.length} Products)`
            };
        case FILTER_DATA:
            switch (action.category) {
                case 'All Products':
                    let allproducts = [...state.data];
                    return {
                        ...state,
                        filteredData: state.data,
                        category: action.category,
                        title: `${action.category} (${allproducts.length} Products)`
                    };
                case 'Tee Shirt':
                    let teeshirt = [...state.data].filter(item => item.tag === 'T-Shirt');
                    return {
                        ...state,
                        filteredData: teeshirt,
                        category: action.category,
                        title: `${action.category} (${teeshirt.length} Products)`
                    };
                case 'Denim':
                    let denim = [...state.data].filter(item => item.tag === 'Denim')
                    return {
                        ...state,
                        filteredData: denim,
                        category: action.category,
                        title: `${action.category} (${denim.length} Products)`
                    };
                case 'Sweatshirts':
                    let sweatshirts = [...state.data].filter(item => item.name.includes('SweatShirt'));
                    return {
                        ...state,
                        filteredData: sweatshirts,
                        category: action.category,
                        title: `${action.category} (${sweatshirts.length} Products)`
                    };
                case 'Polo Tee Shirts':
                    let polotee = [...state.data].filter(item => item.tag === "T-Shirt" && item.vendor.includes('Polo'));
                    return {
                        ...state,
                        filteredData: polotee,
                        category: action.category,
                        title: `${action.category} (${polotee.length} Products)`
                    };
                case 'Shirt':
                    let shirt = [...state.data].filter(item => item.tag === 'shirt');
                    return {
                        ...state,
                        filteredData: shirt,
                        category: action.category,
                        title: `${action.category} (${shirt.length} Products)`
                    };
                default:
                    return state;
            }
        case SET_TITLE:
            return { ...state, title: `${action.name} ( ${state.filteredData.length} )` };
        case SORT_DATA:
            let sortData = [...state.data];
            if (action.category === "low") {
                sortData = sortData.sort(function (a, b) {
                    return a.price - b.price;
                });
                return {
                    ...state,
                    filteredData: sortData,
                    sort: "low"
                };
            }
            else {
                sortData = sortData.sort(function (a, b) {
                    return b.price - a.price;
                });
                return {
                    ...state,
                    filteredData: sortData,
                    sort: "high"
                };
            }
        case SET_CART:
            return { ...state, cart: [...state.cart, action.cart] };
        default:
            return state;
    }
}

export default reducer;