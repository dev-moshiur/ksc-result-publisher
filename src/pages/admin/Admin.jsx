import React from "react";
import AdminInput from "../../components/adminInput/AdminInput";

import Login from "../../components/login/Login";
import { useData } from "../../context";
import "./admin.scss";
export default function Admin() {
  const { data } = useData();
  return <div>{data.isAdmin ? <AdminInput /> : <Login />}</div>;
}
