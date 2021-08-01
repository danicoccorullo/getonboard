import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
