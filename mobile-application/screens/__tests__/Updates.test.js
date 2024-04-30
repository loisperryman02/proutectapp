import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Updates from '../Updates'; 
import axios from 'axios';

jest.mock('axios');
const IP_ADDRESS = "";

beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        updates: [
          { _id: 1, update: 'Enjoyed a great walk in the park', username: 'user1', date: '2021-07-21' },
          { _id: 2, update: 'Saw a beautiful sunset today', username: 'user2', date: '2021-07-22' }
        ]
      }
    });
  });

describe('Updates', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };
  const mockRoute = {
    params: 'testUser'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });  

  it('checks if there are any updates to be viewed by the user', async () => {
    const updatesData = [
      { _id: 1, update: 'Update 1', username: 'user1', date: '2021-07-21' },
      { _id: 2, update: 'Update 2', username: 'user2', date: '2021-07-22' }
    ];
    axios.get.mockResolvedValue({ data: { updates: updatesData } });

    render(<Updates navigation={mockNavigation} route={mockRoute} />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`http://${IP_ADDRESS}/updates/testUser`);
    });
  });

  it('displays updates after fetching from the API', async () => {
    const updatesData = [
      { _id: 1, update: 'Update 1', username: 'user1', date: '2021-07-21' },
      { _id: 2, update: 'Update 2', username: 'user2', date: '2021-07-22' }
    ];
    axios.get.mockResolvedValue({ data: { updates: updatesData } });

    const { getByText, findAllByText } = render(<Updates navigation={mockNavigation} route={mockRoute} />);

    await waitFor(() => {
      expect(findAllByText(/Update:/)).toBeTruthy();
      expect(getByText('Update: Update 1')).toBeTruthy();
      expect(getByText('By: user1')).toBeTruthy();
      expect(getByText('Date: 21/07/2021')).toBeTruthy(); 
      expect(getByText('Update: Update 2')).toBeTruthy();
      expect(getByText('By: user2')).toBeTruthy();
      expect(getByText('Date: 22/07/2021')).toBeTruthy();
    });
  });
});
