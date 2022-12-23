import Home from "./components/home/Home";
import Marksheet from "./components/marksheet/Marksheet";
import TopBar from "./components/topBar/TopBar";
import PopupMessage from './components/popupMessage/PopupMessage'
import { Routes, Route } from "react-router-dom";
import Context from "./context";
import AdminInput from "./components/adminInput/AdminInput";
import './app.scss'
import AddSubj from "./components/addSubj/AddSubj";

function App() {
  return (
    
    
    <div className="App"><Context>
      <TopBar/>

      <div className="others">
      <AdminInput/>
      <Routes>
        <Route path="/" >
            <Route index element={<Home/>} />
            {/* <Route path="admin" element={<AdminInput/>}/> */}
        </Route>
      </Routes>
      </div>
      <div className="popups">
        <AddSubj/>
        <PopupMessage/>
        
      </div>
  


      
      </Context>
    </div>
  
  );
}

export default App;
