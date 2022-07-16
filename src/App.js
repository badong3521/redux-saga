import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef, useMemo } from "react";
import { GET_LIST_DATA, GET_LIST_DATA_SUCCESS } from "./constant";
import {
  getListData,
  getListDataSuccess,
  deleteDataSuccess,
  addUserSuccess,
  EditUserSuccess,
} from "./actions";

import "./global.css";
import Banner from "./banner.tsx";
function App() {
  const [valueInput, setInputValue] = useState("");
  const [valueInputChange, setInputValueChange] = useState("");
  const data = useSelector((state) => state.myReducer.users);
  const dispatch = useDispatch();

  //getdata
  useEffect(() => {
    dispatch(getListData());
  }, []);

  const handleDelete = (id) => {
    console.log("ID", id);
    dispatch(deleteDataSuccess(id));
  };

  const handleChangeEmail = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = () => {
    dispatch(addUserSuccess(valueInput));
    setInputValue("");
  };

  const handleEdit = (dataId) => {
    dispatch(EditUserSuccess(dataId, valueInputChange));
  };

  const handleOnchangeBluer = (e) => {
    setInputValueChange(e.currentTarget.textContent);
  };
  return (
    <div className="total">
      <h1>hello world</h1>
      <label>
        <button onClick={handleAddUser}>ADD Email </button>
        <input value={valueInput} onChange={(e) => handleChangeEmail(e)} />
      </label>
      <br></br>

      <ul>
        {data.map((item) => {
          return (
            <div className="item-email" key={item.id}>
              <li
                onBlur={() => {
                  handleEdit(item.id);
                }}
                onInput={(e) => {
                  handleOnchangeBluer(e);
                }}
                suppressContentEditableWarning
                contentEditable
              >
                {item.email}
              </li>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                &times;
              </button>
            </div>
          );
        })}
      </ul>
      <Banner active={true} children={"day la noi dung"} />
    </div>
  );
}
export default App;
