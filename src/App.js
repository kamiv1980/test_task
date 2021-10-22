import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Navigator } from './navigator';
import { NavBar } from './components';
import { selectorIsAuth } from './services/users/selectors';

function App() {
  const isAuth = useSelector(selectorIsAuth);

  return (
    <BrowserRouter>
      <NavBar isAuth={isAuth} />
      <Navigator isAuth={isAuth} />
    </BrowserRouter>
  );
}

export default App;
