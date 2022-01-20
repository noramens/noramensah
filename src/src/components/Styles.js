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

  @media screen and (min-width: 520px) {
    height: 3.5rem;
    flex-direction: row;
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

  &.active {
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
  font-size: 4rem;
  margin-bottom: 6px;
  font-family: 'Assistant', sans-serif;

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
