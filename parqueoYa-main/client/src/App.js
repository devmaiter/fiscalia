import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Revista from "./components/Registro/Revista";
import Login from "./pages/login";
import AdminComponent from "./components/Admin"; 
import FuncionarioComponent from "./components/Funcionario"; 

function App() {
  const userRole = localStorage.getItem('userRole'); // Asume que el rol del usuario se almacena en el almacenamiento local

  return (
    <Router>
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/Login" exact render={(props) => <Login />} />
      <Route path="/home" render={(props) => userRole === 'admin' ? <FuncionarioComponent/> : <AdminComponent />} />
      <Route path="/ubicacion" render={(props) => <Ubicacion/>} />
      <Route path="/revista" render={(props) => <Revista/>} />
      <Redirect from="/" to="/Login" />
    </Router>
  );
}

export default App;