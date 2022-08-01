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
import {NewsLetterPage} from './pages/newsletter';
import {ProPage} from './pages/pro';
import {AdsPage} from './pages/ads';
import {AnalyticsPage} from './pages/analytics';
import {MediaStudioPage} from './pages/media-studio';
import {SettingsAndPrivacyPage} from './pages/settings-and-privacy';
import {HelpPage} from './pages/help';
import {DisplayPage} from './pages/display';
import {KeyboardShortcutPage} from './pages/keyboard-shortcuts';
import {DoTwitter} from './components/DoTwitter';

const StyledContainer = styled.div`
  position: relative;
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
        <Route
          path={`/newsletters`}
          element={<NewsLetterPage tilte={`Newsletters`} />}
        />
        <Route
          path={`/pro`}
          element={<ProPage tilte={`Twitter for Professionals`} />}
        />
        <Route path={`/ads`} element={<AdsPage tilte={`Twitter Ads`} />} />
        <Route
          path={`/analytics`}
          element={<AnalyticsPage tilte={`Analytics`} />}
        />
        <Route
          path={`/media-studio`}
          element={<MediaStudioPage tilte={`Media Studio`} />}
        />
        <Route
          path={`/settings-and-privacy`}
          element={<SettingsAndPrivacyPage tilte={`Settings and Privacy`} />}
        />
        <Route path={`/help`} element={<HelpPage tilte={`Help Center`} />} />
        <Route path={`/display`} element={<DisplayPage tilte={`Display`} />} />
        <Route
          path={`/keyboard-shortcuts`}
          element={<KeyboardShortcutPage tilte={`Keyboard shortcuts`} />}
        />
      </Routes>
      <Widgets />

      <div
        className={css`
          display: none;
          @media (max-width: 900px) {
            display: block;
          }
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          z-index: 2;
        `}
      >
        <DoTwitter size={48} />
      </div>
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
