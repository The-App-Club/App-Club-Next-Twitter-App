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
import {HomePage} from './pages/home';
import {TopicPage} from './pages/topic';
import {ExplorePage} from './pages/explore';
import {NotificationPage} from './pages/notification';
import {MessagePage} from './pages/message';
import {BookmarkPage} from './pages/bookmark';
import {ListPage} from './pages/list';
import {ProfilePage} from './pages/profile';
import {MomentPage} from './pages/moment';

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1200px;
  @media (max-width: 900px) {
    max-width: 600px;
  }
  width: 100%;
  margin: 0 auto;
  border: 3px solid orange;
`;

const App = () => {
  const location = useLocation();

  return (
    <StyledContainer>
      <Sidebar />

      <Routes location={location}>
        <Route path={`/`} element={<HomePage tilte={`Home`} />} />
        <Route path={`/explore`} element={<ExplorePage tilte={`Explore`} />} />
        <Route
          path={`/notification`}
          element={<NotificationPage tilte={`Notifications`} />}
        />
        <Route path={`/message`} element={<MessagePage tilte={`Messages`} />} />
        <Route
          path={`/bookmark`}
          element={<BookmarkPage tilte={`Bookmarks`} />}
        />
        <Route path={`/list`} element={<ListPage tilte={`Lists`} />} />
        <Route path={`/profile`} element={<ProfilePage tilte={`Profile`} />} />

        <Route path={`/topic`} element={<TopicPage tilte={`Topic`} />} />
        <Route path={`/moment`} element={<MomentPage tilte={`Moment`} />} />
      </Routes>
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
