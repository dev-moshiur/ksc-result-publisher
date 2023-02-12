import { useContext } from "react";
import { useReducer } from "react";
import React from "react";
import { reducer } from "./reducer";

const dataContext = React.createContext();

export const useData = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  
  
  
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
    isAdmin: false,
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
