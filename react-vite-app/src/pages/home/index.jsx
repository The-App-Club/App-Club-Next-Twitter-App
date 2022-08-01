import {css} from '@emotion/css';
import {Timeline} from '../../components/Timeline';
import {default as Layout} from '../../layouts/default';
const HomePage = ({tilte = `Home`}) => {
  return (
    <Layout tilte={tilte}>
      <Timeline />
    </Layout>
  );
};

export {HomePage};
