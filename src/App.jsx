import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Alacena from './paginas/Alacena';
import TusRecetas from './paginas/TusRecetas';
import Listas from './paginas/Listas';
import SobreNosotros from './paginas/SobreNos';
import Contacto from './paginas/Contacto';
import ListaActual from './paginas/ListaActual';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import LogIn from './paginas/LogIn';
import RutaProtegida from './componentes/RutaProtegida';

function App() {

  return (
    <div>
      <Router basename="/ProyectoFinalTalentoTechReact">
        <div>
          <Header />
          <Routes>
            <Route path='/login' element={ <LogIn/> } />
            <Route path='/' element={ <SobreNosotros/> } />
            <Route path='/contacto' element={ <Contacto/> } />

            <Route path='/home' element={ <RutaProtegida><Home/></RutaProtegida> } />
            <Route path='/alacena' element={ <RutaProtegida><Alacena/></RutaProtegida> } />
            <Route path='/recetas' element={ <RutaProtegida><TusRecetas/></RutaProtegida> } />
            <Route path='/listas' element={ <RutaProtegida><Listas/></RutaProtegida> } />            
            <Route path='/lista' element={ <RutaProtegida><ListaActual/></RutaProtegida> } />  
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
