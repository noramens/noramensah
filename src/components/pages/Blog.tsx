import { FC } from 'react';
import { blogs } from '../../helpers/db';

import { BlogContainer } from './blogs/BlogStyles';
import {
  AboutTitle,
  ArticleContainer,
  AboutSubtitle,
  Paragraph,
  ReadMore,
  ReadMoreLink
} from '../Styles';

const Blog: FC = () => {
  return (
    <BlogContainer>
      <AboutTitle data-testid="blog-title">Blog Posts</AboutTitle>
      {blogs.map(blog => (
        <ArticleContainer key={blog.id} borderColor={blog.borderColor}>
          <AboutSubtitle>{blog.title}</AboutSubtitle>
          <Paragraph>{blog.description}</Paragraph>
          {blog.url && (
            <ReadMore
              href={blog.url}
              target="_black"
              buttonColor={blog.buttonColor}
            >
              Read More
            </ReadMore>
          )}

          {blog.to && (
            <ReadMoreLink to={blog.to} buttonColor={blog.buttonColor}>
              Read More
            </ReadMoreLink>
          )}
        </ArticleContainer>
      ))}
    </BlogContainer>
  );
};

export default Blog;
