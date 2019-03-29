import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Counter from '../../components/Counter';


const Main = () => (
  <div className="App">
    <Header />
    <div className="content">React Starting point boilerplate</div>
    <Counter />
    <Footer />
  </div>
);

export default Main;
