import { Switch, Route } from 'react-router';

import './App.css';

import HomePage from './pages/Home/Homepage';
import ShopPage from './pages/Shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
