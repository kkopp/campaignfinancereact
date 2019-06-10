import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import MayorContrib from './pages/MayorContrib';
import MayorExpend from './pages/MayorExpend';
import MayorInKind from './pages/MayorInKind';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/Contributions" component={MayorContrib} />
          <Route exact path="/Expenditures" component={MayorExpend} />
          <Route exact path="/InKind" component={MayorInKind} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
