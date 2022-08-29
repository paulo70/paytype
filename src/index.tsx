import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global'

import App from './App';
import Container from './components/Wrapper'
import Header from './components/Header'

import SearchContextProvider from './contexts/Search'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SearchContextProvider>
    <Header />
    <Container>
      <App />
    </Container>
    <GlobalStyle />
  </SearchContextProvider>
);