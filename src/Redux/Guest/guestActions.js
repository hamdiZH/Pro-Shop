import {
    GET_FEATURED_PRODUCTS_START,
    GET_FEATURED_PRODUCTS_SUCCESS,
    GET_PRODUCT_BY_ID_FAILED,
    GET_PRODUCT_BY_ID_START,
    GET_PRODUCT_BY_ID_SUCCESS, GET_SEARCH_RESULTS_FAILED, GET_SEARCH_RESULTS_START, GET_SEARCH_RESULTS_SUCCESS,
    GET_SLIDER_IMAGE_FAILED,
    GET_SLIDER_IMAGE_START,
    GET_SLIDER_IMAGE_SUCCESS
} from "./guestTypes";
import axios from "axios";
import API_URL from "../../API";


export const getSliderImages = () => async (dispatch) => {
    dispatch({
        type: GET_SLIDER_IMAGE_START
    });

    try {
        const response = await axios.get(`${API_URL}/products/top`);
        console.log(response);
        dispatch({
            type: GET_SLIDER_IMAGE_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_SLIDER_IMAGE_FAILED,
            payload: e?.response?.message
        });
    }
};

export const getFeaturedProducts = () => async (dispatch) => {
    dispatch({
        type: GET_FEATURED_PRODUCTS_START,
    });

    try {
        const response = await axios.get(`${API_URL}/products`);
        dispatch({
            type: GET_FEATURED_PRODUCTS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_SLIDER_IMAGE_FAILED,
            payload: e?.response?.message
        });
    }
};

export const getProduct = (id) => async (dispatch) => {
    dispatch({
        type: GET_PRODUCT_BY_ID_START
    });

    try {
        const response = await axios.get(`${API_URL}/products/` + id);
        dispatch({
            type: GET_PRODUCT_BY_ID_SUCCESS,
            payload: response.data,
        });
    } catch (e) {
        dispatch({
            type: GET_PRODUCT_BY_ID_FAILED,
            error: e?.data?.message,
        });
    }
};

export const search = (keyword, page) => async (dispatch, getState) => {
    dispatch({
        type: GET_SEARCH_RESULTS_START,
    });

    try {
        const response = await axios.get(
            `${API_URL}/products?pageNumber=${page}${
                keyword ? `&keyword=${keyword}` : ""
            }`
        );

        if (page > 1) {
            const { products } = response.data;

            const prevProducts = getState().guestState.searchResults.products;

            response.data.products = [...prevProducts, ...products];
        } else if (page === 1) {
            const { products } = response.data;
            response.data.products = [...products];
        }

        dispatch({
            type: GET_SEARCH_RESULTS_SUCCESS,
            payload: response.data,
        });
    } catch (e) {
        dispatch({
            type: GET_SEARCH_RESULTS_FAILED,
            payload: e?.response?.message,
        });
    }
};
