import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    color: var(--text-color);
  }
`;

export const Span = styled.span`
  margin: 0 1rem;
`;
export const Button = styled.button`
  background: none;
  align-items: center;
  padding: 11px 38px;

  color: var(--text-color);
  border: 1px solid var(--button);
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 6px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
