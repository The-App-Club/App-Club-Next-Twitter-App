import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {useCallback, useRef, useState} from 'react';

import {Sidebar} from './components/Sidebar';
import {Timeline} from './components/Timeline';
import {Widgets} from './components/Widgets';
import styled from '@emotion/styled';

import '@fontsource/inter';
import './styles/index.scss';

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  border: 3px solid orange;
`;

const App = () => {
  return (
    <StyledContainer>
      <Sidebar />

      {/* <Timeline /> */}

      {/* <Widgets /> */}
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
