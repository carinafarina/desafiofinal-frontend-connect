import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './globalStyles.scss'
import Paginainicial from './pages/paginaInicial/Paginainicial'
import Doacao from "./pages/doacao/Doacao"
import Voluntariado from "./pages/voluntariado/Voluntariado"
import Mentoria from "./pages/mentoria/Mentoria"
import Eventospalestras from "./pages/eventosPalestras/Eventospalestras"
import Usuario from "./pages/usuario/Usuario"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    
   <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Paginainicial />}/>
      <Route path='/doacao' element={<Doacao />}/>
      <Route path='/voluntariado' element={<Voluntariado />}/>
      <Route path='/mentoria' element={<Mentoria />}/>
      <Route path='/eventosPalestras' element={<Eventospalestras />}/>      
      <Route path='/usuario' element={<Usuario />}/>  
     </Routes>
     <Footer/>
   </BrowserRouter>

  )
}
