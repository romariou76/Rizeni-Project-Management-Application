import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <header className="App-header">
       {/* <Login/> */}
       {/* <Todo /> */}
       <Menu />
      {/* <Register/> */}
       {/* <Dashboard /> */}
      </header>
    </div>
  );
}

export default App;
