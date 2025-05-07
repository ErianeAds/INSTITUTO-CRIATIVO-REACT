import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Sobre } from "./pages/Sobre";
import { Colaboradores } from "./pages/Colaboradores";
import { ImpactoSocial } from "./pages/ImpactoSocial";
import { Marcas } from "./pages/Marcas";
import { Segmento } from "./pages/Segmento";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/impacto-social" element={<ImpactoSocial />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/segmento" element={<Segmento />} />
      
    </Routes>
  );
};

export default App;
