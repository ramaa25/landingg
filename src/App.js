import React from 'react';
import { Search } from 'lucide-react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Section from './components/Section/Section';
import SortDropdown from './components/Section/SortBy';
import VariantList from './components/Section/VariantList';
import VariantImg from './components/Section/VariantImg';
import VariantMore from './components/Section/VariantMore';

function App() {
  const [variants, setVariants] = React.useState('EDT');
  
  return (
    <div className='h-[85vh] w-full'>
      <Header />
      <Jumbotron />
      <Section 
      header={
        <>
          <div className="grid h-full place-self-center">
            <h1 className='text-5xl font-bold'>Recipes</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="border-2 border-secondary rounded-full hidden md:flex gap-2 px-5 p-2">
              <Search className='text-secondary'/>
              <input type="text" className='bg-transparent border-transparent outline-none placeholder:text-sm' placeholder='Search variants and more...'/>
            </div>
            <div className="">
              <SortDropdown />
            </div>
          </div>
        </>
      }>
        <div className="w-full py-5 grid md:grid-cols-[1fr_2fr_1fr] gap-5 grid-flow-row">
          <VariantList variants={variants} setVariants={setVariants} />
          <VariantImg variants={variants} />
          <VariantMore variants={variants} />
        </div>
      </Section>
    </div>
  );
}

export default App;
