
import NavBar from './Componentes/NavBar/NavBar.jsx';
import ItemsListContainer from './Componentes/ItemsListContainer/ItemsListContainer.jsx';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemsListContainer greeting="¡Bienvenidos a Mi Tienda!" />
    </div>
  );
};

export default App;

