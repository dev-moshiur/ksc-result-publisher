import "./home.scss";
import React,{useState} from "react";

import FormClass from "../../components/formClass/FormClass";
import FormStudent from "../../components/formStudent/FormStudent";

import Marksheet from "../../components/marksheet/Marksheet";
import RowResult from "../../components/rowResult/RowResult";
import { useData } from "../../context";
import Loading from "../../components/loading/Loading";
export default function Home() {
  const { dispatch, data } = useData();
  const [showMarksheet, setShowMarksheet] = useState(false)
  const [formName, setFormName] = useState('student')
  return (
    <div className="home">
      <div className="forms">
        <div className="option">
          <div className="heading">Reault Sheet For</div>
          <select
            onChange={(e) =>setFormName(e.target.value)
            }
          >
            <option disabled value="">
              Select Option
            </option>
            <option value="student">Student</option>
            <option value="class">Class</option>
          </select>
        </div>
        <div className="subForms">
          <FormClass formName={formName}/>
          <FormStudent formName={formName}/>
        </div>
      </div>
      <div className="results">
        {data.loading && <Loading />}
      </div>
    </div>
  );
}
