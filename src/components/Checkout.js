import {Container,Row,Col,Button,Form} from 'react-bootstrap';
import {CartContext} from './context/CartContext';
import {useContext, useState, React} from 'react';
import { getData } from './firebase';
import { Timestamp, collection, addDoc } from "firebase/firestore";

function Checkout(){

    const { webCart, cartTotalPrice} = useContext(CartContext);
    const[orderMessage, setOrderMessage] = useState("");
    const [buyerName, setBuyerName] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [buyerMail, setBuyerMail] = useState("");
    
    async function addOrder() {

    const userInfo = {"name":buyerName,"phone":buyerPhone,"email":buyerMail}
            
    const newOrder = await addDoc(collection(getData(),'orders'),  {
        buyer: userInfo,
        items: webCart,
        date: Timestamp.fromDate(new Date()),
        total: cartTotalPrice
    });

    setOrderMessage("Su orden "+newOrder.id+" ha sido generada con éxito.");
    }

    return (
        <Container className="home-container">
            <Row>
                <Col md={12}>
                    <h1>Finalizar Compra</h1>
                </Col>
            </Row>
            <Row className="checkoutInfoContainer">
                <Col md={6} className="client-info">
                <Form className="cartInfoContainer">
                <h3 className="title-clientes-datos">DATOS DEL CLIENTE</h3>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>NOMBRE Y APELLIDO</Form.Label>
                        <Form.Control type="text" onChange={e => setBuyerName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUsePhone">
                        <Form.Label>TELÉFONO</Form.Label>
                        <Form.Control type="text" onChange={e => setBuyerPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type="email" onChange={e => setBuyerMail(e.target.value)}/>
                    </Form.Group>
                </Form>
                </Col>
                <Col md={6} className="purchase-info">
                <div>
                    <Row className="cartInfoContainer">
                    <Col md={4}><h3>NOMBRE</h3></Col>
                    <Col md={4}><h3>CANTIDAD</h3></Col>
                    <Col md={4}><h3>PRECIO TOTAL</h3></Col>
                    {webCart.map((cartProd) => (
                        <>
                        <Col md={4}><p>{cartProd.name}</p></Col>
                        <Col md={4}><p>{cartProd.qty}</p></Col>
                        <Col md={4}><p>${Number(cartProd.price)*Number(cartProd.qty)}</p></Col>
                        </>
                    ))}
                </Row>
                <Row>
                    <Col md={12} className="cartActionsContainer">
                        <div><h3>TOTAL: ${cartTotalPrice} </h3></div>
                        <Button onClick={addOrder} variant="light" className="button-add-cart">Finalizar Compra</Button>
                        <div className="order-message">{orderMessage}</div>
                    </Col>
                </Row>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Checkout;