import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
