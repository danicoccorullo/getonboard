import {Container,Row,Col} from 'react-bootstrap';

function TopBar(){
    return(
        <Container fluid className="container-top-bar">
            <Row>
                <Col>ENVÍO GRATIS A PARTIR DE $5000 (CABA/GBA)</Col>
            </Row>
        </Container>
    );
}

export default TopBar;