import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {
  links: string[];
}

const Navbar = ({ links }: NavbarProps) => (
  <StyledNavbar>
    <StyledNavbarList>
      {links.map((link) => (
        <StyledNavbarLink key={`l-${link}`}>
          <Link to={link}>{link}</Link>
        </StyledNavbarLink>
      ))}
    </StyledNavbarList>
  </StyledNavbar>
);

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundGrey};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.heading};
  width: 100%;
  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 20px;
`;

const StyledNavbarList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vw;
  margin-right: 50px;
`;

const StyledNavbarLink = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.insignificant};
  }
  a:hover {
    color: #ffffff;
  }
`;

export default Navbar;
