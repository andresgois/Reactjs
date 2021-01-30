window.onload = initPage;

function initPage(){

  const menu = {
    selector: '.principal',
  }
  console.log(menu.selector.toUpperCase());
  
  const unit = (nome) => nome.toUpperCase();
  console.log("Arraw: "+unit('teste'));

  //===================== Destructuring
  function handleMouse(e){
    const { clientX, clientY} = e;
    console.log("Eixo X: "+clientX+"  Eixo Y: "+clientY);
  }

  document.addEventListener('click', handleMouse);

  const useQuad = [
    4,
    function (lado) {
      return 4 * lado;
    },
  ];
  const [lado, perimetro] = useQuad;
  console.log(lado);
  console.log(perimetro(2));

  //===================== Rest
  function showList(emp, ...cli) {
    cli.forEach( (cli) => {
      console.log(cli, emp)
    });
  }
  showList('Google', ['Andre', 'Rafael', 'Teste']);

  //===================== Spred
  const num = [10,5,9,25];// distribui a lista
  const maior = Math.max(...num);
  console.log(maior);

  //====================== fetch
  fetch('https://jsonplaceholder.typicode.com/users')
          .then( (res) =>{  res.json()})
          .then( (json) => {
            console.log(json);
          });
  
  async function fetchCep(url){
    const resp = await fetch(url);
    const json = await resp.json();
    return json;
  }

  const cep = fetchCep('https://jsonplaceholder.typicode.com/users');


  //====================== Métodos de array
  const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados',
  ]; 
  // FILTER
  const precoFiltro = precos.filter( function(p){
    return p.includes('R$')
  })
  console.log(precoFiltro);

  // MAP
  const precosNum = precoFiltro.map( (p) => 
    Number(p.replace('R$ ', '')),
  );
  console.log(precosNum);

  //========================= Botoes
  const active = true;
  const button = active && 'Botão está ativo';

  console.log(button);

 

}