import Navbar from 'partials/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from 'Theme';
import { createGlobalStyle } from 'styled-components';
import Home from 'pages/Home';
import About from 'pages/About';
import Product from 'pages/Product';
import Upload from 'pages/Upload';
import Dashboard from 'pages/Dashboard';

const routes = [Home, About, Product, Upload, Dashboard];

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Navbar links={routes.map(({ name }) => name)} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product-overview' element={<Product />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </Theme>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "Source Sans Pro", sans-serif;
  }
`;

export default App;
