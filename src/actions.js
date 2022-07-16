import {
  GET_LIST_DATA,
  GET_LIST_DATA_SUCCESS,
  DELETE_DATA,
  ADD_USER_SUCCESS,
  ADD_USER,
  EDIT_USER,
  EDIT_USER_SUCCESS,
} from "./constant";
export const getListData = () => {
  return {
    type: GET_LIST_DATA,
  };
};

export const getListDataSuccess = () => {
  return {
    type: GET_LIST_DATA_SUCCESS,
  };
};

export const deleteDataSuccess = (id) => {
  return {
    type: DELETE_DATA,
    id,
  };
};

export const addUser = (email) => {
  return {
    type: ADD_USER,
  };
};

export const addUserSuccess = (email) => {
  console.log("EMAIL FILE ACTTION", email);
  return {
    type: ADD_USER_SUCCESS,
    data: { email },
  };
};

export const EditUser = () => {
  return {
    type: EDIT_USER,
  };
};

export const EditUserSuccess = (dataId, email) => {
  return {
    type: EDIT_USER_SUCCESS,
    dataId,
    email: { email },
  };
};
