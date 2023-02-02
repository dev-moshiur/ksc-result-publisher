import TopBar from "./components/topBar/TopBar";
import PopupMessage from "./components/popupMessage/PopupMessage";

import AdminInput from "./components/adminInput/AdminInput";
import "./app.scss";
import AddSubj from "./components/addSubj/AddSubj";
import { useData } from "./context";
import Login from "./components/login/Login";
import Search from "./components/home/Home";
import Admin from "./components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import SearchedResult from "./components/searchedresult/Searched";

function App() {
  const { data } = useData();

  return (
    <div className="App">
      <TopBar />
      <div className="others">
        <Routes>
          <Route path="/">
            <Route index element={<Admin />} />
            <Route path="search" element={<Search />} />
            <Route path="searchresult" element={<SearchedResult />} />
          </Route>
        </Routes>
      </div>
      <div className="popups">
        <AddSubj />
        <PopupMessage />
      </div>
    </div>
  );
}

export default App;
