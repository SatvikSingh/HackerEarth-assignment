import {
  SHOW_ALL_IMAGE_REQUEST,
  SHOW_ALL_IMAGE_SUCCESS,
  SHOW_ALL_IMAGE_FAIL,
  CLEAR_ERRORS,
  ADD_IMAGE_FAIL,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_REQUEST,
  ADD_IMAGE_RESET,
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_FAIL
} from "../Constants/imageConstant";

export const showallimage = (state = { allimages: [] }, action) => {
  switch (action.type) {
    case SHOW_ALL_IMAGE_REQUEST:
      return {
        loading: true,
        allimages: [],
      };
    case SHOW_ALL_IMAGE_SUCCESS:
      return {
        loading: false,
        allimages: action.payload.images,
      };
    case SHOW_ALL_IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_IMAGE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
      };
    case ADD_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_IMAGE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const showoneimage = (state = { allimages: {} }, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        loading: true,
        allimages: [],
      };
    case IMAGE_SUCCESS:
      return {
        loading: false,
        allimages: action.payload.images,
      };
    case IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
