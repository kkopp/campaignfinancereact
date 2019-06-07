import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import BackgroundImage from './components/BackgroundImage';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <NavBar />
      <SearchBar />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
