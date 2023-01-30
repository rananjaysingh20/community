import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useLayoutEffect } from 'react';
import Home from './pages/home.js';
import Account from './pages/account.js';
import Stories from "./pages/stories.js";
import POTD from "./pages/potd.js";
import Blogs from "./pages/blogs.js";
import Featured from "./pages/featured.js";
import Landing from "./pages/landing.js";

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
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/account' element={<Account/>}/>
          <Route exact path='/stories' element={<Stories/>}/>
          <Route exact path='/potd' element={<POTD/>}/>
          <Route exact path='/blogs' element={<Blogs/>}/>
          <Route exact path='/featured' element={<Featured/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
