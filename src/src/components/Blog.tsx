import { FC } from 'react';
import {
  AboutTitle,
  ArticleContainer,
  AboutSubtitle,
  Paragraph,
  ReadMore
} from './Styles';
import { blogs } from '../helpers/constants';

const Blog: FC = () => {
  return (
    <>
      <AboutTitle>Blog Posts</AboutTitle>
      {blogs.map(blog => (
        <ArticleContainer key={blog.id} borderColor={blog.borderColor}>
          <AboutSubtitle>{blog.title}</AboutSubtitle>
          <Paragraph>{blog.description}</Paragraph>
          <ReadMore
            href={blog.url}
            target="_black"
            buttonColor={blog.buttonColor}
          >
            Read More
          </ReadMore>
        </ArticleContainer>
      ))}
    </>
  );
};

export default Blog;
