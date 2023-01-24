import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import { useLayoutEffect } from 'react';
import Home from './pages/home.js';
import Account from './pages/account.js';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/account' element={<Account/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
