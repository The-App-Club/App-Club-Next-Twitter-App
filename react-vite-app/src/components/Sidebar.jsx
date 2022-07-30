import TwitterIcon from '@mui/icons-material/Twitter';
import {SidebarOption} from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from '@mui/material';
import {css} from '@emotion/css';
import styled from '@emotion/styled';

const StyledSidebar = styled.div`
  margin-top: 2rem;
  flex-basis: 20%;
  min-width: 250px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <TwitterIcon
        className={css`
          position: absolute;
          top: 0;
          left: 0;
        `}
      />

      <SidebarOption text="ホーム" Icon={HomeIcon} isActive />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />
      <Button
        variant="outlined"
        className={css`
          margin-top: 2rem;
        `}
        fullWidth
      >
        ツイートする
      </Button>
    </StyledSidebar>
  );
}

export {Sidebar};
