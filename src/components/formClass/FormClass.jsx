import "./formClass.scss";
import React, { useRef, useState } from "react";
import { useData } from "../../context";
import { Navigate } from "react-router-dom";
import Loading from '../loading/Loading'
import {Clear} from '@material-ui/icons'
export default function FormClass({formName}) {
  const { data, dispatch } = useData();

  const className = useRef();
  const examtype = useRef();
  const group = useRef()
  const [fetchSuccess, setfetchSuccess] = useState(false);
  const [loading, setLoading] = useState(false)
  const [loginMessage, setLoginMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setfetchSuccess(false);
    setLoading(true)
    fetch(
      `https://school-management-api-six.vercel.app/result/?className=${className.current.value}&examtype=${examtype.current.value}&group=${group.current.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
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
      <div className={formName == "class" ? "class active" : "class"}>
        
        {loading && <Loading/>}
        
        
        <form action="" onSubmit={handleSubmit}>
        {loginMessage && (
        <div className="message">
          <span>
            For Testing Search with <br />
            <b>Exam Name : Half-Yearly Examination 2023 </b>
            <br />
            <b>Class : 10</b>
            <br />
            <b>Group : science</b>
            
          </span>
          <Clear onClick={() => setLoginMessage(false)} />
        </div>
      )}
          <label htmlFor="examType">Exam Name</label>
          <input
            ref={examtype}
            required
            list="examType"
            type="text"
            name="examType"
            placeholder="select from datalist"
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
            max={10}
            min={6}
          />
          <label htmlFor="group">
            Group
          </label>
          <select name="group" id="" ref={group} placeholder="select from datalist" >
            <option value="science">science</option>
            <option value="humanities">humanities</option>
            <option value="business">business</option>
            <option value="no group">no group</option>
          </select>

          <input type="reset" className={"reset"} value="Reset" />
          <input type="submit" value="Search" />
        </form>
      </div>
    </>
  );
}
