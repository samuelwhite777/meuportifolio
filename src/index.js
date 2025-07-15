// Importa o React, que é a biblioteca principal para construir interfaces de usuário.
// Importa ReactDOM, que é a biblioteca que permite ao React interagir com o DOM do navegador.
//
// Imports React, which is the main library for building user interfaces.
// Imports ReactDOM, which is the library that allows React to interact with the browser's DOM.
import React from 'react';
import ReactDOM from 'react-dom/client'; // Usamos 'react-dom/client' para o React 18+

// Importa o componente principal da sua aplicação, App.
// O caminho é './App' porque App.js está na mesma pasta 'src'.
//
// Imports the main component of your application, App.
// The path is './App' because App.js is in the same 'src' folder.
import App from './App';

// Obtém a referência ao elemento HTML com o id 'root'.
// Este é o local onde todo o seu aplicativo React será renderizado.
//
// Gets the reference to the HTML element with the id 'root'.
// This is the location where your entire React application will be rendered.
const rootElement = document.getElementById('root');

// Cria uma "raiz" React para o seu aplicativo.
// A partir do React 18, 'createRoot' é a forma recomendada de inicializar um aplicativo React.
// Ela oferece melhor desempenho e novos recursos.
//
// Creates a React "root" for your application.
// From React 18 onwards, 'createRoot' is the recommended way to initialize a React application.
// It offers better performance and new features.
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente <App /> dentro da raiz React.
// <React.StrictMode> é um componente que ajuda a identificar problemas potenciais na aplicação
// durante o desenvolvimento. Ele não renderiza nenhuma UI visível e não afeta o build de produção.
//
// Renders the <App /> component inside the React root.
// <React.StrictMode> is a component that helps identify potential problems in the application
// during development. It does not render any visible UI and does not affect the production build.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

