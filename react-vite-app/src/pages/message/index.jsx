import {css} from '@emotion/css';
import {Spacer} from '../../components/Spacer';
import {default as Layout} from '../../layouts/default';

const MessagePage = ({tilte}) => {
  return (
    <Layout tilte={tilte}>
      {[...Array(100).keys()].map((n) => {
        return <Spacer key={n} />;
      })}
    </Layout>
  );
};

export {MessagePage};
