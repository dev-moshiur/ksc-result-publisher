

import TopBar from "./components/topBar/TopBar";
import PopupMessage from './components/popupMessage/PopupMessage'


import AdminInput from "./components/adminInput/AdminInput";
import './app.scss'
import AddSubj from "./components/addSubj/AddSubj";
import {useData} from './context'
import Login from "./components/login/Login";

function App() {
  const {data} = useData()
  
  return (
    
    
    <div className="App">
      
      <TopBar/>

      <div className="others">
      {!data.isAdmin && <Login/>}
       <AdminInput/>
      
      </div>
      <div className="popups">
        <AddSubj/>
        <PopupMessage/>
        
      </div>
  


      
      
    </div>
  
  );
}

export default App;
