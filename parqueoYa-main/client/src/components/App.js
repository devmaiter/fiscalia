import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/login/LoginComponent';
import HomeComponent from './components/Home/HomeComponent';
import RegRevista from './components/Registro/RegRevista';  
import Reporte from './components/Reporte/Reporte';
import HomeLogin from './components/login/homelogin';
import Report from './Reporte/report';
import UserRegister from './components/login/registerComponent'
import { RoleProvider } from './components/role';
import './App.css'; // Import your CSS file here

function App() {
  return (
    <RoleProvider> {/* Envuelve todos tus componentes con el RoleProvider */}
      <>
        <Router>
            <Routes>
                <Route path="/login" element={<LoginComponent/>} />
                <Route path="/home" element={<HomeComponent/>} />
                <Route path="/turno" element={<Turno/>} />
                <Route path="/regRevista" element={<RegRevista/>} />
                <Route path="/ubicacion" element={<Ubicacion/>} />
                <Route path="/homeLogin" element={<HomeLogin/>} />
                <Route path="/register" element={<UserRegister/>} />
                <Route path="/report" element={<Report/>} />
            </Routes>
        </Router>
      </>
    </RoleProvider>
  );
}

export default App;