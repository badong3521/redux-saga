import {
  GET_LIST_DATA,
  GET_LIST_DATA_SUCCESS,
  DELETE_DATA,
  ADD_USER,
  ADD_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
} from "./constant";

const Inittials = {
  users: [],
};

const myReducer = (state = Inittials, action) => {
  switch (action.type) {
    case GET_LIST_DATA:
      return {
        ...state,
      };
    case GET_LIST_DATA_SUCCESS:
      console.log("ACTION REDUCER GET", action.payload);
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_DATA:
      const newUsers = state.users.filter((item) => item.id !== action.id);
      return {
        users: newUsers,
      };

    case ADD_USER:
      return {
        ...state,
        // users: [...state.users],
      };

    case ADD_USER_SUCCESS:
      console.log("ACTION_ADD", action.data);
      return {
        ...state,
        users: [...state.users, action.data],
      };

    case EDIT_USER:
      return {
        ...state,
      };

    case EDIT_USER_SUCCESS:
      const newEmail = state.users.filter(
        (item) => item.email !== action.email
      );
      console.log("ACTION_ADD", {
        ...state,
        users: [...state.users, newEmail],
      });
      console.log("newEmail", newEmail);
      return {
        ...state,
        users: newEmail,
      };

    default:
      return state;
  }
};

export default myReducer;
