import React, { useRef, useState } from "react";
import { useData } from "../../context";
import Loading from "../loading/Loading";
import "./login.scss";
import { Clear } from "@material-ui/icons";
export default function Login() {
  const { data, dispatch } = useData();
  const [loginMessage, setLoginMessage] = useState(true);

  let email = useRef();
  let password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://school-management-api-six.vercel.app/register/login`, {
      method: "post",
      headers: { "Content-type": "application/json" },
      // credentials: "include",

      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    }).then((res) => {
      if (res.status == 200) {
      } else {
      }
    });
  };

  return (
    <div className={"login"}>
      <div className={"heading"}>Login</div>
      <Loading loading={loading} />
      {loginMessage && (
        <div className="message">
          <span>
            To check admin functionallity login with <br />
            <b>email : dev.moshiurr@gmail.com </b>
            <br />
            <b>password : 111</b>
          </span>
          <Clear onClick={() => setLoginMessage(false)} />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor={"email"}>Email</label>

        <input required ref={email} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input required ref={password} type="password" name="password" />
        <input className={"blue"} type="submit" value="Submit" />
      </form>
    </div>
  );
}
