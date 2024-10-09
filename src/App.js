// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from './Components/Footer';
// import Login from './Components/Login';
import LoginNew from "./Components/LoginNew";
import NavBar from "./Components/NavBar";
import UploadFiles from "./Components/UploadFiles";
import Footer from "./Components/Footer";
import UserData from "./Components/UserData";
// import TopArrow from "./Components/TopArrow";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login/> */}
      {/* <LoginNew /> */}

      <Routes>
        <Route path="/login" element={<LoginNew />} />
        <Route path="/upload" element={<UploadFiles />} />
        <Route path="/user-data" element={<UserData/>}/>
      </Routes>
      {/* <TopArrow/> */}
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
