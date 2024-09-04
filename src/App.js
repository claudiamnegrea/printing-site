import classes from './App.module.css';
import Header from './components/header';
import Colors from './pages/colors';
import Home from './pages/home-page';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import Cart from './pages/cart';
import Footer from './components/footer';
import Product from './pages/product';
import BackToTop from './components/back-to-top';

function App() {
  return (
    <div className={classes.setup}>
      <Header />
      <div className={classes.main}>
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route exact path='/colors' element={<Colors />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/product/:id' element={<Product />} />
      </Routes>
      </div>
      <BackToTop />
      <Footer />

    </div>
  );
}

export default App;
