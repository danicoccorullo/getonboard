
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import './css/NavBar.css';
import gobLogo from './images/gob_logo.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function NavBar (){
    return (
    <Container fluid className="header-navbar-container">
        <Row className="header-navbar-row">
            <Navbar collapseOnSelect expand="sm" variant='light' className="navbar-container">
                <Col md={3} xs={12} className="gob-logo-container">
                    <Link to="/">
                        <img className="gob-logo" src={gobLogo} alt="Get on Board"/>
                    </Link>
                </Col>
                <Col md={9} xs={12}>
                    <Container>
                        <Row>
                            <Col md={11} xs={11} class="navbar-menu">
                                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                                <Navbar.Collapse id='responsive-navbar-nav'>
                                    <Nav className="me-auto menu-container">
                                        <Nav.Item>
                                            <Nav.Link className="menu-item" as={Link} to="/">HOME</Nav.Link>
                                            <Nav.Link className="menu-item" as={Link} to="/productos">PRODUCTOS</Nav.Link>
                                            <Nav.Link className="menu-item" as={Link} to="/category/viaje">VIAJE</Nav.Link>
                                            <Nav.Link className="menu-item" as={Link} to="/category/valija">VALIJA</Nav.Link>
                                            <Nav.Link className="menu-item" as={Link} to="/category/celular">CELULAR</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Col>
                            <Col md={1} xs={1} className="navbar-icons">
                                <CartWidget />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Navbar>
        </Row>
    </Container>
    );
}

export default NavBar;