import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createContext } from 'react';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeadFoot from './HeadFoot';
import Api from './Components/Api';
import Card from './Components/Card';
import Count from './Components/Count';
import Home from './Components/Home';
import Qr from './Components/Qrcode';
import Nopage from './Components/Nopage';
import { Useeff1 } from './Components/Useeff1';
import { Bmi } from './Components/Bmi';
import { Currency } from './Components/Currency';
import { Clock } from './Components/Clock';
import { Password } from './Components/Password';
import { Calender } from './Components/Calender';
import UseReducer1 from './Components/UseReducer1';
import UseReducer2 from './Components/UseReducer2';
import { Useeff2 } from './Components/Useeff2';
import { Useref1 } from './Components/Useref1';
import { CustomHook1 } from './Components/CustomHook1';
import { Useref2 } from './Components/Useref2';
import { Testing } from './Components/Testing';
import { CustomHook2 } from './Components/CustomHook2';
import { CustomHook3 } from './Components/CustomHook3';
import ParentComponent from './Components/Callback';



export const indexContext = createContext();

const App = () => {
  const [allData, setAllData] = useState({count:0});
  const ind = "Iam from Index";
  return (
    <indexContext.Provider value={{...allData,setAllData,ind}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeadFoot />}>
            <Route index element={<Home />} />
            <Route path="card" element={<Card />} />
            <Route path="qr" element={<Qr />} />
            <Route path="count" element={<Count />} />
            <Route path="api" element={<Api />} />
            <Route path="useeff1" element={<Useeff1 />} />
            <Route path="useeff2" element={<Useeff2 />} />
            <Route path="bmi" element={<Bmi />} />
            <Route path="currency" element={<Currency />} />
            <Route path="clock" element={<Clock />} />
            <Route path="password" element={<Password />} />
            <Route path="calender" element={<Calender />} />
            <Route path="usered1" element={<UseReducer1 />} />
            <Route path="usered2" element={<UseReducer2 />} />
            <Route path="useref1" element={<Useref1 />} />
            <Route path="useref2" element={<Useref2 />} />
            <Route path="testing" element={<Testing />} />
            <Route path="customhook1" element={<CustomHook1 />} />
            <Route path="customhook2" element={<CustomHook2 />} />
            <Route path="customhook3" element={<CustomHook3 />} />
            <Route path="callback" element={<ParentComponent />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </indexContext.Provider>
  );
}
export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();