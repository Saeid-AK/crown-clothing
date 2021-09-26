import { Switch, Route } from 'react-router';

import './App.css';

import HomePage from './pages/Home/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
