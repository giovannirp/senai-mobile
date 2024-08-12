import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import "./app.css";
import Card from './components/Card';
import Banner from './components/banner';

function App() {

  return (
    <>
      <Header />
      <Card />
      <Banner titulo="Banner Principal" subTitulo="Lorem ipsum" />
    </>
  )
}

export default App
