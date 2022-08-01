import {Search} from '@mui/icons-material';
import {Button, TextField} from '@mui/material';
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from 'react-twitter-embed';
import {useFormik} from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';
import {css} from '@emotion/css';

const StyledWidgets = styled.div`
  position: relative;
  padding: 1rem;
  max-width: 30rem;
  width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Widgets = () => {
  const validationSchema = yup.object({
    keyword: yup.string('Enter your keyword').required('keyword is required'),
  });
  const formik = useFormik({
    initialValues: {
      keyword: ``,
    },
    validationSchema: validationSchema,
    onSubmit: async (formData, {resetForm}) => {
      // https://stackoverflow.com/a/55803798/15972569
      resetForm();
    },
  });
  return (
    <StyledWidgets>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <TextField
          fullWidth
          id="keyword"
          name="keyword"
          label="Keyword"
          placeholder="keyword..."
          value={formik.values.keyword}
          onChange={formik.handleChange}
          error={formik.touched.keyword && Boolean(formik.errors.keyword)}
          helperText={formik.touched.keyword && formik.errors.keyword}
        />
        <Button size="large" color="primary">
          <Search fontSize="large" />
        </Button>
      </div>

      <h2
        className={css`
          font-size: 1rem;
        `}
      >
        What's happening
      </h2>

      {/* ビルドでこける */}
      {/* <div
        className={css`
          padding: 1rem;
          position: absolute;
          top: 40%;
          left: 0;
          width: 100%;
          max-height: 60%;
          overflow: hidden;
          overflow-y: auto;
          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <TwitterTweetEmbed tweetId={'1552168136954486784'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="napzak5"
          options={{height: 400}}
        />
        <TwitterShareButton
          url={'https://twitter.com/napzak5'}
          options={{text: '#react', via: 'napzak5'}}
        />
      </div> */}
    </StyledWidgets>
  );
};

export {Widgets};
