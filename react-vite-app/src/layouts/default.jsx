import {css} from '@emotion/css';
import {motion} from 'framer-motion';
import {memo} from 'react';

const motionConfig = {
  initial: {
    x: 0,
    y: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hide: {
    x: 0,
    y: 60,
    opacity: 0,
  },
};

const Layout = ({children, tilte}) => {
  return (
    <motion.div
      variants={motionConfig}
      initial={'initial'}
      animate={'animate'}
      exit={'hide'}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
      className={css`
        position: relative;
        max-width: 600px;
        width: 100%;
        overflow: hidden;
        overflow-y: scroll;
        @media (max-width: 900px) {
          margin-right: 2rem;
        }
        @media (max-width: 768px) {
          margin-right: 0.5rem;
        }
        &::-webkit-scrollbar {
          display: none;
        }
        & > .header {
          position: sticky;
          top: 0;
          background-color: white;
          padding: 1rem 0 1rem;
          @media (max-width: 900px) {
            padding: 0.5rem 0 1rem;
          }
          z-index: 2;
        }
      `}
      onAnimationStart={(e) => {}}
      onAnimationComplete={(e) => {}}
    >
      <div className="header">
        <h2>{tilte}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default memo(Layout);
