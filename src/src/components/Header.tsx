import { FC } from 'react';
import { Container, Nav, NavLinkText } from './Styles';
import { navItems } from '../helpers/constants';

const Header: FC = () => {
  return (
    <Container data-testid="header">
      <Nav>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <NavLinkText to={item.to}>{item.name}</NavLinkText>
            </li>
          ))}
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
