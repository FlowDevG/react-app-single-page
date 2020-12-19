import React from 'react';
import {Navbar, Footer} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './pages/globalStyle';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/Signup';
import ScrollToTop from './components/ScollToTop';

function App() {
  return (
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
