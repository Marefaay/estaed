import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/estaed-logo.png";
// import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar expand="lg" className="position-sticky top-0 z-5 bg-body-tertiary bg-light p-0 nav-bar">
      <Container>
      <Navbar.Brand href="/" id="logo">
          <img src={logo} className="img-fluid" style={{objectFit:"cover"}} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center  ">
            <Nav.Link href="#home" id="link" >الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="/user-data">إدخال البيانات</Nav.Link>
            <Nav.Link href="/login"><button id="login-btn">تسجيل دخول</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};
export default NavBar;
