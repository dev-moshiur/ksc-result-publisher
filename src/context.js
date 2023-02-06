import { useContext } from "react";
import { useReducer } from "react";
import React from "react";
import { reducer } from "./reducer";

const dataContext = React.createContext();

export const useData = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const insertData = (data) => {
    if (data.length > 1) {
      dispatch({
        type: "setResult",
        value: {
          result: data,
          type: "many",
        },
      });
    } else {
      dispatch({
        type: "setResult",
        value: {
          result: data,
          type: "single",
        },
      });
    }
  };
  const getRequest = (query) => {
    dispatch({
      type: "changeLoading",
      value: true,
    });
    fetch(`https://school-management-api-six.vercel.app/result/?${query}`)
      .then((res) => res.json())
      .then((data) => {
        insertData(data);
        dispatch({
          type: "changeLoading",
          value: false,
        });
      });
  };
  const postRequest = (bodyData) => {
    fetch("https://school-management-api-six.vercel.app/result", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyData),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };
  let intialState = {
    results: [],
    type: "",
    formType: "student",
    loading: false,
    popupMessage: "Something Went Wrong",
    popUp: "",
    total: 0,
    fail: 0,
    gpa: 0,
    subjectCount: 0,
    cgpa: 0,
    subjInfo: [],
    isAdmin: true,
    adminChecked: false,
    inputSubjects: [
      {
        name: "Bangla",
        id: "Bangla",
        type: "main",
        max: 100,
        placeHolder: "1st,2nd",
      },
      {
        name: "English",
        id: "English",
        type: "main",
        max: 100,
        placeHolder: "1st,2nd",
      },
    ],
  };

  const [data, dispatch] = useReducer(reducer, intialState);
  const allData = {
    data,
    dispatch,
    getRequest,
    postRequest,
  };
  const checkAdmin = () => {
    if (!data.adminChecked) {
      fetch(`https://school-management-api-six.vercel.app/checkAdmin`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.admin) {
            dispatch({
              type: "setAdmin",
              value: true,
            });
          } else {
          }
        });
    }
  };
  //   checkAdmin()
  return (
    <dataContext.Provider value={allData}>{children}</dataContext.Provider>
  );
}
