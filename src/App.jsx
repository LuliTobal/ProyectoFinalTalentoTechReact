import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Alacena from './paginas/Alacena';
import TusRecetas from './paginas/TusRecetas';
import Listas from './paginas/Listas';
import SobreNosotros from './paginas/SobreNos';
import Contacto from './paginas/Contacto';
import ListaActual from './paginas/ListaActual';
import Header from './componentes/Header';

function App() {

  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='alacena' element={ <Alacena/> } />
            <Route path='recetas' element={ <TusRecetas/> } />
            <Route path='listas' element={ <Listas/> } />
            <Route path='nosotros' element={ <SobreNosotros/> } />
            <Route path='contacto' element={ <Contacto/> } />
            <Route path='lista' element={ <ListaActual/> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
