
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import gobLogo from './images/gob_logo.png';

function NavBar (){
    return (
    <Container fluid className="header-navbar-container">
        <Row className="header-navbar-row">
            <Navbar collapseOnSelect expand="sm" variant='light'>
                <Col md={4} className="gob-logo-container"><img className="gob-logo" src={gobLogo} alt="Get on Board"/></Col>
                <Col md={8}>
                    <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="me-auto menu-container">
                            <Nav.Link className="menu-item" href="#">HOME</Nav.Link>
                            <Nav.Link className="menu-item" href="#">PRODUCTOS</Nav.Link>
                            <Nav.Link className="menu-item" href="#">NOSOTROS</Nav.Link>
                           <Nav.Link className="menu-item" href="#">CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Col>
            </Navbar>
        </Row>
    </Container>
    );
}

export default NavBar;