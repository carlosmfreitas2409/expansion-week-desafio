import React, { useCallback } from 'react';
import {
  FiChevronUp,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

import whiteLogo from '../../assets/white-logo.svg';

import { Container, FooterLeft, FooterRight, FooterCopy } from './styles';

const Footer: React.FC = () => {
  const handleScrollTopButton = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Container>
        <section>
          <FooterLeft>
            <a href="/">
              <img src={whiteLogo} alt="Soft Skills" />
            </a>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook size={20} color="#ffffff" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram size={20} color="#ffffff" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube size={20} color="#ffffff" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter size={20} color="#ffffff" />
              </a>
            </div>
          </FooterLeft>

          <FooterRight>
            <p>
              <Link to="/">Direitos Autorais</Link>
              <Link to="/">Termos de Uso</Link>
              <Link to="/">Políticas de Privacidade</Link>
            </p>
            <div>
              <button type="button" onClick={handleScrollTopButton}>
                <FiChevronUp size={25} color="#ffffff" />
              </button>
            </div>
          </FooterRight>
        </section>
      </Container>
      <FooterCopy>2020 © Soft Skills Inc.</FooterCopy>
    </>
  );
};

export default Footer;
