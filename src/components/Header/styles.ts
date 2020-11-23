import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.svg';
import whiteLogo from '../../assets/white-logo.svg';

export const AnimatedContainer = styled(motion.header)`
  display: flex;
  justify-content: center;
  height: 80px;

  z-index: 9999;

  position: absolute;
  right: 0;
  left: 0;

  @media (min-width: 2100px) {
    background: #6c63ff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 2rem;
    position: relative;
  }

  > div {
    width: 1200px;
    padding: 15px 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1245px) {
      padding: 30px;
    }

    @media (max-width: 716px) {
      nav {
        visibility: hidden;
        display: none;
      }
    }
  }
`;

export const NavLogo = styled.div`
  width: 300px;
  padding: 26px 0;
  background-image: url(${logo});
  background-repeat: no-repeat;

  @media (min-width: 2100px) {
    background-image: url(${whiteLogo});
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  opacity: 0.8;

  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & + a {
    margin-left: 32px;
  }

  &.active {
    opacity: 1;

    border-bottom: 2px solid #ff6584;
    padding-bottom: 10px;
  }

  @media (max-width: 1194px) {
    color: #333333;
  }
`;
