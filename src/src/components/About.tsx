import { FC } from 'react';
import {
  AboutTitle,
  AboutContainer,
  Paragraph,
  ParagraphLinks,
  ImageWrapper,
  AboutSubtitle,
  img
} from './Styles';

const About: FC = () => {
  return (
    <>
      <AboutTitle>All about me...</AboutTitle>
      <AboutContainer>
        <Paragraph>
          Hi 👋! I am Nora Boamaah Mensah. I usually like to be called Nora Mens
          or Nora for short. I am a software engineer from Accra, Ghana and I
          absolutely love what I do because of the impact it brings to my users.
          I currently work as a Frontend Engineer at{' '}
          <ParagraphLinks href="http://mpharma.com" target="_blank">
            mPharma
          </ParagraphLinks>{' '}
          where we are disrupting the health sector in Africa with technology.
        </Paragraph>
        <ImageWrapper>
          <img
            src="/assets/images/noramensahmpharma.jpeg"
            alt="nora and her mpharma collegues"
            width="800px"
            style={img}
          />
        </ImageWrapper>

        <Paragraph>
          I have a bachelor's degree in Information Technology and currently
          pursuing a masters degree at the{' '}
          <ParagraphLinks href="https://www.uel.ac.uk/" target="_blank">
            University of East London
          </ParagraphLinks>{' '}
          where I am studying computer science.
        </Paragraph>

        <AboutSubtitle>My getting to tech story</AboutSubtitle>

        <Paragraph>
          Growing up, I never saw myself sitting behind my laptop almost the
          whole day every day. I was one of those kids who didn’t know exactly
          what they wanted. But Getting into the Junior High and Senior High
          School level, I realised one of the subjects I effortlessly excelled
          in was Information Communication and Technology.
        </Paragraph>

        <ImageWrapper>
          <img
            src="/assets/images/noramensah.jpg"
            alt="nora's profile pciture"
            width="400px"
            style={img}
          />
        </ImageWrapper>

        <Paragraph>
          During my Junior High School days, I represented my school in various
          quiz competitions around that time and mostly came out as winner. All
          that while, I still didn’t consider pursuing it as a career. When it
          came to the point of choosing a course to study in the university,
          among other things, I added a computer-related course maybe because I
          thought it always came easy to me.
        </Paragraph>

        <Paragraph>
          After our first summer vacation, a friend of mine showed me a cool
          website (flight booking site) she built using HTML and CSS (it was
          just the interface😂). I was so intrigued and wide-eyed when she
          showed me the code behind what we were seeing. That was when I decided
          to learn how to code. I went ahead and enrolled in a Bootcamp
          organised by{' '}
          <ParagraphLinks
            href="https://www.linkedin.com/company/devinvogue/"
            target="_blank"
          >
            Developers In Vogue
          </ParagraphLinks>{' '}
          . I fell in love with code and finally decided to pursue this. Mainly
          because of how much I understood coding can improve businesses and
          lives in general.
        </Paragraph>

        <ImageWrapper>
          <img
            src="/assets/images/nora_mensah.jpg"
            alt="nora's profile pciture"
            width="800px"
            style={img}
          />
        </ImageWrapper>

        <AboutSubtitle>What do I plan to do this year?</AboutSubtitle>
        <Paragraph>
          Write more on my blog about React, what I wish I knew when I started
          learning how to code, everything sharable😅. I would try to also give
          back to the community by teaching and mentoring young women who are
          trying to get into tech.
        </Paragraph>

        <AboutSubtitle>What do I do when I’m not coding?</AboutSubtitle>
        <Paragraph>
          I love to write about anything for my future self or others. Check out
          <ParagraphLinks
            href="https://medium.com/@noramens_/about"
            target="_blank"
          >
            my medium page
          </ParagraphLinks>
          . I like to watch movies and spend some time with friends and family.
        </Paragraph>
      </AboutContainer>
    </>
  );
};

export default About;
