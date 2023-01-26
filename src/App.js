import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

/* Componentes de Layout */
import Navbar from "./components/layout/Navbar"
import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"

/* Componentes de página */
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import NewProject from "./components/pages/NewProject"
import Project from "./components/pages/Project"
import Projects from "./components/pages/Projects"

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-heigth">
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
