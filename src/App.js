import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import React from "react";
import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap';
import Topnav from './layout/TopNav';
import Dashboard from './pages/admin/Dashboard';
import Sidenavbar from './layout/SideNavbar';
import '../src/assets/css/common.css'
import Employees from './pages/admin/employee/Employees';

function App() {

  return (
    <>
      <Topnav />
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidenavbar />
        </Col>
        <Col md={10}>
        <Container style={{ marginTop: '5em' }}>
              <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/admin/dashboard" element={<Dashboard/>} exact />
                <Route path="/home" element={<Home/>} exact />
                <Route path="/admin/employees" element={<Employees/>} exact />
              </Routes>
            </Container>
        </Col>
      </Row>
    </Container>

     
    </>
  );
}

export default App;
