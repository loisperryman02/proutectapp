// PostUpdate.test.js
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import PostUpdate from '../PostUpdate'; 
import axios from 'axios';

jest.mock('axios');

describe('PostUpdate', () => {
  const mockNavigate = jest.fn();
  const mockRoute = {
    params: { username: 'testUser' }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('all components and text renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
    expect(getByText('Post Update')).toBeTruthy();
    expect(getByPlaceholderText('Type your update here...')).toBeTruthy();
    expect(getByText('Post')).toBeTruthy();
  });

  it('updates input text', () => {
    const setState = jest.fn();
    React.useState = jest.fn(() => ["", setState]);
    const { getByPlaceholderText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
    const input = getByPlaceholderText('Type your update here...');
    fireEvent.changeText(input, 'New update text');
    expect(setState).toHaveBeenCalledWith('New update text');
  });
  
  it('the page does not navigate if an error message is returned in the api response', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    
    const { getByText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
    const postButton = getByText('Post');
    
    await act(async () => {
      fireEvent.press(postButton);
    });
    
    expect(axios.post).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled(); // Ensure navigation does not occur on error
  });

});
