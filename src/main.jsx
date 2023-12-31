import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';//Importa as rotas da aplicação
import { ThemeProvider } from 'styled-components';//Prover um theme para colocar tudo no tema
import theme from './styles/theme';//Importa o tema
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes /> 
    </ThemeProvider>
  </React.StrictMode>,
)//Coloca o Details dentro da página HTML
