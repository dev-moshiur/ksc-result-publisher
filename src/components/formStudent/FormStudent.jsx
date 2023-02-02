import "./formStudent.scss";
import { useRef } from "react";
import React from "react";
import { useData } from "../../context";

export default function FormStudent() {
  const { data, getRequest } = useData();

  
  const examtype = useRef();
  const group = useRef();
  const className = useRef();
  const roll = useRef();
  

  return (
    <div className={data.formType == "student" ? "student active" : "student"}>
      <div className="header">Fill Up This Form</div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getRequest(
            `className=${className.current.value}&group=${group.current.value}&roll=${roll.current.value}&examtype=${examtype.current.value}`
          );
        }}
      >
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
        <input ref={className} required type="number" name="class" id="" />

        <label htmlFor="group">Group</label>
        <input ref={group} required type="text" list="group" name="group" id="" />
        <label htmlFor="rool">Roll</label>
        <datalist id="group">
          <option value="science"></option>
          <option value="humanities"></option>
          <option value="business"></option>
          <option value="no group"></option>
        </datalist>
        <input ref={roll} required type="number" min={1} name="rool" id="" />
        <input type="submit" value="Submit" />
        
        
      </form>
    </div>
  );
}
