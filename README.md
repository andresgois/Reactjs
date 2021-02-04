# Reactjs

#### Reactividade
    > | baseia-se na capacidade de uma variável avisar que foi mudada. Contruindo uma cadeia de reações, um fluxo no código, é possível que mudando uma variável a mudança se propague tornando a aplicação reactiva
## COMANDOS
    - | Fundamentos React
        - npm install -g create-react-app
        - npx create-react-app nome_app
        - cd meu-app-react
        - yarn start
    - |


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
### EXERCÍCIO
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

