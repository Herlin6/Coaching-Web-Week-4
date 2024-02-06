
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct';
import DetailProduct from './pages/DetailProduct';
import './pages/Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/products/:id' element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function Layout() {
  return (
    <div >
      <header>
        <Navbar expand="lg" className="navbar bg-dark bg-gradient fixed-top">
          <Container className="mx-4 gap-3">
            <Navbar.Brand href="/" className="navbar-brand text-light fs-1"><i className="bi bi-amazon"></i><span className="fs-6">W</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-3">
                <Nav.Link className="nav_link text-light fs-5 rounded" href="/"><div className="nav_font">Home</div></Nav.Link>
                <Nav.Link className="nav_link text-light fs-5 rounded" href="/products/"><div className="nav_font">Products</div></Nav.Link>
                <Nav.Link className="nav_link text-light fs-5 rounded"  href="https://github.com/Herlin6"><div className="nav_font">Github</div></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <div className="text-light d-flex justify-content-center gap-2 fs-5">
            <a className="text-light" href="https://www.instagram.com/herlindwi.06?igsh=MWJzbXFjNmV3eDVwYw=="><i className="footer_icon bi bi-instagram"></i></a>
            <a className="text-light" href="https://github.com/Herlin6"><i className="footer_icon bi bi-github"></i></a>
            <a className="text-light" href="https://www.facebook.com/"><i className="footer_icon bi bi-facebook"></i></a>
          </div>
          <div className="text-light d-flex justify-content-center">@2024</div>
        </div>
      </footer>
    </div>
  )
}