import Navbar from 'partials/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from 'Theme';
import { createGlobalStyle } from 'styled-components';
import { Home, About, Product, Upload, Dashboard } from 'pages';

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
