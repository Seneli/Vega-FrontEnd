import Navbar from 'partials/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from 'Theme';
import { createGlobalStyle } from 'styled-components';
import About from 'pages/About';
import Product from 'pages/Product';
import Upload from 'pages/Upload';
import Dashboard from 'pages/Dashboard';

const routes = ['About', 'Product', 'Upload', 'Dashboard'];

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Navbar links={routes.map((item) => item)} />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
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
