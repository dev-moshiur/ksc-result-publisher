import "./formSchool.scss";
import React from "react";
import { useRef } from "react";
import { useData } from "../../context";

export default function FormSchool() {
  const { data, getRequest } = useData();
  const schoolName = useRef();
  const mobile = useRef();

  return (
    <div className={data.formType == "school" ? "school active" : "school"}>
      <div className="header">Fill Up This Form</div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getRequest(`schoolName=${schoolName.current.value}`);
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
        <label htmlFor="mobile">Mobile Number</label>
        <input ref={mobile} required type="text" name="mobile" id="" />
        <input type="reset" className="reset" value="Reset" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
