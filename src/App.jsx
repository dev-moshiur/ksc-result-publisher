import TopBar from "./components/topBar/TopBar";

import "./app.scss";

import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import SearchedResult from "./components/searchedresult/Searched";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
function App() {
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
      <Footer />
    </div>
  );
}

export default App;
