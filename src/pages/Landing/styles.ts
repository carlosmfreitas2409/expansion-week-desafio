import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

import headerVector from '../../assets/headerVector.svg';

interface TeamWorkProps {
  align?: 'left' | 'center';
}

interface TeamWorkIconProps {
  color: string;
}

export const Container = styled.div`
  height: 100vh;
`;

export const AnimatedBanner = styled(motion.div)`
  display: flex;
  justify-content: center;

  background-image: url(${headerVector});
  background-repeat: no-repeat;
  background-position: right top;

  @media (max-width: 1194px) {
    background: none;
  }

  height: 827px;

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1200px;
    margin-top: 75px;

    @media (max-width: 1194px) {
      align-items: center;
    }

    h2 {
      width: 316px;
      color: #333;
      font-weight: 700;
      font-size: 48px;

      @media (max-width: 1194px) {
        width: 377px;
        font-size: 34px;
      }
    }

    p {
      width: 373px;
      color: #909090;
      font-size: 18px;
      font-family: 'Open Sans', sans-serif;
      line-height: 25px;
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;

export const PrimaryBtn = styled.button`
  padding: 13px 50px;
  background: #6c63ff;
  color: #fff;
  border-radius: 0px 25px 25px 25px;
  border: 0;
  outline: 0;

  transition: background 0.2s;

  & + button {
    margin-left: 15px;
  }

  &:hover {
    background: ${shade(0.2, '#6C63FF')};
  }
`;

export const SecondaryBtn = styled.button`
  padding: 13px 50px;
  color: #6c63ff;
  background: transparent;
  border-radius: 25px;
  border: 2px solid #6c63ff;
  outline: 0;
  text-decoration: none;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #6c63ff;
    color: #fff;
  }
`;

export const Recommended = styled.div`
  margin-top: 70px;

  h4 {
    font-size: 21px;
    font-weight: bold;
    color: #000;
  }

  span {
    font-size: 17px;
    color: #6e6c6d;
    margin-top: 11px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 30px;

    div {
      display: flex;
      transition: all ease 0.4s;
    }
  }
`;

export const RecommendedCard = styled.div`
  margin-right: 23px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  strong {
    font-size: 17px;
    font-weight: bold;
    color: #000;
    margin-top: 18px;
  }
`;

export const RecommendedNext = styled.div`
  width: 30px;
  height: 30px;
  background: #6c63ff;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#6C63FF')};
  }
`;

export const AnimatedAbout = styled(motion.div)`
  margin-top: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 1194px) {
    margin-top: 10px;
  }

  > section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 994px;
  }
`;

export const AboutInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1194px) {
    flex-direction: column;

    img {
      display: none;
      visibility: hidden;
    }
  }

  & + div {
    margin-top: 70px;

    @media (max-width: 1194px) {
      margin-top: 100px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
      font-family: 'Open Sans', sans-serif;
      font-size: 36px;

      @media (max-width: 1194px) {
        font-size: 24px;
      }
    }

    h3 {
      font-size: 64px;
      font-weight: bold;
      color: #333333;
      margin-top: 13px;

      @media (max-width: 1194px) {
        font-size: 36px;
      }
    }

    p {
      width: 488px;
      font-family: 'Open Sans', sans-serif;
      font-size: 24px;
      text-align: center;
      margin-top: 30px;

      @media (max-width: 1194px) {
        font-size: 17px;
        margin-top: 20px;
        padding: 0 25px;
      }
    }
  }
`;

export const ReadMoreBtn = styled.button`
  width: 20%;
  margin: 50px auto 0;

  background: #6c63ff;
  color: #fff;
  padding: 15px;
  border-radius: 25px;
  font-size: 18px;

  border: 0;
  outline: 0;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#6C63FF')};
  }

  @media (max-width: 1194px) {
    width: calc(100% - 70%);
  }
`;

export const ReadMore = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

  @media (max-width: 1094px) {
    iframe {
      width: calc(100% - 25%);
    }
  }

  iframe {
    border-radius: 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    margin-top: 50px;
  }
`;

export const ReadMoreInner = styled.div`
  display: flex;

  & + div {
    margin-top: 60px;
  }

  &:nth-of-type(even) div {
    padding-inline-end: 0;
    padding-inline-start: 74px;

    @media (max-width: 1094px) {
      padding-inline-end: 0;
      padding-inline-start: 0;
    }
  }

  @media (max-width: 1094px) {
    flex-direction: column;

    width: 100vw;
    padding: 0 35px;

    img {
      visibility: hidden;
      display: none;
    }
  }

  > div {
    @media (max-width: 1094px) {
      padding-inline-end: 0;
      padding-inline-start: 0;
    }

    padding-inline-end: 74px;

    h4 {
      color: #333;
      font-size: 37px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      font-family: 'Open Sans', sans-serif;
      margin-top: 20px;

      strong {
        font-weight: bold;
      }

      h5 {
        font-weight: bold;
        font-size: 20px;
        color: #000;
        margin-bottom: 4px;
      }
    }
  }

  img {
    width: 437px;
    height: 246px;
    border-radius: 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const SectionDivisor = styled.div`
  width: 1140px;
  border: 1px solid #ccc;
  color: #cccccc;

  margin: 83px auto;

  @media (max-width: 1194px) {
    width: calc(100% - 10em);
  }
`;

export const SectionTitle = styled.h3`
  font-size: 64px;
  font-weight: bold;
  color: #333333;
  text-align: center;

  @media (max-width: 1194px) {
    font-size: 48px;
    padding: 0 50px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;

  > section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 1140px;

    > div {
      margin-top: 63px;
      display: flex;

      @media (max-width: 1194px) {
        flex-direction: column;
        align-items: center;
        padding: 0 45px;
      }
    }
  }
`;

export const TeamWorkCard = styled.div<TeamWorkProps>`
  width: 100%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;
  border-radius: 20px;
  padding: 30px 41px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.4s;

  &:hover {
    transform: translateY(-5px) translateZ(0);
  }

  & + div {
    margin-left: 30px;

    @media (max-width: 1194px) {
      margin-left: 0px;
      margin-top: 50px;
    }
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-top: 16px;
    text-align: center;
  }

  p {
    margin-top: 20px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;

    ${props =>
      props.align &&
      css`
        text-align: ${props.align};
      `}
  }

  span {
    margin-top: 20px;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const TeamWorkIcon = styled.div<TeamWorkIconProps>`
  width: 122px;
  height: 122px;

  background: ${props => props.color || 'transparent'};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommonQuestionsCard = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;
  border-radius: 20px;
  padding: 70px 42px 128px;

  display: flex;
  flex-direction: column;

  transition: transform 0.4s;

  &:hover {
    transform: translateY(-5px) translateZ(0);
  }

  & + div {
    margin-left: 30px;

    @media (max-width: 1194px) {
      margin-left: 0px;
      margin-top: 50px;
    }
  }

  h3 {
    color: #5a51e3;
    font-size: 36px;
    text-align: center;
  }

  p {
    margin-top: 20px;
    color: #333;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    line-height: 25px;

    a {
      text-decoration: none;
      color: #333;

      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#6c63ff')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #333333;
    font-size: 18px;
    font-weight: 500;

    margin-top: 20px;

    transition: color 0.3s;

    &:hover {
      color: ${shade(0.2, '#6c63ff')};
    }

    svg {
      margin-left: 7px;
    }
  }
`;
