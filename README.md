# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Regras do useEffect()

Um componente, assim como o ser humano, tem um ciclo de vida! No caso do componente, ele nasce, compartilha informação e morre!

Mas como assim ele morre???

Nossa aplicação não tem múltiplas telas ou renderização condicional de componentes, por isso não conseguimos ver um componente morrendo em si, mas o termo "morrer" é mais conhecido como unmount, ou "desmontar" em português, assim como "nascer" seria mount, que é "montar" em português, o que faz muito mais sentido para um componente né?

Em geral um componente tem um ciclo de vida assim:

    [componentWillMount (antes de ser montado)]
    [componentDidMount (acabou de ser montado)]
    [componentWillUpdate (componente acabou de atualizar)]
    [componentWillUnmount (componente vai ser desmontado)]

Esses palavrões que eu coloquei acima e não foram à toa, são métodos que podem ser utilizados em class components assim como o método render que utilizamos para renderizar o JSX.

Claro que esses não são os únicos métodos, mas são os mais importantes para que consigamos entender o ciclo de vida de forma didática, caso queira saber mais, acesse a documentação sobre React.Component.

Tá, beleza Luiz, você está me falando sobre class components, mas não estamos trabalhando com hooks??? cadê o ciclo de vida com function components???

Vamos ver então essas funções acima escritos com function components:

## componentWillMount
    useLayoutEffect(() => {
        …
    },[])

    Começamos com um bem pouco utilizado, o hook useLayoutEffect, ele com o array vazio atua como o componentWillMount. É usado quando você precisa mudar algo visualmente antes do componente aparecer, para que não haja aquele problema da tela piscar assim que a tela carrega, um bom exemplo disso atualmente é a mudança de temas para light/dark.


## componentDidMount
    useEffect(() => {
        …
    }, [])

    O useEffect com o array de dependências vazio atua como ocomponentDidMount, diferente do useLayoutEffect, ele executa assim que o componente é renderizado, normalmente é utilizado para fazer chamadas para o servidor ou fazer algum cálculo com props passados.


## componentWillUpdate
    useEffect(() => {
        …
    }, [variavel])

    O componentWillUpdate pode ser feito tanto pelo useLayoutEffect quanto pelo useEffect, desde que tenha uma variável no array de dependências e, à partir da primeira execução, os 2 atuarão como componentWillUpdate, sempre executando quando essa variável mudar.


## componentWillUnmount
    useEffect(() => {
    return () => {
        …
    }
    },[])

    Diferente do que muitas pessoas pensam, também existe a representação do componentWillUnmount em hooks, que é retornar uma função dentro do useEffect! dessa forma essa função dentro do return só será executada quando o componente estiver desmontando. É bastante usado para clearTimeout, clearInterval ou para enviar informações de acesso daquele componente para outro lugar.