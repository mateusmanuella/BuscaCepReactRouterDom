import { Routes, Route } from 'react-router-dom'
import Busca from './pages/Busca'
import Resultado from './pages/Resultado'
function App() {
  return (
    <Routes>
      {/* Tela inicial com formulário */}
      <Route path="/" element={<Busca />} />
      {/* Tela que exibe o endereço */}
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  )
}
export default App
