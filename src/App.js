import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import SectionVariants from './components/Section/SectionVariants';
import SectionTrending from './components/Section/SectionTrending';

const App = () => {
  
  return (
    <div className='h-screen w-full relative'>
      <Header />
      <Jumbotron />
      <SectionVariants />
      <SectionTrending />
    </div>
  );
}

export default App;
