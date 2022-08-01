import {css, cx} from '@emotion/css';
import {Button} from '@mui/material';
import {BsFillPlusCircleFill} from 'react-icons/bs';
const DoTwitter = ({size = 24, className}) => {
  const doTweet = (e) => {
    console.log(`doTweet`);
  };

  return (
    <div
      className={cx(
        css`
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          button {
            @media (max-width: 900px) {
              display: none;
            }
          }
          svg {
            display: none;
            @media (max-width: 900px) {
              display: block;
            }
            &:hover {
              cursor: pointer;
              background: #f7f7f7;
            }
          }
        `,
        className
      )}
    >
      <BsFillPlusCircleFill size={size} onClick={doTweet} />
      <Button
        variant="outlined"
        className={css`
          margin-top: 2rem;
        `}
        fullWidth
        onClick={doTweet}
      >
        Tweet
      </Button>
    </div>
  );
};

export {DoTwitter};
