import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { auth } from './services/firebase';
import { getCurrentUser } from './redux/actions/authActions';

import { Header, Footer, ItemDetailed } from './components'
import { Home, Flowers, Gifts, Card, Cart, LoginPage } from './pages';

import GlobalStyles from './helpers/GlobalStyles';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      dispatch(getCurrentUser(user));
    })
  }, [dispatch]);

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/flowers/rose' component={ItemDetailed}/>
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
