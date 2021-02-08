# Reactjs

#### Reactividade
    > | baseia-se na capacidade de uma variável avisar que foi mudada. Contruindo uma cadeia de reações, um fluxo no código, é possível que mudando uma variável a mudança se propague tornando a aplicação reactiva
## COMANDOS
    - | Fundamentos React
        - npm install create-react-app
        - npx create-react-app nome_app
        - cd meu-app-react
        - yarn start
    - |

## APPLICATION THREE
### HOOKS
##### ESTADO
    -  O estado de uma plicação representa as características dela naquela momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

##### Hooks
> | Componente : Btn
    - Os **Hooks** são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais, Isso antes só era possível com classes.
```
const [ ativo, setAtivo ] = React.useState(false);

function handleClick(){
    setAtivo(!ativo);
}

<button onClick={handleClick}>
    {ativo ? 'Ativo' : 'Inativo'}
</button>
```
##### Props
> | Componente : Btn
    - Podemos passar o estado e a função de modificação como propriedades para outros elementos.

##### REATIVIDADE
> | Componente : Btn
    - Não modifique o estado diretamente. Utilize sempre um função de atualização do estado, pois ela que garante a reatividade dos componentes.
```
const [item, setItem] = React.useState(['Item 1', 'Item 2']);

function handleClick(){
    item.push('novo item); // Errado
}

function handleClickReativo(){
    setItem([...item], 'novo item); // Certo
}
```    

##### EXERCICIO
> | Componente : Renderiza
    - Os links abaixo puxam dados de um produto em formato json
    - https://ranekapi.origamid.dev/json/api/produto/tablet
    - https://ranekapi.origamid.dev/json/api/produto/smartphone
    - https://ranekapi.origamid.dev/json/api/produto/notebook
    - Crie uma interface com 3 botões, um para cada
    - Ao clicar no botão, faça um fetch a api e mostre os dados do produto
    - Mostre apenas um produto por vez
    - Mostre a mensagem carregando... enquanto o fetch é realizado
```
const [dados, setDados] = React.useState(null);
const [carregando, setCarregando ] = React.useState(null);

async function handleClick(event){
    setCarregando(true);
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      );

    const json = await res.json();
    setDados(json);
    setCarregando(false);
  }

  <button style={{ margin: '.5rem'}} onClick={handleClick}>notebook</button>
  {carregando && <p>Carregando...</p>}
  {!carregando && dados && <Produto dados={dados} />}
```  

##### useEffect
> | Componente : HookEffect
    - Todo componente possui um ciclo de vida. Os principais momentos acontecem
    quando um componente é renderizado, atualizado ou destruído. Com o **React.useEffect()**
    podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.
```
React.useEffect( () => {
    console.log('Executa uma única vez, ex: busca dados do banco');
  }, []);

React.useEffect( () => {
    console.log('Executa todas as vezes que a variavel que esta dentro ddo cochete mudar de estado');
  }, [variavel]);
```    

##### useRef
> | Componente : UseRef
    - Retorna um objeto com a propriedade **current**. Esse objeto pode ser utilizado para guardamos valores que irão persistir durante todo o ciclo de vida do elemnto. Geralmente usarmos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o **querySelector** ou similar.

```
  const [ carrinho, setCarrinho ] = React.useState(0);
  const [ notificacao, setNotificacao ] = React.useState(null);
  const timeOutRef = React.useRef();

  function handleClick2(){
    setCarrinho(carrinho + 1)
    setNotificacao('Item adiconado ao carrinho')

    clearTimeout(timeOutRef.current)
    timeOutRef.current = setTimeout( () => {
      setNotificacao(null)
    }, 1000)
  }

``` 

##### useMemo
> | Componente : UseMemo
    - Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebendo um callback e um array de dependências.

##### useCallback
> | Componente : UseCallback
    - Permite definirmos um callback e uma lista de dependências do callback, Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

##### useContext
> | Componente : UseContext
    - createContext
    - O contexto ira permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dados/estados globais como por exemplo dados do usuário logado.
```
 const UseContext = React.createContext();
```    
> | Componente : UseContext
    - 
```
return (
    <UseContext.Provider value={{ nome: 'Andre'}}>
      {children}
    </UseContext.Provider>
  )
```


















## APPLICATION FOUR
### INPUT

##### REACTIVIDADE
> | Componente : Reactivo
- Para criarmos comapos de formulários reativos, devemos definir o estado para o **value** e a função para o **onChange**;
- Estado sempre atribuido ao campo de value;

##### FORM
> | Componente : Reactivo
- No **form** controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o **onSubmit**. O **preventDefault()** irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em **action=""**.

##### MULTIPLOS CAMPOS
> | Componente : Reactivo
- Podemos definir um estado para cada campo.

##### OBJETO
> | Componente : Reactivo
- Podemos definir um objeto que irá conter todos os valores dos campos do formulário.
```
const [from, setForm] = React.useState({
    nome:  '',
    email: '',
})
```
### EXERCÍCIO 01
> | Componente : Exercicio01
* Faça um fetch (post) para a API abaixo
* Para a criação ser aceita é necessário enviar dados de: nome, email, senha, cep, rua, bairro, cidade e estado.
* Essa é a função fetch utilizada para o post
```
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // form é o objeto com os dados do formuário
    body: JSON.stringfy(form),
});
```
* Mostre um mensagem na tela caso a mensagem seja positiva.

### TEXTAREA
> | Componente : Textarea
- no React o **textarea** é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.


### SELECT
> | Componente : Selecte
- O **value** e **onChange** são definidos no select. Para definir um valor inicial, coloque o mesmo no **useState**.

### RADIO
> | Componente : Radio
- No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.

### CHECKBOX
> | Componente : Checkboxx
- O estado do checkbox está relacionado ao **checked**

### EXERCÍCIO 02
> | Componente : Exercicio02
- Otimizar o código do slide anterior
- Utilizando o array abaixo para mostrar cada checkbox na tela
```
const coresArray = ['Azul','Roxo','Laranja','Verde','Vermelho'];
```

### COMPONENTE INPUT
> | Componente : CompInput
- Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.

### COMPONENTE SELECT
> | Componente : CompSelect

### COMPONENTE RADIO
> | Componente : CompRadio

### COMPONENTE CHECKBOX
> | Componente : CompCheck

### COMPONENTE ONBLUR
> | Componente : Onblur
- O **onBlur** é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com Javascript utilizando REGEX.


### COMPONENTE USERFORM
> | Componente : UserForm
- Podemos definir um custom hook para formulários.



## EXTRA
##### Configurando TailwindCSS No React
    * npm install -D tailwindcss postcss autoprefixer onchange postcss-cli postcss-nested npm-run-all
    * crie um diretorio dentron de src
        - src\assets\css   
            - tailwind.src.css
                ```
                @tailwind base;
                @tailwind components;
                @tailwind utilities;
                ```
            - tailwind.css
    * npx tailwind init -p
        - gera o file: tailwind.config.js
    ```
    const colors = require('tailwindcss/colors');

    module.exports = {
    purge: {
        mode: 'layers',
        content: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        colors:{
            blue: colors.lightBlue,
            gray: colors.trueGray,
            red: colors.yellow,
        }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    }

    ```
    * postcss.config.js
    ```
    module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
    ],
    }
    ```

    * package.json
    ```
    "scripts": {
    "start": "npm-run-all start:tailwind -l -p start:p:*",
		"start:tailwind": "postcss ./src/assets/css/tailwind.src.css -o ./src/assets/css/tailwind.css",
		"start:p:watch-tailwind": "onchange \"tailwind.config.js\" \"src/**/*.css\" -e \"./src/assets/css/tailwind.css\" -- npm run start:tailwind",
		"start:p:react": "react-scripts start",
		"build": "run-s build:** -l",
		"build:a:tailwind": "cross-env NODE_ENV=production npm run start:tailwind",
		"build:b:react": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
    },
    ```
