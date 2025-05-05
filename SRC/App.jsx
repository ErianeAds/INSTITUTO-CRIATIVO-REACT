import { Routes, Route } from "react-router-dom";
import { Seao } from "./screens/Seao";
import { Sobre } from "./components/Sobre";
import { Colaboradores } from "./components/Colaboradores";
import { ImpactoSocial } from "./components/ImpactoSocial";
import { Marcas } from "./components/Marcas";
import { Segmento } from "./components/Segmento";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Seao />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/impacto-social" element={<ImpactoSocial />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/segmento" element={<Segmento />} />
      
    </Routes>
  );
};

export default App;
