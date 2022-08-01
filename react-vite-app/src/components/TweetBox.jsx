import {useFormik} from 'formik';
import * as yup from 'yup';
import {Button, TextField} from '@mui/material';
import styled from '@emotion/styled';
import {css} from '@emotion/css';

const StyledItem = styled.div`
  margin-top: 1rem;
`;

const TweetBox = () => {
  const validationSchema = yup.object({
    tweetMessage: yup
      .string('Enter your message')
      .required('message is required'),
  });

  const formik = useFormik({
    initialValues: {
      tweetMessage: '',
      tweetImage: ``,
    },
    validationSchema: validationSchema,
    onSubmit: async (formData, {resetForm}) => {
      // https://stackoverflow.com/a/55803798/15972569
      console.log(`process post handling`);
      resetForm();
    },
  });

  return (
    <div
      className={css`
        @media (max-width: 900px) {
          display: none;
        }
      `}
    >
      <form onSubmit={formik.handleSubmit}>
        <StyledItem>
          <TextField
            fullWidth
            id="tweetMessage"
            name="tweetMessage"
            label="Tweet Message"
            placeholder="something..."
            value={formik.values.tweetMessage}
            onChange={formik.handleChange}
            error={
              formik.touched.tweetMessage && Boolean(formik.errors.tweetMessage)
            }
            helperText={
              formik.touched.tweetMessage && formik.errors.tweetMessage
            }
          />
        </StyledItem>
        <div
          className={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 1rem;
          `}
        >
          <StyledItem>
            <Button
              variant="outlined"
              className={css`
                margin-top: 2rem;
              `}
            >
              Media
            </Button>
          </StyledItem>
          <StyledItem>
            <Button
              type="submit"
              variant="outlined"
              className={css`
                margin-top: 2rem;
              `}
            >
              Tweet
            </Button>
          </StyledItem>
        </div>
      </form>
    </div>
  );
};

export {TweetBox};
