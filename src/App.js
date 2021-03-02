import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
