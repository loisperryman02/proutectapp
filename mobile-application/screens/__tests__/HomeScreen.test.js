import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  const routeMock = { params: { username: 'TestUser' } };
  const navigationMock = { navigate: jest.fn() };

  it('should display the welcome message with the username', () => {
    const { getByText } = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
    expect(getByText(`Welcome TestUser`)).toBeTruthy();
  });

  it('should navigate to the Map screen when "Go to maps" is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
    const button = getByText('Go to maps');
    fireEvent.press(button);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Map');
  });

  it('should navigate to the PostUpdate screen when "Post an update" is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
    const button = getByText('Post an update');
    fireEvent.press(button);
    expect(navigationMock.navigate).toHaveBeenCalledWith('PostUpdate', 'TestUser');
  });

  it('should navigate to the Updates screen when "View updates" is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
    const button = getByText('View updates');
    fireEvent.press(button);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Updates', 'TestUser');
  });

  it('should navigate to the Friends screen when "View friends" is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
    const button = getByText('View friends');
    fireEvent.press(button);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Friends', 'TestUser');
  });
});
