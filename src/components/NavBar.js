
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import './css/NavBar.css';
import gobLogo from './images/gob_logo.png';
import CartWidget from './CartWidget';

function NavBar (){
    return (
    <Container fluid className="header-navbar-container">
        <Row className="header-navbar-row">
            <Navbar collapseOnSelect expand="sm" variant='light' className="navbar-container">
                <Col md={4} xs={12} className="gob-logo-container"><img className="gob-logo" src={gobLogo} alt="Get on Board"/></Col>
                <Col md={8} xs={12}>
                    <Container>
                        <Row>
                            <Col md={10} xs={10} class="navbar-menu">
                                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                                <Navbar.Collapse id='responsive-navbar-nav'>
                                    <Nav className="me-auto menu-container">
                                        <Nav.Link className="menu-item" href="#">HOME</Nav.Link>
                                        <Nav.Link className="menu-item" href="#">PRODUCTOS</Nav.Link>
                                        <Nav.Link className="menu-item" href="#">NOSOTROS</Nav.Link>
                                        <Nav.Link className="menu-item" href="#">CONTACTO</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Col>
                            <Col md={2} xs={2} className="navbar-icons">
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