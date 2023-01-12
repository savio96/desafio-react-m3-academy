import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./navigationBar.module.scss";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles["cursosNav"]} href="#cursos">
              CURSOS
            </Nav.Link>
            <Nav.Link className={styles["saibaNav"]} href="#saibamais">
              SAIBA MAIS
            </Nav.Link>
            <Nav.Link
              className={styles["instituicionaisNav"]}
              href="#institucionais"
            >
              INSTITUCIONAIS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavigationBar };
