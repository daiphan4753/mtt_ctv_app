import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {Product, Main, Notification, Account} from './fragment';
import {Home, NoPage} from './screen'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} Component={Home} />
        <Route exact path="/product" Component={Product} />
        <Route exact path="/home" Component={Main} />
        <Route exact path="/notification" Component={Notification} />
        <Route exact path="/account" Component={Account} />
        <Route exact path="*" Component={NoPage} />
      </Routes>
    </Router>
  );
};

export default App;
