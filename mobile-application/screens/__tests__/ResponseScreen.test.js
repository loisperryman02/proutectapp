import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ResponsePage from '../ReponseScreen';  // Adjust the import path as necessary
import axios from 'axios';
import { TextInput } from 'react-native';

jest.mock('axios');

describe('ResponsePage', () => {
  const mockNavigate = jest.fn();
  const routeParams = {
    params: {
      coordinates: 'someCoordinates',
      date: '2024-04-23'
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<ResponsePage navigation={{ navigate: mockNavigate }} route={routeParams} />);
    expect(getByText('Route Feedback')).toBeTruthy();
    expect(getByPlaceholderText('Enter more feedback here...')).toBeTruthy();
  });

  it('allows entering text in the TextInput', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
        <TextInput 
            onChangeText={onChangeTextMock}
            placeholder='Enter more feedback here...'
        />
    );
    const input = getByPlaceholderText('Enter more feedback here...');
    fireEvent.changeText(input, 'New feedback text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New feedback text');
});


  it('submits feedback and navigates on button press', async () => {
    axios.post.mockResolvedValue({ data: { status: 'SUCCESS' } });

    const { getByText } = render(<ResponsePage navigation={{ navigate: mockNavigate }} route={routeParams} />);
    const button = getByText('Return to Map');
    fireEvent.press(button);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://172.25.14.12:3000/response", {
        coordinates: 'someCoordinates',
        date: '2024-04-23',
        response: ''  
      });
      expect(mockNavigate).toHaveBeenCalledWith("Map");
    });
  });

  it('handles server errors gracefully', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));

    const { getByText } = render(<ResponsePage navigation={{ navigate: mockNavigate }} route={routeParams} />);
    const button = getByText('Return to Map');
    fireEvent.press(button);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalledWith("Map"); 
    });
  });
});
