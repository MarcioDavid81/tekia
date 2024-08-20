import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Celulares from './pages/Celulares';
import Acessorios from './pages/Acessorios';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';


function AppRoutes() {

    

    return (
        <BrowserRouter>
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/celulares" element={<Celulares />} />
            <Route path="/acessorios" element={<Acessorios />} />
            <Route path="/cart" element={<Cart />} />            
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />          
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;