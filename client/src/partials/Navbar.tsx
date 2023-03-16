import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {
  links: string[];
}

const Navbar = ({ links }: NavbarProps) => (
  <StyledNavbar>
    <NavbarLogo src={window.location.origin + '/PinkLogo.png'} />
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
  z-index: 1000;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 30px 100px 20px 100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavbarLogo = styled.img`
  color: ${(props) => props.theme.colors.insignificant};
  font-weight: bold;
  height: 30px;
`;

const StyledNavbarList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vw;
`;

const StyledNavbarLink = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.insignificant};
    transition: 0.5s;
    font-weight: bold;
  }
  a:hover {
    color: ${(props) => props.theme.colors.minor};
  }
`;

export default Navbar;
