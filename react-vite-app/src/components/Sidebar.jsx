import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from '@mui/material';
import {css, cx} from '@emotion/css';
import styled from '@emotion/styled';
import {default as SidebarOption} from './SidebarOption';
import {DoTwitter} from './DoTwitter';
import {useCallback} from 'react';

const Sidebar = () => {
  const handleMenuClick = useCallback((e, menu) => {
    console.log(`menu`, menu);
  }, []);

  return (
    <div
      className={css`
        max-width: 16rem;
        width: 100%;
        padding: 1rem;
        @media (max-width: 768px) {
          max-width: 3rem;
          padding: 0.5rem;
        }
      `}
    >
      <ul
        className={css`
          width: 100%;
          list-style: none;
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          @media (max-width: 768px) {
            justify-content: center;
            align-items: center;
          }
          flex-direction: column;
          gap: 0.5rem;
        `}
      >
        <SidebarOption
          text="twiiter"
          className={css`
            width: initial;
          `}
          handleClick={handleMenuClick}
        >
          <TwitterIcon />
        </SidebarOption>
        <SidebarOption text="ホーム" handleClick={handleMenuClick}>
          <HomeIcon />
        </SidebarOption>
        <SidebarOption text="話題を検索" handleClick={handleMenuClick}>
          <SearchIcon />
        </SidebarOption>
        <SidebarOption text="通知" handleClick={handleMenuClick}>
          <NotificationsNoneIcon />
        </SidebarOption>
        <SidebarOption text="メッセージ" handleClick={handleMenuClick}>
          <MailOutlineIcon />
        </SidebarOption>
        <SidebarOption text="ブックマーク" handleClick={handleMenuClick}>
          <BookmarkBorderIcon />
        </SidebarOption>
        <SidebarOption text="リスト" handleClick={handleMenuClick}>
          <ListAltIcon />
        </SidebarOption>
        <SidebarOption text="プロフィール" handleClick={handleMenuClick}>
          <PermIdentityIcon />
        </SidebarOption>
        <SidebarOption
          text="もっとみる"
          handleClick={handleMenuClick}
          menuData={[
            {
              id: 0,
              name: `Topics`,
            },
            {
              id: 1,
              name: `Moments`,
            },
            {
              id: 2,
              name: `Newsletters`,
            },
            {
              id: 3,
              name: `Twitter for Professionals`,
            },
            {
              id: 4,
              name: `Twitter Ads`,
            },
            {
              id: 5,
              name: `Analytics`,
            },
            {
              id: 6,
              name: `Media Studio`,
            },
            {
              id: 7,
              name: `Settings and privacy`,
            },
            {
              id: 8,
              name: `Help Center`,
            },
            {
              id: 9,
              name: `Display`,
            },
            {
              id: 10,
              name: `Keyboard shortcuts`,
            },
          ]}
        >
          <MoreHorizIcon />
        </SidebarOption>
        <DoTwitter />
      </ul>
    </div>
  );
};

export {Sidebar};
