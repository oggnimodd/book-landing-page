import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {
  HeaderWrapper,
  HeaderContent,
  Brand,
  Navigation,
  NavItem,
  MenuIcon,
  NavigationMobile,
  NavigationItemMobile,
} from './Header.style';
import { navigationLinks } from '../../data/navigationLinks';
import useShowNavigation from '../../hooks/useShowNavigation';

const Header = () => {
  const { showNavigation, toggleNavigation } = useShowNavigation();

  return (
    <HeaderWrapper id="header">
      <HeaderContent>
        <Brand>
          Lorem
        </Brand>
        <MenuIcon onClick={toggleNavigation}>
          {
            showNavigation
              ? <AiOutlineClose />
              : <AiOutlineMenu />
          }
        </MenuIcon>
        <Navigation>
          {
            navigationLinks?.length && navigationLinks.map((link) => {
              return (
                <NavItem key={`navigation-link-${link.name}`}>
                  <a href="#">{link.name}</a>
                </NavItem>
              );
            })
          }
        </Navigation>

        {/* Mobile Navigation */}

        {
          showNavigation && (
            <NavigationMobile>
              {
                navigationLinks?.length && navigationLinks.map((link) => {
                  return (
                    <NavigationItemMobile key={`navigation-link-mobile-${link.name}`}>
                      <a href="#">{link.name}</a>
                    </NavigationItemMobile>
                  );
                })
              }
            </NavigationMobile>
          )
        }

      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
