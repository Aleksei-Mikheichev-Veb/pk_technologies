import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;

const Label = styled.label`
  color: #4a5568;
`;

const Checkbox = ({ id, label, checked, onChange, disabled }) => {
    return (
        <CheckboxWrapper>
            <StyledCheckbox
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <Label htmlFor={id}>{label}</Label>
        </CheckboxWrapper>
    );
};

export default Checkbox;