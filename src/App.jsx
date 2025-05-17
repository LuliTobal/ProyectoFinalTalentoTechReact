import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Home from './paginas/Home';
import Alacena from './paginas/Alacena';
import TusRecetas from './paginas/TusRecetas';
import Lista from './paginas/Lista';
import SobreNosotros from './paginas/SobreNos';
import Contacto from './paginas/Contacto';

function App() {

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='alacena' element={ <Alacena/> } />
            <Route path='recetas' element={ <TusRecetas/> } />
            <Route path='listas' element={ <Lista/> } />
            <Route path='nosotros' element={ <SobreNosotros/> } />
            <Route path='contacto' element={ <Contacto/> } />
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App
