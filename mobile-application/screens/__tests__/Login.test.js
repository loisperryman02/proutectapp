import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../Login';
import axios from 'axios';

jest.mock('axios');

describe('Login', () => {
  it('renders all text and placeholder', () => {
    const navigationMock = { navigate: jest.fn() };
    const routeMock = { params: { username: 'testUser' } }; 

    const { getByPlaceholderText, getByText } = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Login Page')).toBeTruthy();
    expect(getByText('Register now!')).toBeTruthy();
    expect(getByText('Forgot password?')).toBeTruthy();
    expect(getByText('Sign in to start your journey.')).toBeTruthy();
  });
});

it('navigates to the home screen on successful login', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockResolvedValue({ data: { message: "Login successful" } });
  
  const { getByText } = render(<HomeScreen navigation={navigationMock} />);
  fireEvent.press(getByText('Login'));

  await waitFor(() => {
    expect(navigationMock.navigate).toHaveBeenCalledWith("Home", expect.any(Object));
  });
});

it('navigates to the sign up page on when user presses the register button', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockResolvedValue({ data: { message: "Login successful" } });

  const { getByText } = render(<HomeScreen navigation={navigationMock} />);
  fireEvent.press(getByText('Register now!'));

  await waitFor(() => {
    expect(navigationMock.navigate).toHaveBeenCalledWith("SignUp");
  });
});

it('displays error message on incorrect login details', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue({ response: { status: 400, data: { message: 'Invalid credentials' } } });

  const { getByPlaceholderText, getByText } = render(<HomeScreen navigation={navigationMock} />);

  fireEvent.changeText(getByPlaceholderText('Username'), 'wronguser');
  fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');

  fireEvent.press(getByText('Login'));

  await waitFor(() => {
    expect(getByText("Invalid credentials")).toBeTruthy();
  });
});


it('displays error message when user cannot be found', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue({ response: { status: 400, data: { message: 'User not found' } } });

  const { getByPlaceholderText, getByText } = render(<HomeScreen navigation={navigationMock} />);

  fireEvent.changeText(getByPlaceholderText('Username'), 'nonExistantUser');
  fireEvent.changeText(getByPlaceholderText('Password'), 'password');

  fireEvent.press(getByText('Login'));

  await waitFor(() => {
    expect(getByText('User not found')).toBeTruthy();
  });
});

it('displays general error message on unknown login failure', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue(new Error('Network Error'));

  const { getByText } = render(<HomeScreen navigation={navigationMock} />);
  fireEvent.press(getByText('Login'));

  await waitFor(() => {
    expect(getByText('Error with Login System')).toBeTruthy();
  });
});

it('displays error message when there is a server error', async () => {
  const navigationMock = { navigate: jest.fn() };
  axios.post.mockRejectedValue({ response: { status: 500, data: { message: "Server error" } } });

  const { getByPlaceholderText, getByText } = render(<HomeScreen navigation={navigationMock} />);

  fireEvent.changeText(getByPlaceholderText('Username'), 'user');
  fireEvent.changeText(getByPlaceholderText('Password'), 'password');

  fireEvent.press(getByText('Login'));

  await waitFor(() => {
    expect(getByText("Server error")).toBeTruthy();
  });
});