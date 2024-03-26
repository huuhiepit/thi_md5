import axios from 'axios';

export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";

export const fetchProductSuccess = (products) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
});

export const fetchProductError = (error) => ({
    type: FETCH_PRODUCT_ERROR,
    payload: error,
});

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            const data = response.data;
            dispatch(fetchProductSuccess(data));
        } catch (error) {
            dispatch(fetchProductError(error));
        }
    };
};

// product detail
export const FETCH_PRODUCT_DETAIL_SUCCESS = "FETCH_PRODUCT_DETAIL_SUCCESS"
export const FETCH_PRODUCT_DETAIL_ERROR = "FETCH_PRODUCT_DETAIL_ERROR"


export const fetchProductDetailSuccess = (product) => ({
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: product,
})

export const fetchProductDetailError = (error) => ({
    type: FETCH_PRODUCT_DETAIL_ERROR,
    payload: error,
})

export const fetchProductDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            const product = response.data
            dispatch(fetchProductDetailSuccess(product))
        } catch (error) {
            dispatch(fetchProductDetailError(error))
        }
    }
}

// Post product
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS"
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR"

export const addNewProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
})

export const addNewProductError = (error) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: error,
})

export const addNewProduct = (product) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3000/products", product);
            dispatch(addNewProductSuccess(response.data))
        } catch (error) {
            dispatch(addNewProductError(error))
        }
    }
}

// delete product
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

export const deleteProductSuccess = (id) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
});

export const deleteProductError = (error) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: error,
});

export const deleteProduct = (id) => {
    return async (dispatch) => {        try {
            const response = await axios.delete(`http://localhost:3000/products/${id}`);
            dispatch(deleteProductSuccess(response.data.id));
        } catch (error) {
            dispatch(deleteProductError(error));
        }
    };
};