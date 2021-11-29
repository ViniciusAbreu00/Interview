import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import './resetCss.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route index path='/home' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
  );