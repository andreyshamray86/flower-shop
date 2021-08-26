import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Flowers from './pages/Flowers/Flowers';
import Gifts from './pages/Gifts/Gifts';
import Card from './pages/Card/Card';
import Cart from './pages/Cart/Cart';
import LoginPage from './pages/Login/LoginPage';

import GlobalStyles from './helpers/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/flowers' component={Flowers}/>
        <Route path='/gifts' component={Gifts}/>
        <Route path='/card' component={Card}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/register' component={LoginPage}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
