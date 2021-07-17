import {
    ADD_REVIEW_FAILDED, ADD_REVIEW_RESET,
    ADD_REVIEW_START, ADD_REVIEW_SUCCESS,
    USER_GET_PROFILE_FAILED,
    USER_GET_PROFILE_START, USER_GET_PROFILE_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAILED, USER_UPDATE_PROFILE_START, USER_UPDATE_PROFILE_SUCCESS
} from "./userTypes";


export const userReducer = (
    initialState = {
        user: {
            _id: '',
            name: '',
            email: '',
            token: '',
        },
        userProfile: {
            user: {},
        },

        addReview: {
            success: false,
            isLoading: false,
            error: '',
        },

        success: false,
        isLoading: false,
        error: '',
    }, action
) => {
    switch (action.type){
        case USER_LOGIN_START:
            return {
                ...initialState,
                isLoading: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                user: action.payload,
                isLoading: false,
                success: true,
            };
        case USER_LOGIN_FAILED:
            return {
                ...initialState,
                error: action.payload,
                isLoading: false,
            };

        case USER_REGISTER_START:
            return {
                ...initialState,
                isLoading: true
            };
        case USER_REGISTER_SUCCESS:
            return {
                user: action.payload,
                isLoading: false,
                success: true,
            };
        case USER_REGISTER_FAILED:
            return {
                ...initialState,
                error: action.payload,
                isLoading: false,
            };

        case USER_GET_PROFILE_START:
            return {
                ...initialState,
                userProfile: {
                    isLoading: true
                },
            };

        case USER_GET_PROFILE_SUCCESS:
            return {
                ...initialState,
                userProfile: {
                    user: action.payload,
                    isLoading: false,
                    success: true,
                },
            };

        case USER_GET_PROFILE_FAILED:
            return {
                ...initialState,
                userProfile: {
                    user: action.payload,
                    isLoading: false
                },
            };

        case USER_UPDATE_PROFILE_START:
            return {
                ...initialState,
                userProfile: {
                    isLoading: true,
                },
            };

        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                user: action.payload,
                isLoading: false,
                success: true,
            };

        case USER_UPDATE_PROFILE_FAILED:
            return {
                ...initialState,
                error: action.payload,
                isLoading: false,
            }

        case ADD_REVIEW_START:
            return {
                ...initialState,
                addReview: {
                    isLoading: true,
                },
            };

        case ADD_REVIEW_SUCCESS:
            return {
                ...initialState,
                addReview: {
                    isLoading: false,
                    success: action.payload,
                },
            };

        case ADD_REVIEW_FAILDED:
            return {
                ...initialState,
                addReview: {
                    error: action.payload,
                    isLoading: false,
                },
            };

        case ADD_REVIEW_RESET:
            return {
                ...initialState,
                addReview: {
                    error: "",
                    success: "",
                    isLoading: false,
                },
            };

        case USER_LOGOUT_SUCCESS:
            return {
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    token: ''
                },
            };



        default:
            return initialState;
    }
}