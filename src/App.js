import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header'
import Content from './Content';
import * as address from './linksdata';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Content v={address.link_1} /> }></Route>
        <Route path ='/1' element={<Content v={address.link_1} /> }></Route>
        <Route path ='/2' element={<Content v={address.link_2} /> }></Route>
        <Route path ='/3' element={<Content v={address.link_3} /> }></Route>
        <Route path ='/4' element={<Content v={address.link_4} /> }></Route>
        <Route path ='/5' element={<Content v={address.link_5} /> }></Route>
        <Route path ='/6' element={<Content v={address.link_6} /> }></Route>
        <Route path ='/7' element={<Content v={address.link_7} /> }></Route>
        <Route path ='/8' element={<Content v={address.link_8} /> }></Route>
        <Route path ='/9' element={<Content v={address.link_9} /> }></Route>
        <Route path ='/10' element={<Content v={address.link_10} /> }></Route>
        <Route path ='/11' element={<Content v={address.link_11} /> }></Route>
        <Route path ='/12' element={<Content v={address.link_12} /> }></Route>
        <Route path ='/13' element={<Content v={address.link_13} /> }></Route>
        <Route path ='/14' element={<Content v={address.link_14} /> }></Route>
        <Route path ='/15' element={<Content v={address.link_15} /> }></Route>
        <Route path ='/16' element={<Content v={address.link_16} /> }></Route>
        <Route path ='/17' element={<Content v={address.link_17} /> }></Route>
        <Route path ='/18' element={<Content v={address.link_18} /> }></Route>
        <Route path ='/19' element={<Content v={address.link_19} /> }></Route>
        <Route path ='/20' element={<Content v={address.link_20} /> }></Route>
        <Route path ='/21' element={<Content v={address.link_21} /> }></Route>
        <Route path ='/22' element={<Content v={address.link_22} /> }></Route>
        <Route path ='/23' element={<Content v={address.link_23} /> }></Route>
        <Route path ='/24' element={<Content v={address.link_24} /> }></Route>
        <Route path ='/25' element={<Content v={address.link_25} /> }></Route>
        <Route path ='/26' element={<Content v={address.link_26} /> }></Route>
        <Route path ='/27' element={<Content v={address.link_27} /> }></Route>
        <Route path ='/28' element={<Content v={address.link_28} /> }></Route>
        <Route path ='/29' element={<Content v={address.link_29} /> }></Route>
        <Route path ='/30' element={<Content v={address.link_30} /> }></Route>
        <Route path ='/31' element={<Content v={address.link_31} /> }></Route>
        <Route path ='/32' element={<Content v={address.link_32} /> }></Route>
        <Route path ='/33' element={<Content v={address.link_33} /> }></Route>
        <Route path ='/34' element={<Content v={address.link_34} /> }></Route>
        <Route path ='/35' element={<Content v={address.link_35} /> }></Route>
        <Route path ='/36' element={<Content v={address.link_36} /> }></Route>
        <Route path ='/37' element={<Content v={address.link_37} /> }></Route>
        <Route path ='/38' element={<Content v={address.link_38} /> }></Route>
        <Route path ='/39' element={<Content v={address.link_39} /> }></Route>
        <Route path ='/40' element={<Content v={address.link_40} /> }></Route>
        <Route path ='*' element={<Content v={address.link_1} /> }></Route>

      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
