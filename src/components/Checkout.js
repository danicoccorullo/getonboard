import {Container,Row,Col,Button,Form} from 'react-bootstrap';
import {CartContext} from './context/CartContext';
import {useContext, useState, useEffect, React} from 'react';
import { getData } from './firebase';
import { Timestamp, collection, addDoc } from "firebase/firestore";
import OrderBrief from './OrderBrief';
import './css/Checkout.css';

function Checkout(){

    const { webCart, setWebCart, setCartTotalItems, cartTotalPrice, setCartTotalPrice} = useContext(CartContext);
    const[orderMessage, setOrderMessage] = useState("");
    const [buyerName, setBuyerName] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [buyerMail, setBuyerMail] = useState("");
    const [buyerConfirmMail, setBuyerConfirmMail] = useState("");
    const [mailMessage, setMailMessage] = useState("");

    const formFields = [
        {title: "NOMBRE Y APELLIDO *", value: buyerName, type: "text", handler: setBuyerName},
        {title: "TELÉFONO *", value: buyerPhone, type: "text", handler: setBuyerPhone },
        {title: "MAIL *", value: buyerMail, type: "email", handler: setBuyerMail},
        {title: "INGRESE NUEVAMENTE SU MAIL *", value: buyerConfirmMail, type: "email", handler: setBuyerConfirmMail}
    ]

    const isDisable = buyerName==='' || buyerPhone==='' || buyerMail==='' || buyerConfirmMail==='' || cartTotalPrice===0;
    
    async function addOrder() {
    const userInfo = {"name":buyerName,"phone":buyerPhone,"email":buyerMail}
    const newOrder = await addDoc(collection(getData(),'orders'),  {
        buyer: userInfo,
        items: webCart,
        date: Timestamp.fromDate(new Date()),
        total: cartTotalPrice
    });
    setWebCart([]);
    setCartTotalPrice(0);
    setCartTotalItems(0);
    setBuyerName("");
    setBuyerPhone("");
    setBuyerMail("");
    setBuyerConfirmMail("");
    setOrderMessage("Su orden "+newOrder.id+" ha sido generada con éxito.");
    }

    useEffect (() => {
        if (buyerMail !== buyerConfirmMail) {
            setMailMessage("Las cuentas de mail ingresadas deben ser iguales.");  
        } else {
            setMailMessage("");
        }
    }, [buyerMail, buyerConfirmMail])

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
                    {formFields.map (field => (
                    <Form.Group className="mb-3">
                        <Form.Label>{field.title}</Form.Label>
                        <Form.Control type={field.type} value={field.value} onChange={e => field.handler(e.target.value)}/>
                    </Form.Group>
                    ))}
                    <div className="email-error-message">{mailMessage}</div>
                </Form>
                </Col>
                <Col md={6} className="purchase-info">
                <div>
                    <OrderBrief canRemove={false} />
                <Row>
                    <Col md={12} className="cartActionsContainer">
                        <div><h3>TOTAL: ${cartTotalPrice} </h3></div>
                        <Button disabled={isDisable} onClick={addOrder} variant="light" className="button-add-cart">Finalizar Compra</Button>
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