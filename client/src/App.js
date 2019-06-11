import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MayorContrib from './pages/MayorContrib';
import MayorExpend from './pages/MayorExpend';
import MayorInKind from './pages/MayorInKind';
import About from './pages/About';
import Resources from './pages/Resources';
import TakeQuiz from './pages/TakeQuiz';

function App () {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contributions" component={MayorContrib} />
          <Route exact path="/Expenditures" component={MayorExpend} />
          <Route exact path="/InKind" component={MayorInKind} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Quiz" component={TakeQuiz} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
