import React from 'react';

import { HEADER_ANIMATION } from '../../utils/animations';

import { AnimatedContainer, NavLinks, NavLogo } from './styles';

const Header: React.FC = () => (
  <AnimatedContainer
    variants={HEADER_ANIMATION}
    initial="unMounted"
    animate="mounted"
    exit="unMounted"
  >
    <div>
      <NavLogo />
      <nav>
        <NavLinks to="home" smooth duration={500} spy offset={-100}>
          Início
        </NavLinks>

        <NavLinks to="about" smooth duration={500} spy offset={-100}>
          Sobre
        </NavLinks>

        <NavLinks to="teamWork" smooth duration={500} spy offset={-130}>
          Trabalho em Equipe
        </NavLinks>

        <NavLinks to="commonQuestions" smooth duration={500} spy offset={-130}>
          FAQ
        </NavLinks>
      </nav>
    </div>
  </AnimatedContainer>
);

export default Header;
