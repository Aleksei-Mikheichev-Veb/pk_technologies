import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import ImageContainer from './components/ImageContainer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 448px;
  margin: 40px auto 0;
`;

const CheckboxContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const App = () => {
  const [catImage, setCatImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  const fetchCat = async () => {
    if (!isEnabled) return;

    try {
      setLoading(true);
      const response = await fetch('https://api.thecatapi.com/v1/images/search');

      if (!response.ok) {
        throw new Error('Failed to fetch cat');
      }

      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error('Error fetching cat:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (autoRefresh && isEnabled) {
      timerRef.current = setInterval(fetchCat, 5000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoRefresh, isEnabled]);


  const toggleEnabled = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);

    if (!newValue) {
      setAutoRefresh(false);
    }
  };

  return (
      <AppContainer>
        <CheckboxContainer>
          <Checkbox
              id="enabled"
              label="Enabled"
              checked={isEnabled}
              onChange={toggleEnabled}
          />

          <Checkbox
              id="autoRefresh"
              label="Auto-refresh every 5 second"
              checked={autoRefresh}
              onChange={() => setAutoRefresh(!autoRefresh)}
              disabled={!isEnabled}
          />
        </CheckboxContainer>

        <Button onClick={fetchCat} disabled={!isEnabled || loading}>
          Get cat
        </Button>

        <ImageContainer
            isEnabled={isEnabled}
            catImage={catImage}
        />
      </AppContainer>
  );
};

export default App;
