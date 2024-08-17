import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Celulares from './pages/Celulares';
import Acessorios from './pages/Acessorios';
import Cart from './pages/Cart';

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/celulares" element={<Celulares />} />
            <Route path="/acessorios" element={<Acessorios />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;