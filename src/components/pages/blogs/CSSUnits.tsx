import { FC } from 'react';
import { AboutTitle, ParagraphLinks } from '../../Styles';
import {
  BlogContainer,
  BlogParagraph,
  BlogSubTitle,
  blogImg
} from './BlogStyles';

const CSSUnits: FC = () => {
  return (
    <BlogContainer>
      <AboutTitle>PX, REM and EM - how it affects accessibility</AboutTitle>
      <img
        src="/assets/images/pxremem.jpeg"
        alt="a lady drawing on an iPad"
        width="800px"
        style={blogImg}
      />
      <BlogParagraph>
        As software engineers, we are to make sure that the applications that we
        put out are accessible to all. The issue of accessibility in the
        software engineering space is such a huge topic that understanding how
        the units we use affects web accessibility may seem small but goes a
        long way in ensuring that our pages are giving the best experiences they
        should give to all types of users.
      </BlogParagraph>
      <BlogParagraph>
        A key thing to note is that every browser comes with its default
        settings and per the needs of every user, these default settings are
        altered to the desires and needs of the user. Therefore it is imperative
        in keeping this in mind when building applications.
      </BlogParagraph>
      <BlogSubTitle>Pixels (PX)</BlogSubTitle>
      <BlogParagraph>
        By definition, a pixel is a minute area of illumination on a display
        screen, one of many from which an image is composed. In other words, it
        is one of the small dots or squares that make up an image on a computer
        screen.
      </BlogParagraph>
      <BlogParagraph>
        The pixel unit is one of the most commonly used units but the con that
        comes with this unit must be watched. Whenever you use this unit, you
        are not putting the needs of the user at the forefront. This is because
        using pixels disregards the default settings in the browser and enforces
        your specified value. Instead of using px, you may want to consider
        either using rem or em.
      </BlogParagraph>
      <BlogParagraph>
        To properly understand how using pixels affects accessibility and even
        responsiveness, let's look at how it differs from rem and em.
      </BlogParagraph>
      <BlogSubTitle>REM</BlogSubTitle>
      <BlogParagraph>
        According to{' '}
        <ParagraphLinks
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
          target="_blank"
          data-testid="mPharma-link"
        >
          MDN
        </ParagraphLinks>
        , REM stands for root EM. Say I have my base font in my browser set to
        16px (which is the default setting in the browser) and I set my
        font-size to 2rem, it means, I am setting the font-size 2x of whatever
        the browser default setting is, which in this case is 16, making the
        final font-setting to 32px.
      </BlogParagraph>
      <BlogParagraph>
        This helps our users who wish to use a bigger font size for any reason
        or the order, whiles maintaining the hierarchy of fonts in our
        application.
      </BlogParagraph>
      <BlogSubTitle>EM</BlogSubTitle>
      <BlogParagraph>
        Historically, EM is related to the letter M. It was used to describe how
        wide the letter M is in a given typeface. So EM is derived from the
        phonetic of the pronunciation of the letter M.
      </BlogParagraph>
      <BlogParagraph>
        EM comes with a little calculation. A similarity between REM and EM is
        that they both make room to accommodate the needs of different users.
        But what distinguishes EM from REM is that EM uses the parent element as
        a base size.
      </BlogParagraph>
      <BlogParagraph>So that,</BlogParagraph>
      <BlogParagraph>if we have a parent element of say,</BlogParagraph>
      <BlogParagraph>main tag,</BlogParagraph>
      <BlogParagraph>that has a font size of say 0.5 rem</BlogParagraph>
      <BlogParagraph>
        given the default base size, that will be 16 x 0.5 = 8px,
      </BlogParagraph>
      <BlogParagraph>this means 1em in a child element of say</BlogParagraph>
      <BlogParagraph>p tag, element will be equal to 8px.</BlogParagraph>
      <BlogParagraph>
        So unlike REM which uses the base size that has been set in the browser,
        EM uses the size of its immediate parent.
      </BlogParagraph>

      <BlogSubTitle>Conclusion</BlogSubTitle>
      <BlogParagraph>
        Understand px rem and em, and contribute your quota to ensuring the web
        is accessible to all.
      </BlogParagraph>
    </BlogContainer>
  );
};

export default CSSUnits;
