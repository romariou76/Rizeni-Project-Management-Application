import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Todo from "./components/Todo";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        {/* <Login/> */}
        {/* <Todo /> */}
        {/* <Menu /> */}
        {/* <Register/> */}

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
