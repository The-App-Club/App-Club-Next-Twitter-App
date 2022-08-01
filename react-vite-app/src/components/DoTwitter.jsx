import {css} from '@emotion/css';
import {Button} from '@mui/material';
import {BsFillPlusCircleFill} from 'react-icons/bs';
const DoTwitter = () => {
  const doTweet = (e) => {
    console.log(`doTweet`);
  };

  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          @media (max-width: 768px) {
            display: none;
          }
        }
        svg {
          display: none;
          @media (max-width: 768px) {
            display: block;
          }
          &:hover {
            cursor: pointer;
            background: #f7f7f7;
          }
        }
      `}
    >
      <BsFillPlusCircleFill size={24} onClick={doTweet} />
      <Button
        variant="outlined"
        className={css`
          margin-top: 2rem;
        `}
        fullWidth
        onClick={doTweet}
      >
        ツイートする
      </Button>
    </div>
  );
};

export {DoTwitter};
