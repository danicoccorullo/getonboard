import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <NavBar/>
        <Switch>
        <Route exact path="/"><ItemListContainer greeting="Bienvenido a nuestra tienda"/></Route>
        <Route exact path="/productos"><ItemListContainer greeting="Nuestros Productos"/></Route>
        <Route exact path="/category/:category"><ItemListContainer/></Route>
        <Route exact path="/item/:id"><ItemDetailContainer /></Route>
        <Route exact path="/cart"><Cart /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
