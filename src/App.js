import "./styles.css";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function App() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand>
              <Link to="/">Moviestechandmore</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/Movies">Movies</Link>
              <Link to="/OTT">OTT</Link>
              <Link to="/Tech">Tech</Link>
              <Link to="/More">More</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
