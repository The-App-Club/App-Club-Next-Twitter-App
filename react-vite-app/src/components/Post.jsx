import {
  ChatBubbleOutline,
  MonetizationOn,
  FavoriteBorder,
  Repeat,
  VerifiedUser,
} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';
import {forwardRef} from 'react';
import {css} from '@emotion/css';
import styled from '@emotion/styled';

const StyledPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  margin: 30px 0;
  position: relative;
  & > .header {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 0.5rem;
  }
`;

const _Post = ({displayName, username, verified, text, image, avatar}, ref) => {
  return (
    <StyledPost>
      <div className="header">
        <Avatar src={avatar} />
        <div
          className={css`
            padding: 0 0 0 10px;
          `}
        >
          {displayName}
        </div>
        <div
          className={css`
            padding: 0 0 0 5px;
            font-weight: 600;
            font-size: 12px;
            color: darkgrey;
          `}
        >
          <VerifiedUser
            className={css`
              padding: 0 0 0 5px;
              width: 20px;
              height: 20px;
              color: #50b7f5;
            `}
          />
        </div>
        <div
          className={css`
            padding: 0 0 0 5px;
            font-weight: bold;
            font-size: 12px;
            color: darkgrey;
          `}
        >
          {`@${username}`}
        </div>
      </div>
      <Card
        className={css`
          width: 100%;
        `}
      >
        <CardActionArea
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {image && (
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
          )}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {text ||
                `Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          className={css`
            justify-content: space-between;
          `}
        >
          <Button size="small" color="primary">
            <ChatBubbleOutline fontSize="small" />
          </Button>
          <Button size="small" color="primary">
            <Repeat fontSize="small" />
          </Button>
          <Button size="small" color="primary">
            <FavoriteBorder fontSize="small" />
          </Button>
          <Button size="small" color="primary">
            <MonetizationOn fontSize="small" />
          </Button>
        </CardActions>
      </Card>
    </StyledPost>
  );
};

const Post = forwardRef(_Post);

export {Post};
