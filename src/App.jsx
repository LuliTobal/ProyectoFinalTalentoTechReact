import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Alacena from './paginas/Alacena';
import TusRecetas from './paginas/TusRecetas';
import Listas from './paginas/Listas';
import SobreNosotros from './paginas/SobreNos';
import Contacto from './paginas/Contacto';
import Recetario from './paginas/Recetario';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import LogIn from './paginas/LogIn';
import RutaProtegida from './componentes/RutaProtegida';
import RecetasCategorias from './paginas/RecetasCategorias';

import { RecetasProvider } from './contextos/RecetasContex';
import { AuthProvider } from './contextos/AuthContext';
import { RecetasPropiasProvider } from './contextos/RecetasPropiasContext';
import { RecetarioProvider } from './contextos/RecetarioContex';

function App() {

  return (
    <div>
      <AuthProvider>
        <RecetasProvider>
        <RecetasPropiasProvider>
        <RecetarioProvider>
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
                <Route path='/lista' element={ <RutaProtegida><Recetario/></RutaProtegida> } />
                <Route path='/recetasCategorias/:tituloCat' element={ <RecetasCategorias/> } /> 
              </Routes>
              <Footer />
            </div>
          </Router>
        </RecetarioProvider>
        </RecetasPropiasProvider>
        </RecetasProvider>
        
      </AuthProvider>
    </div>
  );
};

export default App;
