import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GlobalStyle } from "./components/styles/Global"
import { Logo } from "./components/Logo"
function App() {

  return (
    <>
    <GlobalStyle />
    <Logo />
    <Header />
    <Outlet />
    </>
  )
}

export default App
