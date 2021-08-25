import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';

import GlobalStyles from './helpers/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
