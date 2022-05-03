import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled.header`
  ${tw`
    py-4
    w-full 
    relative 
    fixed 
    z-50 
    bg-primary
    top-0 
    left-0
  `}
`;

export const HeaderContent = styled(Wrapper)`
  ${tw`
    flex 
    justify-between 
    items-center  
    relative 
  `}
`;

export const Brand = styled.div`
  ${tw`
    text-3xl 
    text-accent
    font-secondary
  `}
`;

export const MenuIcon = styled.button`
  ${tw`
    lg:hidden
    text-3xl 
  `}
`;

export const Navigation = styled.ul`
  ${tw`
    items-center 
    gap-x-8 
    lg:flex 
    hidden
  `}
`;

export const NavItem = styled.li`
  ${tw`
    font-semibold
    font-primary
    capitalize 
    text-lg
  `}
`;

export const NavigationMobile = styled.ul`
  ${tw`
    absolute 
    w-full 
    top-full 
    left-0
    bg-primary
    py-10
    flex 
    flex-col 
    gap-y-5
    px-5
    z-50
  `}

  box-shadow: rgba(100, 100, 111, 0.2) 0px 16px 18px 0px;
`;

export const NavigationItemMobile = styled(NavItem)`
  ${tw`
    z-50 
    w-full 
  `}

  a{
    ${tw`
      inline-block 
      w-full
    `}
  }
`;
