import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Map from '../Map'; 


describe('Map', () => {

    it('all components and text renders correctly', () => {
      const { getByText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
      expect(getByText('Enter journey details:')).toBeTruthy();
    });
  
  });
  