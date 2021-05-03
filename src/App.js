import React, {useState} from 'react';

import Header from './components/Header';
import Porfolio from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import About from './components/About';

import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage){
      case 'About':
        return <About />;
      case 'Projects':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      
    }
  };

  return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
          {renderPage(currentPage)}
        </main>
        <Footer />
    </div>
  );
}

export default App;
