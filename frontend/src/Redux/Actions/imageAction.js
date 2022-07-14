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
  import axios from "axios";
  
  // Show all imgaes
  export const imageaction = () => async (dispatch) => {
    try {
      dispatch({
        type: SHOW_ALL_IMAGE_REQUEST,
      });
      let link = `http://localhost:3601/`;
      const { data } = await axios.get(link);
      dispatch({
        type: SHOW_ALL_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SHOW_ALL_IMAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const addimageaction = (imageData) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_IMAGE_REQUEST,
      });
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      let link = `http://localhost:3601/`;
      const { data } = await axios.post(link,imageData,config);
      dispatch({
        type: ADD_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_IMAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const singleimageaction = (id) => async (dispatch) => {
    try {
      dispatch({
        type: IMAGE_REQUEST,
      });
      let link = `http://localhost:3601/show/${id}`;
      const { data } = await axios.get(link);
      dispatch({
        type: IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: IMAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  // Clearing Errors
  export const clearerr = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
  };