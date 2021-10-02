import logo from './logo.svg';
import './App.css';
import Home from './compnoents/Home/Home';
import Friends from './compnoents/Friends/Friends';
import About from './compnoents/About/About';
import NotFound from'./compnoents/NotFound/NotFound';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import Header from './compnoents/Header/Header';
import FriendDetail from './compnoents/FriendDetail/FriendDetail';
import Culture from './compnoents/Culture/Culture';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
           <About></About>
          </Route>
            <Route path="/friend/:friendId">
              <FriendDetail></FriendDetail>
            </Route>
            <Route path="/about/culture">
            <Culture></Culture>
            </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route exact="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
