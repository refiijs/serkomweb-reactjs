import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom"; // useLocation for active state
import "./navbar.css";
import logo from "../../assets/img/logo-telu.png";

function NavbarTop() {
  const location = useLocation(); // Get the current route

  return (
    <>
      <Navbar bg="custom" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo Tel-U" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Beasiswa
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/hasil"
              className={location.pathname === "/hasil" ? "active" : ""}
            >
              Hasil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/grafik"
              className={location.pathname === "/grafik" ? "active" : ""}
            >
              Grafik
            </Nav.Link>

            <Nav.Link as={Link} to="/daftar-smb" className="btn btn-danger">
              Daftar SMB
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
