import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_DETAIL_SUCCESS,
    FETCH_PRODUCT_DETAIL_ERROR,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from './actions';

const initialState = {
    data: [],
    product: {},
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                product: action.payload,
                error: null
            }
        case FETCH_PRODUCT_DETAIL_ERROR:
            return {
                ...state,
                product: {},
                error: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                data: [action.payload, ...state.data],
                error: null
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                data: state.data.filter(product => product.id !== action.payload),
                error: null
            };
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
