import { call, put, takeEvery, takeLatest, take } from "redux-saga/effects";
// import { getPostData } from "../postAPI/postAPI";
import {
  GET_LIST_DATA,
  GET_LIST_DATA_SUCCESS,
  DELETE_DATA,
  ADD_USER,
  ADD_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
} from "../constant";
// import { deleteDataSuccess, addUserSuccess, addUser } from "../actions";
import { deleteAPI, getAPI, EditAPI, addUserAPI } from "./postAPI";

//Handle GET DATA
function* handleGetListData() {
  try {
    const user = yield call(getAPI);

    yield put({
      type: GET_LIST_DATA_SUCCESS,
      payload: user.data,
    });
  } catch (error) {
    //handle error
    console.log("Lỗi xảy ra ", error);
  }
}

//Handle DELETE DATA
function* handleDeleteData(action) {
  try {
    yield call(deleteAPI, action.id);
  } catch (error) {
    console.log("Lỗi xảy ra ", error);
  }
}

//Handle ADD DATA
function* handleAddEmail(action) {
  console.log("ACTION", action.data);
  try {
    yield call(addUserAPI, action.data);
    yield put({
      type: ADD_USER,
      data: action.data,
    });
  } catch (error) {
    console.log("Lỗi xảy ra ", error);
  }
}
//Handle Edit Email
function* handleEditEmail(action) {
  console.log("Email", action.email);
  try {
    yield call(EditAPI, action.dataId, action.email);
    yield put({
      type: EDIT_USER,
      data: action.email,
    });
    // yield put(addUser(action));
  } catch (error) {
    console.log("Lỗi xảy ra ", error);
  }
}
function* postsSaga() {
  yield takeEvery(DELETE_DATA, handleDeleteData);
  yield takeEvery(GET_LIST_DATA, handleGetListData);
  yield takeEvery(ADD_USER_SUCCESS, handleAddEmail);
  yield takeEvery(EDIT_USER_SUCCESS, handleEditEmail);

  // yield takeEvery(GET_LIST_DATA_SUCCESS, handleGetListData);
}

export default postsSaga;
