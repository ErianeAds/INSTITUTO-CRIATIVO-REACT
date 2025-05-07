import { Routes, Route } from "react-router-dom";
import { Seao } from "./components/Seao/";
//import { Home } from "./pages/Seao";
import { Sobre } from "./pages/Sobre";
import { Colaboradores } from "./pages/Colaboradores";
import { ImpactoSocial } from "./pages/ImpactoSocial";
import { Marcas } from "./pages/Marcas";
import { Segmento } from "./pages/Segmento";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Seao />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/impacto-social" element={<ImpactoSocial />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/segmento" element={<Segmento />} />
      
    </Routes>
  );
};

export default App;
