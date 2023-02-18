import "./home.scss";
import React, { useState } from "react";

import FormClass from "../../components/formClass/FormClass";
import FormStudent from "../../components/formStudent/FormStudent";

export default function Home() {
  const [formName, setFormName] = useState("student");
  return (
    <div className="home">
      <div className="forms">
        <div className="option">
          <div className="heading">Search Result</div>
          <div className="formType">
            <label htmlFor="">Select Form : </label>
          <select onChange={(e) => setFormName(e.target.value)}>
            <option disabled value="">
              Select Option
            </option>
            <option value="student">Student Result Form</option>
            <option value="class">Class Result Form</option>
          </select>

          </div>
          
        </div>
        <div className="subForms">
          <FormClass formName={formName} />
          <FormStudent formName={formName} />
        </div>
      </div>
    </div>
  );
}
