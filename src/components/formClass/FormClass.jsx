import "./formClass.scss";
import React, { useRef } from "react";
import { useData } from "../../context";

export default function FormClass({}) {
  const { data, getRequest } = useData();
  const schoolName = useRef();
  const className = useRef();
  const mobile = useRef();
  // let dataForPost ={
  //   mobile:mobile.current.value,
  //   query:{
  //   schoolName:schoolName.current.value,
  //   className:className.current.value,className
  // }}

  return (
    <div className={data.formType == "class" ? "class active" : "class"}>
      <div className="header">Fill Up This Form</div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getRequest(
            `schoolName=${schoolName.current.value}&className=${className}`
          );
        }}
      >
        <label htmlFor="school">School</label>
        <input
          ref={schoolName}
          required
          type="text"
          list="school"
          name="school"
        />
        <datalist id="school">
          <option value="Khalshi High School"></option>
          <option value="Nijpara High School"></option>
          <option value="Patharghata High School"></option>
        </datalist>
        <label htmlFor="class">Class</label>
        <input
          ref={className}
          list="class"
          required
          type="number"
          name="class"
          id=""
        />
        <datalist id="class">
          <option value="Ten"></option>
          <option value="Nine"></option>
          <option value="Eight"></option>
          <option value="Seven"></option>
          <option value="Six"></option>
          <option value="Five"></option>
          <option value="Four"></option>
          <option value="Three"></option>
          <option value="Two"></option>
          <option value="One"></option>
        </datalist>
        <label htmlFor="mobile">Mobile Number</label>
        <input ref={mobile} type="text" name="mobile" id="" />
        <input type="reset" className={"reset"} value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
