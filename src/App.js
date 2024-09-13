import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import SectionVariants from './components/Section/SectionVariants';
import SectionTrending from './components/Section/SectionTrending';
import SectionSay from './components/Section/SectionSay';
import SectionBlog from './components/Section/SectionBlog';

const App = () => {
  
  return (
    <div className='h-screen w-full relative'>
      <Header />
      <Jumbotron />
      <SectionVariants />
      <SectionTrending />
      <SectionSay />
      <SectionBlog />
    </div>
  );
}

export default App;
