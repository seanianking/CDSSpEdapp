import React from 'react';
import './App.css';
import MasterForm from './components/MasterForm'
import Header from './components/Header'
import IEPSection from './components/formComponents/IEP/IEPSection';

function App() {


  return (
    <section className='hero is-info is-bold is-fullheight'>
      <div className='box my-5 mx-5'>
        <Header/>
        <MasterForm />
        <IEPSection/>
      </div>
    </section>
  );
}

export default App;
