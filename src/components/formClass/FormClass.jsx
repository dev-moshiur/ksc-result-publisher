import "./formClass.scss";
import React, { useRef, useState } from "react";
import { useData } from "../../context";
import { Navigate } from "react-router-dom";
export default function FormClass({}) {
  const { data, dispatch } = useData();

  const className = useRef();
  const examtype = useRef();
  const [fetchSuccess, setfetchSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setfetchSuccess(false);
    fetch(
      `https://school-management-api-six.vercel.app/result/?className=${className.current.value}&examtype=${examtype.current.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setfetchSuccess(true);
        dispatch({
          type: "setResult",
          value: {
            result: data,
            type: "many",
          },
        });
        dispatch({
          type: "changeLoading",
          value: false,
        });
      });
  };

  return (
    <>
      {fetchSuccess && <Navigate to="/searchresult" />}
      <div className={data.formType == "class" ? "class active" : "class"}>
        <div className="header">Fill Up This Form</div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="examType">Exam Name</label>
          <input
            ref={examtype}
            required
            list="examType"
            type="text"
            name="examType"
          />
          <datalist id="examType">
            <option value="Half-Yearly Examination 2023"></option>
            <option value="Model Test Examination 2023"></option>
            <option value="Weekly Test-35 2023"></option>
            <option value="Final Examination 2023"></option>
          </datalist>
          <label htmlFor="class">Class</label>
          <input
            ref={className}
            required
            type="number"
            id="class"
            name="class"
          />

          <input type="reset" className={"reset"} value="Reset" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
