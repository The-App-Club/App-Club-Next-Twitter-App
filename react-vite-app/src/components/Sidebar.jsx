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

import {MdOutlineChat} from 'react-icons/md';
import {GrBeacon} from 'react-icons/gr';
import {RiNewspaperLine} from 'react-icons/ri';
import {GrDeploy} from 'react-icons/gr';
import {FaBuysellads} from 'react-icons/fa';

import {RiBarChartFill} from 'react-icons/ri';
import {MdPermMedia} from 'react-icons/md';
import {MdSettings} from 'react-icons/md';
import {MdOutlineHelpOutline} from 'react-icons/md';
import {MdComputer} from 'react-icons/md';
import {MdKeyboard} from 'react-icons/md';

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
        @media (max-width: 900px) {
          max-width: 3rem;
          padding: 0.5rem;
          margin-right: 2rem;
        }
        @media (max-width: 768px) {
          margin-right: initial;
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
          @media (max-width: 900px) {
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
        <SidebarOption text="Home" handleClick={handleMenuClick}>
          <HomeIcon />
        </SidebarOption>
        <SidebarOption text="Explore" handleClick={handleMenuClick}>
          <SearchIcon />
        </SidebarOption>
        <SidebarOption text="Notifications" handleClick={handleMenuClick}>
          <NotificationsNoneIcon />
        </SidebarOption>
        <SidebarOption text="Messages" handleClick={handleMenuClick}>
          <MailOutlineIcon />
        </SidebarOption>
        <SidebarOption text="Bookmarks" handleClick={handleMenuClick}>
          <BookmarkBorderIcon />
        </SidebarOption>
        <SidebarOption text="Lists" handleClick={handleMenuClick}>
          <ListAltIcon />
        </SidebarOption>
        <SidebarOption text="Profile" handleClick={handleMenuClick}>
          <PermIdentityIcon />
        </SidebarOption>
        <SidebarOption
          text="More"
          handleClick={handleMenuClick}
          menuData={[
            {
              id: 0,
              name: `Topics`,
              icon: () => {
                return <MdOutlineChat size={24} />;
              },
            },
            {
              id: 1,
              name: `Moments`,
              icon: () => {
                return <GrBeacon size={24} />;
              },
            },
            {
              id: 2,
              name: `Newsletters`,
              icon: () => {
                return <RiNewspaperLine size={24} />;
              },
            },
            {
              id: 3,
              name: `Twitter for Professionals`,
              icon: () => {
                return <GrDeploy size={24} />;
              },
            },
            {
              id: 4,
              name: `Twitter Ads`,
              icon: () => {
                return <FaBuysellads size={24} />;
              },
            },
            {
              id: 5,
              name: `Analytics`,
              icon: () => {
                return <RiBarChartFill size={24} />;
              },
            },
            {
              id: 6,
              name: `Media Studio`,
              icon: () => {
                return <MdPermMedia size={24} />;
              },
            },
            {
              id: 7,
              name: `Settings and privacy`,
              icon: () => {
                return <MdSettings size={24} />;
              },
            },
            {
              id: 8,
              name: `Help Center`,
              icon: () => {
                return <MdOutlineHelpOutline size={24} />;
              },
            },
            {
              id: 9,
              name: `Display`,
              icon: () => {
                return <MdComputer size={24} />;
              },
            },
            {
              id: 10,
              name: `Keyboard shortcuts`,
              icon: () => {
                return <MdKeyboard size={24} />;
              },
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
