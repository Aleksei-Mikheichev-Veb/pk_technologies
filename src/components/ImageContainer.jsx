import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CatIcon } from './../image/cat.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const CatImage = styled.img`
  max-width: 100%;
  max-height: 256px;
  object-fit: contain;
`;

const ImageContainer = ({ isEnabled, catImage }) => {
    if (!isEnabled) {
        return (
            <Container>
                <CatIcon/>
            </Container>
        );
    }

    if (!catImage) {
        return (
            <Container>
                <CatIcon/>
            </Container>
        );
    }

    return (
        <Container>
            <CatImage src={catImage} alt="Cat" />
        </Container>
    );
};

export default ImageContainer;