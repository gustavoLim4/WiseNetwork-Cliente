import { Box } from "@mui/material"
import { NavBar } from "./components/NavBar/NavBar"
import { Banner } from "./pages/Banner/Banner"
import { Sobre } from "./pages/Sobre/Sobre"
import { ConteudoServico } from "./pages/ConteudoServico/ConteudoServico"
import { Catalogo } from "./pages/Catalogo/Catalogo"
import { Emergencia } from "./pages/Emergencia/Emergencia"
import { Autorizadas } from "./pages/Atualizados/Autorizadas"
import Avaliacoes from "./pages/Avaliacoes/Avalicoes"
import { Contato } from "./pages/Contato/Contato"
import { Footer } from "./components/Footer/Footer"


export const App = () => {
  return (
    <Box>
      <NavBar />
      <Box component="main">
        <Banner />
        <Sobre />
        <ConteudoServico />
        <Catalogo />
        <Autorizadas />
        <Emergencia />
        <Avaliacoes />
        <Contato />
        <Footer />
      </Box>
    </Box>
  )
}

