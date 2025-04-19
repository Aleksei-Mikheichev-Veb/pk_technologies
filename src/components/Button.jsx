import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #edf2f7;
  color: #2d3748;
  border-radius: 5px;
  border: 1px solid #cbd5e0;
  cursor: pointer;
  
  &:hover {
    background-color: #e2e8f0;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;