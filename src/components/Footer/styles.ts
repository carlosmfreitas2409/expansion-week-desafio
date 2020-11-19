import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  margin-top: 83px;
  background: #6c63ff;
  color: #fff;

  display: flex;
  justify-content: center;

  section {
    display: flex;
    justify-content: space-between;
    width: 1140px;

    margin-top: 80px;
    margin-bottom: 43px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    margin-top: 23px;

    a {
      background: #4e47c1;
      border-radius: 5px;
      padding: 7px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background 0.3s;

      &:hover {
        background: ${shade(0.2, '#4e47c1')};
      }

      & + a {
        margin-left: 10px;
      }
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p > a {
    color: #fff;
    text-decoration: none;

    transition: color 0.3s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  a + a {
    margin-left: 30px;
  }

  div {
    margin-top: 40px;

    button {
      background: #4e47c1;
      border-radius: 5px;
      padding: 5px;
      border: 0;
      outline: none;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background 0.3s;

      &:hover {
        background: ${shade(0.2, '#4e47c1')};
      }
    }
  }
`;

export const FooterCopy = styled.div`
  background: #5a51e8;
  color: #fff;
  padding: 15px;

  display: flex;
  justify-content: center;

  section {
    display: flex;
    justify-content: space-between;
    width: 1140px;
  }
`;
