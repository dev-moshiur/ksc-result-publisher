import TopBar from "./components/topBar/TopBar";
import PopupMessage from "./components/popupMessage/PopupMessage";


import "./app.scss";
import AddSubj from "./components/addSubj/AddSubj";
import { useData } from "./context";

import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import SearchedResult from "./components/searchedresult/Searched";
import Footer from "./components/footer/Footer";
import Contact from './pages/contact/Contact'
import Faq from './pages/faq/Faq'
function App() {
  const { data } = useData();

  return (
    <div className="App">
      <TopBar />
      <div className="others">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="searchresult" element={<SearchedResult />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </div>
      <Footer/>
      <div className="popups">
        <AddSubj />
        <PopupMessage />
      </div>
    </div>
  );
}

export default App;
