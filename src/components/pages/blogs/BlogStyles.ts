import styled from 'styled-components';

export const BlogContainer = styled.main`
  width: 90vw;
  margin: auto;

  @media screen and (min-width: 520px) {
    width: 60vw;
  }
`;

export const BlogParagraph = styled.p`
  font-weight: 400;
  word-wrap: break-word;
  font-kerning: normal;
  color: hsl(0deg 0% 0% / 90%);
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 1.75rem;
`;

export const BlogSubTitle = styled.h2`
  color: inherit;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 900;
  font-size: 2.2rem;
  line-height: 1.1;
`;

export const blogImg = {
  display: 'block',
  margin: '3rem auto',
  maxWidth: '100%'
};
