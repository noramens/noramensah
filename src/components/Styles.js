import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 9rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #eeee;
  padding-left: 2rem;
  justify-content: center;
  height: 3.5rem;

  @media screen and (min-width: 520px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-top: 0.25rem;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    li {
      margin: 0;
      margin-right: 0.5rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media screen and (min-width: 520px) {
    display: block;
  }
`;

export const NavLinkText = styled(Link)`
  color: hsl(0deg 0% 0% / 90%);
  font-weight: bold;
  text-decoration: none;
  padding: 0.25rem;

  &:active {
    color: #ff6464;
  }

  &:hover {
    color: #ff6464;
    transition: all 200ms ease-in-out;
  }
`;

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20%;
  margin-bottom: 3rem;

  @media screen and (min-width: 520px) {
    margin-top: 0;
    margin-bottom: 0;
    height: calc(100vh - 3.5rem - 5rem);
  }
`;

export const HomeTitle = styled.h1`
  margin-bottom: 6px;
  font-weight: bold;

  @media screen and (min-width: 520px) {
    font-size: 4.5rem;
  }
`;

export const HomeSubtitle = styled.p`
  color: #ff6464;
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-size: 1.75rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5rem;

  @media screen and (min-width: 520px) {
    font-size: 2.25rem;
  }
`;

export const HomeTagline = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;

  @media screen and (min-width: 520px) {
    font-size: 1.75rem;
  }

  em {
    color: #ff6464;
    font-style: normal;
    font-weight: bold;
  }
`;

export const SocialLink = styled.a`
  color: rgb(89, 89, 89);
  margin: 0 0.25rem;
  font-size: 1.75rem;

  &:hover {
    color: #ff6464;
  }
`;

export const FooterWeapons = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutContainer = styled.main`
  width: 65vw;
  margin: auto;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  word-wrap: break-word;
  font-kerning: normal;
  color: hsl(0deg 0% 0% / 90%);
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: 1.75rem;
`;

export const ParagraphLinks = styled.a`
  color: #ff6464;

  &:hover {
    color: #ff6464;
    transition: all 200ms ease-in-out;
    text-decoration: none;
  }
`;

export const AboutTitle = styled.h1`
  font-family: Playfair Display, serif;
  font-size: 42px;
  text-align: center;
  max-width: 90%;
  margin: 20px auto;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.75rem;
`;

export const AboutSubtitle = styled.h2`
  margin-bottom: 1.75rem;
  font-weight: 900;
  font-family: 'Merriweather', 'Georgia', serif;
  font-size: 1.7rem;
  line-height: 1.1;
`;

export const ArticleContainer = styled.div`
  width: 60vw;
  border: 4px solid ${props => props.borderColor};
  padding: 20px;
  margin: auto;
  text-align: center;
  margin-bottom: 1.7rem;
`;

export const ReadMore = styled.a`
  background-color: ${props => props.buttonColor};
  padding: 5px 15px;
  text-decoration: none;
  color: #000;
`;

export const img = {
  display: 'block',
  margin: '0px auto',
  maxWidth: '100%'
};
