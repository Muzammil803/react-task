import AppData from "./appdata";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {UserData} from './components/config/data.js' 

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AppData/>} />
    <Route path="/user" element={<UserData/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
