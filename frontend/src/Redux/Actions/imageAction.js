import {
    SHOW_ALL_IMAGE_REQUEST,
    SHOW_ALL_IMAGE_SUCCESS,
    SHOW_ALL_IMAGE_FAIL,
    CLEAR_ERRORS,
    ADD_IMAGE_FAIL,
    ADD_IMAGE_SUCCESS,
    ADD_IMAGE_REQUEST,
    IMAGE_REQUEST,
    IMAGE_SUCCESS,
    IMAGE_FAIL,
    EDIT_IMAGE_REQUEST,
    EDIT_IMAGE_SUCCESS,
    EDIT_IMAGE_FAIL,
    DELETE_IMAGE_REQUEST,
    DELETE_IMAGE_SUCCESS,
    DELETE_IMAGE_FAIL
  } from "../Constants/imageConstant";
  import axios from "axios";
  
  // Show all imgaes
  export const imageaction = (keyword = "", page = 1) => async (dispatch) => {
    try {
      dispatch({
        type: SHOW_ALL_IMAGE_REQUEST,
      });
      let link = `http://localhost:3601/?keyword=${keyword}&page=${page}`;
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

  export const editimageaction = (imageData, id) => async (dispatch) => {
    try {
      dispatch({
        type: EDIT_IMAGE_REQUEST,
      });
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      let link = `http://localhost:3601/${id}/edit`;
      const { data } = await axios.put(link,imageData,config);
      dispatch({
        type: EDIT_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_IMAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const deleteimageaction = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_IMAGE_REQUEST,
      });
      let link = `/delete/${id}`;
      const { data } = await axios.delete(link);
      dispatch({
        type: DELETE_IMAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_IMAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Clearing Errors
  export const clearerr = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
  };