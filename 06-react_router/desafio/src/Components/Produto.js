import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import Head from './Head';

const Produto = () => {
  const [ produto, setProduto] = React.useState(null);
  const [ loading, setLoading] = React.useState(false);
  const [ error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect( () => {
    async function fetchProduto(url){
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setProduto(json)
      } catch (erro) {
        setError('Um erro ocorreu')
      }finally{
        setLoading(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto+" animeLeft"}>
      <Head title={`Produto ${produto.nome}`} description="Compre Produto" />
      <div>
        {produto.fotos.map( (foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h2>{produto.nome}</h2>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
