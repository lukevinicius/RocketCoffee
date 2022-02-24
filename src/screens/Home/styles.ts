import styled from 'styled-components';
import LogoBlur1 from '../../assets/blur-1.png';

export const Container = styled.div`
  background-image: url(${LogoBlur1});
  background-repeat: no-repeat;
  background-position: left;
  height: 100vh;
  text-align: center;

  h2 {
    font-size: 80px;
  }

  img {
    padding: 0 0;
  }
`;

export const H2Shadow = styled.h2`
  color: var(--background);
  text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
    -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;
