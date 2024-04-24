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

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
    expect(getByText('Post Update')).toBeTruthy();
    expect(getByPlaceholderText('Type your update here...')).toBeTruthy();
    expect(getByText('Post')).toBeTruthy();
  });

  it('updates input text', () => {
    // Mock the useState to return a jest function
    const setState = jest.fn();
    React.useState = jest.fn(() => ["", setState]);
  
    const { getByPlaceholderText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
    const input = getByPlaceholderText('Type your update here...');
    fireEvent.changeText(input, 'New update text');
    
    expect(setState).toHaveBeenCalledWith('New update text');
  });
  

  it('submits update and handles response', async () => {
    // Provide initial state for `update` and ensure correct params structure
    React.useState = jest.fn()
      .mockReturnValueOnce(['New update text', jest.fn()])  // Mock state for 'update'
      .mockReturnValueOnce([new Date("2024-04-23"), jest.fn()]); // Mock state for 'date'
  
    axios.post.mockResolvedValue({ data: { status: 'SUCCESS' } });
  
    const { getByText } = render(<PostUpdate navigation={{ navigate: mockNavigate }} route={mockRoute} />);
    const postButton = getByText('Post');
    
    await act(async () => {
      fireEvent.press(postButton);
    });
    
    expect(axios.post).toHaveBeenCalledWith("http://172.25.14.12:3000/updates", {
      username: mockRoute.params, // Make sure this matches expected structure
      date: "2024-04-23",
      update: 'New update text'
    });
  });
  
  it('handles network errors gracefully', async () => {
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
