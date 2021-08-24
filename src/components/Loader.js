import gifLoader from './images/gob-pl-loader.gif'
import {Col} from 'react-bootstrap';

function Loader(){
    return(
        <Col md={{ span: 4, offset: 4 }} className="loader-container">
            <img alt="loader" src={gifLoader} />
        </Col>
    )
}

export default Loader;