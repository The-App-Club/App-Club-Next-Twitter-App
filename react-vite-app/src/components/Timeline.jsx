import {useState, useEffect} from 'react';
import {Post} from './Post';
import {TweetBox} from './TweetBox';
import FlipMove from 'react-flip-move';
import {css} from '@emotion/css';

const Timeline = () => {
  // https://vinicius73.github.io/gravatar-url-generator/#/
  const [posts, setPosts] = useState([
    {
      id: 0,
      displayName: `napzak5`,
      username: `napzak5`,
      verified: true,
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      avatar: `https://gravatar.com/avatar/0e5efebb89a52340e4dfcb86b7a1f557?s=400&d=robohash&r=x`,
      image: ``,
    },
    {
      id: 1,
      displayName: `nap5`,
      username: `nap5`,
      verified: true,
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      avatar: `https://gravatar.com/avatar/23785876f21b13b9bd109e4131717179?s=400&d=robohash&r=x`,
      image: `https://media.giphy.com/media/3XUbDJ3rPBK1y/giphy.gif`,
    },
    {
      id: 2,
      displayName: `zak5`,
      username: `zak5`,
      verified: true,
      text: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
      avatar: `https://gravatar.com/avatar/27bbc296fc37cc99b8dfd5ddca405ccf?s=400&d=robohash&r=x`,
      image: ``,
    },
    {
      id: 2,
      displayName: `zak5`,
      username: `zak5`,
      verified: true,
      text: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
      avatar: `https://gravatar.com/avatar/27bbc296fc37cc99b8dfd5ddca405ccf?s=400&d=robohash&r=x`,
      image: ``,
    },
    {
      id: 2,
      displayName: `zak5`,
      username: `zak5`,
      verified: true,
      text: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
      avatar: `https://gravatar.com/avatar/27bbc296fc37cc99b8dfd5ddca405ccf?s=400&d=robohash&r=x`,
      image: ``,
    },
    {
      id: 2,
      displayName: `zak5`,
      username: `zak5`,
      verified: true,
      text: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
      avatar: `https://gravatar.com/avatar/27bbc296fc37cc99b8dfd5ddca405ccf?s=400&d=robohash&r=x`,
      image: ``,
    },
  ]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
      `}
    >
      <TweetBox />
      <FlipMove
        className={css`
          position: relative;
          z-index: 1;
        `}
      >
        {posts.map((post, index) => {
          return (
            <Post
              key={index}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export {Timeline};
