import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ResponsePage from '../ReponseScreen';  
import axios from 'axios';
import { TextInput } from 'react-native';

jest.mock('axios');
const IP_ADDRESS = ""

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

  it('components and text renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<ResponsePage navigation={{ navigate: mockNavigate }} route={routeParams} />);
    expect(getByText('Route Feedback')).toBeTruthy();
    expect(getByPlaceholderText('Enter more feedback here...')).toBeTruthy();
  });

  it('input variable is updated when user types into the input box', () => {
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

  it('submits feedback to the correct api endpoint and navigates to the map page when the home button is pressed', async () => {
    axios.post.mockResolvedValue({ data: { status: 'SUCCESS' } });

    const { getByText } = render(<ResponsePage navigation={{ navigate: mockNavigate }} route={routeParams} />);
    const button = getByText('Return to Map');
    fireEvent.press(button);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(`http://${IP_ADDRESS}/response`, {
        coordinates: 'someCoordinates',
        date: '2024-04-23',
        response: ''  
      });
      expect(mockNavigate).toHaveBeenCalledWith("Map");
    });
  });

  it('does not navigate back to the map page if there is an error response from the server', async () => {
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
