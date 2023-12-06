import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main, Notification, Account, Product} from './fragment';
import {Home, NoPage, SalesProduct} from './screen'

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
        <Route exact path="/home/sales/:id" Component={SalesProduct} />
      </Routes>
    </Router>
  );
};

export default App;
