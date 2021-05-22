import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: var(--green);
    height: 3.5rem;
    border-radius: 0.75rem;
    border: 0;
    padding: 0 1rem;
    color: var(--greenDark);
    width: 100%;
    font-weight: bold;
    margin-top: 1rem;
    transition: background-color 0.2s;
    
    &:hover {
    background: ${shade(0.2, '#3CB371')};
  }
`