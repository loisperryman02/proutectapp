import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Updates from '../Updates'; // Adjust the import path as necessary
import axios from 'axios';

jest.mock('axios');

const mockNavigation = {
    navigate: jest.fn()
  };
const mockRoute = {
    params: 'testUser'
};

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

describe('Updates Component', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };
  const mockRoute = {
    params: 'testUser'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and displays the updates title', async () => {
    const { getByText, findAllByText } = render(<Updates navigation={mockNavigation} route={mockRoute} />);
    
    await waitFor(() => {
      expect(getByText('Updates')).toBeTruthy();
      expect(getByText('Update: Enjoyed a great walk in the park')).toBeTruthy();
      expect(getByText('Update: Saw a beautiful sunset today')).toBeTruthy();
    });
  
    const updateTexts = await findAllByText(/Update:/);
    expect(updateTexts.length).toBe(2); // Check if two updates are displayed
  });
  

  it('fetches updates on mount and checks axios call', async () => {
    const updatesData = [
      { _id: 1, update: 'Update 1', username: 'user1', date: '2021-07-21' },
      { _id: 2, update: 'Update 2', username: 'user2', date: '2021-07-22' }
    ];
    axios.get.mockResolvedValue({ data: { updates: updatesData } });

    render(<Updates navigation={mockNavigation} route={mockRoute} />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`http://172.25.14.12:3000/updates/testUser`);
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
      expect(getByText('Date: 21/07/2021')).toBeTruthy(); // Assuming the date is formatted as 'MM/DD/YYYY'
      expect(getByText('Update: Update 2')).toBeTruthy();
      expect(getByText('By: user2')).toBeTruthy();
      expect(getByText('Date: 22/07/2021')).toBeTruthy();
    });
  });
});
