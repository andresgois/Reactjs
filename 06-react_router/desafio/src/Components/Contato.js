import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/maquina.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato+" animeLeft"}>
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      
      <div>
        <h2>Entre em contato</h2>
        <ul className={styles.dados}>
          <li>teste@gmail.com</li>
          <li>(88) 3366-8965</li>
          <li>(88) 3366-8965</li>
          <li>Rua 13 de maio</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
