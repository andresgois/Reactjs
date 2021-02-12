import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head title="Home" />
 
      <h3>Home</h3>
      <hr />
      <p>Página home</p>
      <Link to="sobre">Sobre</Link>
      {' '}|{' '}
      <Link to="produto/notebook">Notebook</Link>
      {' '}|{' '}
      <Link to="produto/smartphone">Smartphone</Link>
      
    </div>
  )
}

export default Home
