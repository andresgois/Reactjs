import React from 'react';


class Produtos extends React.Component {

  constructor(props) {
    super(props);
    // Não é reactiva
    this.teste = 'Teste dentro do construtor';
    // REATIVA
    this.state = {
      contar: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    //perfeito para fetch
    console.log('Aparece quando o componente é montado')
  }

  componentDidUpdate(){
    console.log('Sempre que atualizar')
  }

  componentWillUnmount(){
    console.log('Componente saiu da tela')
  }

  handleClick(){
    this.setState( (state) => ({contar: state.contar + 1}))
  }

  render() {
    return (
      <div>
        <h2> {this.props.titulo} </h2>
        <p>  {this.teste} </p>
        <p>  {this.state.contar} </p>
        <button onClick={ () => this.setState( (state) => ({contar: state.contar + 1}))}>
          Contar modo 1
        </button>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos;