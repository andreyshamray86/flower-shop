import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkAuth } from './redux/actions/authActions';
import { getFlowers } from './redux/actions/flowersActions';
import { getGifts } from './redux/actions/giftsActions';

import { Header, Footer, ItemDetailed, Logout } from './components'
import { Home, Flowers, Gifts, Card, Cart, LoginPage } from './pages';

import GlobalStyles from './helpers/GlobalStyles';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFlowers());
    dispatch(getGifts());
  });

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/flowers/:id' component={ItemDetailed}/>
        <Route path='/flowers' component={Flowers}/>
        <Route path='/gifts/:id' component={ItemDetailed}/>
        <Route path='/gifts' component={Gifts}/>
        <Route path='/card' component={Card}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/register' component={LoginPage}/>
        <Route path='/logout' component={Logout}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
